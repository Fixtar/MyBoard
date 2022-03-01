import './App.css';
import { useEffect, useState } from 'react';
import Editor from './Editor';
import ContentBoard from './ContentBoard';
import Axios from 'axios';

function App() {

  const [onBoardContents, setonBoardContents] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:8000/api/get').then((response) => {
      setonBoardContents(response.data);
    })
  }, [onBoardContents])



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
        <Editor />
      </div>

    </div>
  );
}

export default App;
