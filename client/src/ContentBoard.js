import React from "react";
import ReactHtmlParser from 'html-react-parser';
import ActionButton from './ActionButton';


function ContentBoard(props) {
    const { article, onDelete } = props;

    return (
        <div key={article.title} style={{ border: '1px solid #333' }}>
            <h2>{article.title}</h2>
            <div>{ReactHtmlParser(article.content)}</div>
            <ActionButton idx={article.idx} onDelete={onDelete} />
        </div>
    );

}

export default ContentBoard;