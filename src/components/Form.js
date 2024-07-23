'use client';
import React, { useState } from 'react'

const Form = ({}) => {
    const [text, setText] = useState('')

    function handleTextChange(e){
        setText(e.target.value)
    }

  return (
    <div>
       <input type='text'  placeholder='Upisi text' value={text} onChange={handleTextChange}/>
       {text &&<h3>{text}</h3>}
  </div>
  );
};

export default Form
