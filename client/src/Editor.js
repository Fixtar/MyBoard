import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useState } from 'react';
import Axios from 'axios';


function Editor(props) {
    const [boardContent, setboardContent] = useState({
        title: '',
        content: ''
    });

    const submitReview = () => {
        Axios.post('http://localhost:8000/api/insert', {
            title: boardContent.title,
            content: boardContent.content
        }).then(() => {
            alert('등록 완료!');
        })
    };


    const getboardSubmit = (e) => {
        const { name, value } = e.target;
        setboardContent({
            ...boardContent,
            [name]: value
        })
        console.log(boardContent);
    }
    return (
        <div>
            <input className='inputTitle' type='text'
                placeholder='제목' name='title'
                onChange={getboardSubmit} />

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
            <button className='submitButton'
                onClick={submitReview}
            >등록</button>
        </div>
    );
}

export default Editor;