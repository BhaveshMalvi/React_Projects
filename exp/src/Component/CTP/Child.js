import React from 'react'

function Child({name, password, parentData}) {

    // const userName = "Child Name "

    const userName = [{
        "users":[{
        "name":"Mava",
        "age":"60",
        "email":"mavli@gmail.com"
    },{
        "name":"culfy",
        "age":"60",
        "email":"mavli@gmail.com"
    },{
        "name":"ice-cream",
        "age":"60",
        "email":"mavli@gmail.com"
    }]    
    }]
    

  return (

    <>
    <div>
        <h3>Child</h3>
    </div>
    <div>
        <h5>Name :{name} </h5>
        <h5>Password : {password} </h5>
    </div>
    <div>
        <button className=' bg-black text-white rounded ' onClick={() => parentData(userName)}>Click me</button>
    </div>
    </>
  )
}

export default Child 