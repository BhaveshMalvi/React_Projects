import React, { useState } from 'react'

function Form() {

  const [data, setData] = useState(0)


    

  function increment(){
    setData(data + 1)
  }
  function decrement(){
    setData(data - 1)
  }
  function multi(){
    setData(data*10)
  }

  return (
    
    <div> 
    <div style={{fontWeight:"50px"}}>{data}</div>
    <button onClick={increment}>+</button><br/>
    <button onClick={decrement}>-</button><br/>
    <button onClick={multi}>*</button>
    </div>
  )
}

export default Form