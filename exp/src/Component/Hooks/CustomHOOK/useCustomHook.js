import React, { useEffect, useState } from 'react'

function useCustomHook(initial="red") {

  // const [count, setCount] = useState(initial)
  const [color,setColor] = useState(initial)

  //  function updateVal(){
  //   setCount(count  + 1)
  // }
  
  useEffect(() => {
    console.log(color);
    setColor(initial)
      
  }, [initial])


  return color

}
 
export default useCustomHook