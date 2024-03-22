import React from 'react'
import { useSelector } from 'react-redux'

function OtherShowCount() {
    const count = useSelector(state => state)
  return (
    <div className=' text-red-700 w-full  flex justify-center align-items-center'>
      <h1>Header {count}</h1>
    </div>
  )
}

export default OtherShowCount