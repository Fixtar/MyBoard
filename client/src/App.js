import './App.css';
import { useEffect, useState } from 'react';
import Editor from './Editor';
import ContentBoard from './ContentBoard';
import axios from 'axios';

function App() {

  const [onBoardContents, setOnBoardContents] = useState([]);

  useEffect(() => {
    getArticles().then((articles) => {
      setOnBoardContents(articles)
    })
  }, [])

  const getArticles = () => {
    return new Promise((resolve, reject) => {
      axios.get('http://localhost:8000/api/get').then((response) => {
        resolve(response.data)
      })
        .catch((err) => {
          reject(err)
        })
    })
  }

  const handleDelete = (idx) => {
    axios.delete(`http://localhost:8000/api/delete/${idx}`, {
      target: idx
    }).then(() => {
      getArticles().then((articles) => {
        setOnBoardContents(articles)
      })
    })
  };

  const handleSubmit = (title, content) => {
    axios.post('http://localhost:8000/api/insert', {
      title: title,
      content: content
    }).then(() => {
      getArticles().then((articles) => {
        setOnBoardContents(articles)
      })
      alert('등록 완료!');
    })
  }


  return (
    <div className="App">
      <h1>My Board</h1>
      <div className='contentsContainer'>
        {onBoardContents.map(article => {
          return (
            <ContentBoard article={article} onDelete={() => handleDelete(article.idx)} />
          );
        })}
      </div>

      <div className='formWrapper'>
        <Editor onSubmit={handleSubmit} />
      </div>

    </div>
  );
}

export default App;
