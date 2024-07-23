'use client';
import React, { useState } from 'react'

const ToggleText = ({}) => {
    const [isVisible, setIsVisible] = useState(false)


  return (
    <div>
        <button onClick={()=>setIsVisible(!isVisible)}> Klikni ovo dugmeeee</button>
        {isVisible && (
            <div>
                <p>Hello World!</p>
                 </div>
        )}
  </div>
  );
};

export default ToggleText