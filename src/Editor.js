import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useState } from 'react';


function Editor(props) {
    const [boardContent, setboardContent] = useState({
        title: '',
        content: ''
    });

    const onclick = () => {
        props.Update(boardContent);
    }

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
                onClick={onclick}
            >등록</button>
        </div>
    );
}

export default Editor;