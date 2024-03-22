import React, { useRef, useState } from 'react'

// is a React Hook that lets you reference a value that’s not needed for rendering.


function UseRef_Uncontroled(){

    const [first, setfirst] = useState()
    const [last, setLast] = useState()
    const [passwd, setPasswd] = useState()
    const [email, setEmail] = useState()
    const [no_Mobile, setNo_Mobile ] = useState()
    const [text, setText] = useState()
    const [tog, setTog] = useState(false)
 
    const [data, setData] = useState([])



    const name = useRef(null)
    const lname = useRef(null)
    const password = useRef(null)
    const textArea = useRef(null)


    console.log("rerender", email, no_Mobile);
    
    function submitForm(e) {
        e.preventDefault()
        console.log(name.current.value);
        // showName = name.current.value;
        setfirst(name.current.value)
        setLast(lname.current.value)
        setPasswd(password.current.value)
        setText(textArea.current.value)
        setTog(true)
        setEmail(email)

        setData([...data, {first,lname, passwd, email, text}])

    }

    return (
    
        <>

        <div className="flex justify-center align-items-center " style={{height:"60h"}} >
            <div className="flex  items-center text-white justify-center bg-slate-600 h-60 w-5/6 rounded ">
                <div className="items-center">
                    <form action='submit' onSubmit={submitForm} >
                        <div>
                            <label className='bold mx-2 my-2' htmlFor='name'> F_Name:
                                <input type='text' id='name' className=' rounded-sm text-black px-2 mx-2' ref={name}></input>
                            </label>
                            <label className='bold mx-2 my-2' htmlFor='name'> L_Name:
                                <input type='text' className=' rounded-sm text-black px-2 mx-2' ref={lname}></input>
                            </label>



                            <label className='bold mx-2 my-2' htmlFor='name'> Password:
                                <input type="password" id="password" className=' rounded-sm text-black px-2 mx-2' ref={password} />
                            </label>

                            <label className='bold mx-2 my-2' htmlFor='name'> Email:
                                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} id="" className=' rounded-sm text-black px-2 mx-2' />
                            </label>
                            <label className='bold mx-2 my-2' htmlFor='name'> Mobile No:
                                <input type="text" value={no_Mobile} onChange={(e) => setNo_Mobile(e.target.value)} id="" className=' rounded-sm text-black px-2 mx-2' />
                            </label>

                            <label className='bold mx-2 my-2' htmlFor='name'> Notes:
                                <textarea name="postContent" ref={textArea} rows={2} cols={25} className=' rounded-sm text-black px-2 mx-2' />   
                            </label>

                        </div>
                        <div className="flex justify-center my-3">
                            <button className=' rounded bg-black border-none'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

            <div className=' text-center  text-white'>
                 { 
                    data.map((ele) => {
                        return (
                             <div>
                                 <h1>{ ` F_Name: ${ele.first} & L_Name: ${ele.last} & Password: ${ele.passwd} & Email: ${ele.email}`}</h1><br></br>
                                 <div>
                                 <label>Notes: </label>
                                 <p>{ele.text}</p>
                                     </div>
            
                             </div>

                        )
                    })
                    }
            </div>

    </>
    
    );

}

   



export default UseRef_Uncontroled