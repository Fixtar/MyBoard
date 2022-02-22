import './App.css';
import { useState } from 'react';
import ReactHtmlParser from 'html-react-parser';
import Editor from './Editor';

function App() {

  const [onBoardContents, setonBoardContents] = useState([]);

  function Update(state) {
    setonBoardContents(onBoardContents.concat(state));
  }

  return (
    <div className="App">
      <h1>My Board</h1>
      <div className='contentsContainer'>
        {onBoardContents.map(element => {
          console.log(element);
          return (
            <div key={element.title} style={{ border: '1px solid #333' }}>
              <h2>{element.title}</h2>
              <div>{ReactHtmlParser(element.content)}</div>
            </div>);
        })}
      </div>

      <div className='formWrapper'>
        <Editor
          Update={Update} />


      </div>

    </div>
  );
}

export default App;
