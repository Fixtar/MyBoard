import './App.css';
import { useState } from 'react';
import Editor from './Editor';
import ContentBoard from './ContentBoard';

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
            <ContentBoard element={element} />
          );
        })}
      </div>

      <div className='formWrapper'>
        <Editor Update={Update} />
      </div>

    </div>
  );
}

export default App;
