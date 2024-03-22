import React, { useState } from 'react'
import useCustomHook from './useCustomHook'

function CompCus() {

  const btn = useCustomHook()
  console.log("btn",  btn);
 

  return (
    <div style={{backgroundColor:`${btn}`}}>
      <h1>Click </h1>
    </div>
  )
}

export default CompCus