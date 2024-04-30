"use client"
import React, { useRef, useState } from 'react';

function UploadButton() {
  const fileInputRef = useRef(null);

  const [file, setFile] = useState('')

  const handleFileSelect = (e) => {
    const file = e.target.files[0]
    // Do something with the selected file (e.g., upload to server)
    console.log('Selected file:', file.type, file.name);
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <button onClick={handleClick}>Upload Image</button>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*" // Specify accepted file types (e.g., images)
        onChange={handleFileSelect}
        // style={{ display: 'none' }}
      />
    </div>
  );
}

export default UploadButton;
