import React from "react";
import ReactHtmlParser from 'html-react-parser';


function ContentBoard(props) {
    const element = props.element;
    return (
        <div key={element.title} style={{ border: '1px solid #333' }}>
            <h2>{element.title}</h2>
            <div>{ReactHtmlParser(element.content)}</div>
        </div>
    );

}

export default ContentBoard;