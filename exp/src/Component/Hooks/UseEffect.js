import React, { useEffect, useState } from 'react'

function UseEffect() {
 
    const [num, setNum] = useState(0)
  console.log("outer");
    function update(){
      // alert("clicked")
      console.log("Outer func");
      setNum(num + 1)
    }
    
    useEffect(() => {
      document.title = `react (${num})`
      console.log("inner useEffect",  num);
      // update()

    },[num])

    
    // useEffect(() => {
    //   first
    
    //   return () => {
    //     second
    //   }
    // }, [third])
    

    


  return (
    <>
    
    <div style={{textAlign:"center", width:"100%", fontWeight:"bolder"}}>
    <div>UseEffect {num}</div>
    <button onClick={() => update()} className='rounded'>+</button>

    </div>
    </>

  )
}

export default UseEffect