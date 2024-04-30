"use client"
import React, { useRef, useState } from 'react';
import axios from 'axios';

function UploadButton() {

  const [text, setText] = useState('')
  const [response, setResponse] = useState()
  const [file, setFile] = useState()

  const handleClick = async(e) => {

    console.log('Selected file:', file.type, file.name);
    try {
        

        const newPost = await axios.post('http://localhost:5000/api/upload-image', {
            text,
            mimeType: file.type,
            path: file.name,
            headers: {
                'Content-Type': 'application/json'
    
              }
        }
    
    )
    const post = await newPost.data
    setResponse(post)

    } catch (error) {
        console.log(error)

        throw new Error(error)

        
    }

    
    
  };

  return (
    <div>
      <button onClick={handleClick}>Upload Image</button>

      <input
        type="file"
        accept="image/*" 
        onChange={(e) => setFile(e.target.files[0])}
      />
     
     <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ border: '2px solid black' }}
      />

      <div style={{border: '2px solid black', color: 'black', width: '50%'}}>
        {response}
      </div>


    </div>

    
  );
}

export default UploadButton;
