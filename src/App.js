import './App.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useState } from 'react';
import ReactHtmlParser from 'html-react-parser';

function App() {
  const [boardContent, setboardContent] = useState({
    title: '',
    content: ''
  });

  const [onBoardContents, setonBoardContents] = useState([]);

  const getboardSubmit = (e) => {
    const { name, value } = e.target;
    setboardContent({
      ...boardContent,
      [name]: value
    })
    console.log(boardContent);
  }

  return (
    <div className="App">
      <h1>My Board</h1>
      <div className='contentsContainer'>
        {onBoardContents.map(element => {
          console.log(element);
          return (
            <div style={{ border: '1px solid #333' }}>
              <h2>{element.title}</h2>
              <div>{ReactHtmlParser(element.content)}</div>
            </div>);
        })}
      </div>

      <div className='formWrapper'>
        <input className='inputTitle' type='text' placeholder='제목' name='title' onChange={getboardSubmit} />

        <CKEditor
          editor={ClassicEditor}

          data="<p></p>"
          onReady={editor => {
            // You can store the "editor" and use when it is needed.
            console.log('Editor is ready to use!', editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
            setboardContent({
              ...boardContent,
              content: data
            })
            console.log(boardContent);
          }}
          onBlur={(event, editor) => {
            console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
            console.log('Focus.', editor);
          }}
        />
      </div>
      <button className='submitButton'
        onClick={() => {
          setonBoardContents(onBoardContents.concat({ ...boardContent }));
        }}
      >등록</button>
    </div>
  );
}

export default App;
