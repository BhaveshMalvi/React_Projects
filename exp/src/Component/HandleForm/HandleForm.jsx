import React, { useEffect, useState } from 'react'
import './form.css';
import { Link } from 'react-router-dom';
import Data from '../DisplayData/Data';


function HandleForm() {

  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState( );
  const [showHome, setShowHome] = useState(false)
  const [togUpdate, setTogUpdate] = useState(true)

    
  console.log(useState);


  function handleName(e) {
    setName(e.target.value)
  }
  function handleEmail(e) {
    setEmail(e.target.value)
  }
  function handlePassword(e) {
    setPassword(e.target.value)
  }

  function toggleHandle(){
    setTogUpdate(true)
  }

  //  store a data in local storage
  console.log(localStorage);

  const storeItem = JSON.parse(localStorage.getItem('items'))
  // console.log(typeof storeItem);

  // console.log('show : ' + typeof(localStorage.getItem('items')));
  // console.log(typeof storeItem);
  const [storeData, setStoreData] = useState([storeItem])
  localStorage.setItem('items', JSON.stringify(storeData))
  // const [storeData, setStoreData] = useState([])
  // console.log(storeData);
  // console.log(storeItem);
  // const data =storeData
  // console.log(data);
  // useEffect(() => {
  // console.log(storeData);
  // }, [])

  // console.log(typeof storeData);

  function submitForm(e) {
    e.preventDefault()
    if (name == '' || password == '' || email == '') {
      alert('Enter valid Name , Email or Password')
    } else {

      // const data = {
      //   name : name,
      //   password : password,
      //   email  : email
      // }

      setStoreData([...storeData, { name, password, email }])

      //  REMOVE ALL INPUT FIELDS AND AFTER NEW DATA ARE ASSIGN THEM.
      setName('')
      setPassword('')
      setEmail('')

      setShowHome(false)

    }

  }

  function handleDelete(deleteItem) {
    // console.log(` delete : ${deleteItem}`);
    const newData = storeData.filter((item) => item !== deleteItem)
    setStoreData(newData)

  }

  function showPassword(e) {
    alert(`${e.name}:${e.password}`)
  }

  function handleUpdate(e) {
    // console.log(e);
    const newData = storeData.filter((item) => item === e)
    const upVal = Object.values(newData)
    console.log(typeof upVal);
    console.log("val", upVal);
    if (e !== undefined) {
    
      // console.log(upVal[0].name);
      // console.log(upVal[0].email);
      // console.log(upVal[0].password);


      /* The code `setName(upVal[0].name); setEmail(upVal[0].email); setPassword(upVal[0].password);`
      is setting the state values for `name`, `email`, and `password` based on the data retrieved
      from the selected item in the `storeData` array. */
      setName(upVal[0].name);
      setEmail(upVal[0].email);
      setPassword(upVal[0].password);

      if(togUpdate === true){

        setTogUpdate(!togUpdate)
      }
    }



  }


  return (
    <>
      {/* <div className="bg-[url('https://media.istockphoto.com/id/1355029620/photo/doctor-medical-and-laptop.jpg?s=1024x1024&w=is&k=20&c=vTJJPCLmAaUiHWWQHhUvwWWgxgLE4DvCquL0mJr8FCw=')] bg-no-repeat bg-cover bg-center"> */}

      <div style={{backgroundColor:"blue"}}> 

        <section className="myform-area">

          <div className="form-area login-form flex justify-items-center">


            {/* {showHome ? */}

            <div className="form-input rounded-md" style={{marginLeft:"5rem"}}>
              <h2>Form</h2>

              <form onSubmit={submitForm}>
                <div className="form-group">
                  <input type="text" name="name" placeholder='Name' value={name} onChange={handleName} />
                </div>
                <div className="form-group">
                  <input type="email" name="email" placeholder='Email' value={email} onChange={handleEmail} />
                </div>
                <div className="form-group">
                  <input type="password" name="password" placeholder='Password' value={password} onChange={handlePassword} />
                </div>
                <div className='flex justify-center'>
                    {
                      togUpdate ?
                      <>
                    
                      <div className="myform-button">
                    <button className="myform-btn w-32 h-14  px-2 mx-2 " type='submit' >Sign Up</button>
                  </div>
                  <div className="myform-button">
                    <button className="myform-btn w-32 h-14 px-2 mx-2 " type='submit' >Sign In</button>
                  </div>
                  </>

                      :
                        <>
                      <div className="myform-button">
                    <button className="myform-btn w-32 h-14  px-2 mx-2 " type='submit' onClick={() => setTogUpdate(true)} >Update</button>
                     </div>
                      <div className="myform-button">
                    <button className="myform-btn w-32 h-14  px-2 mx-2 " type='reset' value="reset" >cancel</button>
                     </div>
                        </>

                    }
                </div>
                <div>

                </div>
              </form>
              <div>
              </div>

            </div>


                        {/* :   */}

            <div className="form-content " style={{ height: '100vh' }}>
              <div style={{ height: "80vh", overflow: "auto" }} >
                <table className="w-full  border-solid border-5  bg-white border-spacing-2 border-separate border border-slate-500 " style={{ width: "300px", overflow: "auto",boxShadow:"none", color:"black" }}>
                  <thead >
                    <tr>
                      <th scope="col">Index</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Password</th>
                      <th scope='col'></th>
                    </tr>
                  </thead>
                  {
                    storeData.map((e, index) => {
                      return (
                        <tbody key={index}>
                          <tr>  
                            <td >{index}</td>
                            <td>{e.name}</td>
                            <td>{e.email}</td>
                            <td>
                              {/* {e.password} */}
                              <button className='rounded-full bg-indigo-500 px-2 py-1' onClick={() => showPassword(e)}> Show </button>
                            </td>
                            <td><button className='rounded-full bg-red-500 px-2 py-1' onClick={() => handleDelete(e)} >Delete</button></td>
                            <td>
                              <button className='rounded-full bg-blue-500 px-2 py-1' onClick={() => handleUpdate(e, index)} >Update</button>



                            </td>
                          </tr> 
                        </tbody>
                      )
                    })
                  }
                </table>
              </div>
            </div>

         


          

             {/* }   */}

          </div>

        </section>

        {/* <Data data = {storeItem} /> */}
      </div>


    </>

  )
}

export default HandleForm