'use client';
import React, { useState } from 'react'

const Counter = ({}) => {
    const [count, setCount] =useState(0)

    function increment (){
        setCount((prevCount)=> prevCount +=1)
    }

    function decrement (){
        setCount((prevCount)=> prevCount -=1)
    }

    return(
        <div>
            <button onClick={()=> increment()}> klikni da povecas</button>
            <p>count={count}</p>
            <button onClick={()=> decrement()}> klikni da smanjis</button>
        </div>
    )
}

export default Counter