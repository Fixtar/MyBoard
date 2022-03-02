const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');
const PORT = process.env.port || 8000;

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "123",
    database: "simpleboard"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((err, req, res, next) => {
    res.status(500).send({
        message: err.message,
    })
})

app.get("/api/get", (req, res) => {
    const sqlQuery = "SELECT * FROM simpleboard;";
    db.query(sqlQuery, (err, result) => {
        res.send(result);
    })
})

app.post("/api/insert", (req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    const sqlQuery = "INSERT INTO simpleboard (title, content) VALUES (?,?)";
    db.query(sqlQuery, [title, content], (err, result) => {
        res.send('success!');
    });
});

app.delete("/api/delete/:idx", (req, res, next) => {
    const idx = req.params.idx;
    const sqlQuery = "DELETE FROM simpleboard WHERE idx=?";
    db.query(sqlQuery, [idx], (err, result) => {
        if (err) {
            next(err);
            return;
        }

        res.send({ success: true });
    });
})



app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
});