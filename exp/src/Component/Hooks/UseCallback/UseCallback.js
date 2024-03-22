import React, {   useState } from 'react'
import Child from './Child'
import { Button } from '@mui/material'
import { useCallback } from 'react'


function UseCallback() {

  
  const [val, setVal] = useState(10) 
  const [count, setCount] = useState(0)

  const update = useCallback(() => {
    setVal(val + 1)
  }, [val])


  const updateCount = () => {
    setCount(count + 1)
  }




  return (
    
    <>
    
    <h1>UseCallback</h1>
    <h3> val: {val}</h3>
    <Button  variant="contained" onClick={update}>Add</Button>
    <Child count = {count} updateCount = {updateCount} />
    </>

  )
}

export default UseCallback