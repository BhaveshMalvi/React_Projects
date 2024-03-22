import React, { useState } from 'react'
import { Button } from '@mui/material'


function Child({count, updateCount}) {

    
        console.log("hello");
    
  
    return (
      
      <>
      
      <h1>Child Component</h1>
      <h3> Child val: {count}</h3>
      <Button  variant="contained" onClick={updateCount}>Add</Button>
    
      </>
  
    )
}

export default Child