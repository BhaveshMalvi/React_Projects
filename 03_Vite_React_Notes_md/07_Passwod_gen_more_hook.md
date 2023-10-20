# 7. Password Generator

## Introduction of More Hooks.

### useCallback : useCallback(fn, dependency), useCallback( fn, [])
[link : useCallback](https://react.dev/reference/react/useCallback)
### useEffect : useEffect(fn, dependency), useEffect(fn, []) 
[link : useEffect](https://react.dev/reference/react/useEffect)
### useRef : useRef()
[link : useRef](https://react.dev/reference/react/useRef)

## useCallback(fn, dependency), useCallback( fn, [])
- > jo har ek dependency ko catch(memory) me store kar k rakhata he jo bar bar change ho ne par re-rendring hota he.
- >  general perpose for a optimization.
   const passwordGenerator = useCallback(fn , []);    // fu = callback function.
- > goal only optimization. and catch(memory) me rako does not run . this is a function defination not run.

## useEffect(fn, dependency), useEffect(fn, []) 
- > goal only for target change hone par run hota he. it means effect then called a use effect run .

## useRef : useRef()
- >   only one time run not take simuntainiously run useCallback() only store memory( catch);


##
## App.jsx
```jsx
import { useCallback, useState, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(15)
  const [numAllowed, setNumAllowed] = useState(false);
  const [checkAllowed, setCheckAllowed] = useState(false);
  const [password, setPassword] = useState("")
  const [rangeCopy, setRangeCopy] = useState(10);

  // ********************************* useCallback(fn, dependency) *********************************** 
  // jo har ek dependency ko catch(memory) me store kar k rakhata he jo bar bar change ho ne par re-rendring hota he.
  // general perpose for a optimization.
  // const passwordGenerator = useCallback(fn , []);    // fu = callback function.
  // goal only optimization. and catch(memory) me rako does not run . this is a function ddefination not run.

  const passwordGenerator = useCallback(() => {

    let pass = ""; // generated password bana kar use setpassword me pass kar k password me bhej denge.
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmanopqrstuvwxyz" // jisme data aiga jisse password banega.

    if (numAllowed) str += "0123456789" // jab number allowed ho tab string ko add update(add) kar do.

    if (checkAllowed) str += "`~!@#$%^&*()_{}:<>?/.,';][\|" // jab character allowed he tab string update(add) kardo.


    // ab kitanaa loop chalega vo govern karta he length. as string length....

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1); // yhan par character ki random length ai he. not a value of charecter inside. cheracter ko uthana padega he random vslues me se.
      pass += str.charAt(char);   // jese loop finish hoga tab value pass ho jaigi pass(blank string) me. += not declered then values are override.
      // value add but never read 
    }

    setPassword(pass)
    // if this declered then read inside pass char value.

  }, [length, numAllowed, checkAllowed, setPassword,setRangeCopy]); // setPassword is a method these dependency if chang password. 
  // setPassword concept of memoization. 1 method de do jisme value set ho rahi he. only perpose of optimization.
  // if declered password then infinite loop inside password where use.

  // passwordGenerator(); // this is a declered outside then generate Problem.  infinite re-rendring 



  // ***************************** useRef() *************************************
  const passwordRef = useRef(null);

  // only one time run not take simuntainiously run useCallback() only store memory(catch);
  const copyPasswordToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,rangeCopy);
  }, [password,rangeCopy])


  // ********************************* useEffect(fn, dependancy) *************************************************
  // goal only run cahnge hone par run hota he. it means effect then called a use effect run .
  // useEffect(fn, [])
  useEffect(() => {
    passwordGenerator();
  }, [length, checkAllowed, numAllowed, passwordGenerator, setPassword])


  return (
    <>
      <div className=' text-center text-white bg-slate-700 w-full max-w-md mx-auto shadow-md rounded-lg py-3 px-3 my-10'>

        <h1 className="text-4xl font-bold" >Password Generator</h1><br />
        <div className='className="flex  rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password} // jo hammane state k ander set karke rakhi he.
            className="outline-none py-1  px-2 w-80  rounded-lg text-black"
            placeholder="Password"
            readOnly  // taki koi write na kar pai ye.
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-indigo-500 mx-2 px-2 py-1 top-0 shrink-0 rounded-md drop-shadow-md">
            Copy</button>

        </div>

        <div className='flex text-sm gap-x-5 text-indigo-300 font-normal'>
          <div className='flex items-center gap-x-2 px-3'>
            <input type="range"
              min={6} max={100}
              value={length} // jo link hamare state se jisme length definr kiyahe.
              className='cursor-pointer accent-blue-500'
              onChange={(e) => { setLength(e.target.value) }} // jb onChange hota he tab fire karna padta he e(event) ko  jo change hota he.  jab event pass karte he tab vo call karta he setLength property ko. jo target karata he value ko. tab state k ander value change ho gi.
            />
            <label>
              {/* this ia adefault value pass a state on length  */}
              Length: {length}
            </label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              className='cursor-pointer accent-blue-500'
              defaultChecked={numAllowed}
              id='numberInput' // not necessary
              onChange={() => { setNumAllowed((prev) => !prev) }}  //callback fire. prev value se reverse value kar do. job prev true tab false or toggel.
            />
            <label>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={checkAllowed}
              id='numberInput' // not necessary
              className='cursor-pointer accent-blue-500'
              onChange={() => { setCheckAllowed((prev) => !prev) }}  //callback fire. prev value se reverse value kar do. job prev true tab false or toggel.
            // jab setCheckAllowed(true) karte tab vo har bar hi true rahega toggle nahi ho paiga check mark update hoga.

            />
            <label>Character</label>
          </div>

        </div>

        <div className='flex items-center gap-x-1 text-indigo-300 my-2 mx-3 '>
          <input
            input type="range"
            value={rangeCopy}
            onChange={(e) => {setRangeCopy(e.target.value)}}
            min={6} max={50}
            className='cursor-pointer accent-blue-500'
          />
          <label htmlFor="copyRange">Copy Range: {rangeCopy}</label>
        </div>

      </div>
    </>
  )
}

export default App

```
### Output

<img src="images_md/img3.png" width="50%">
<img src="images_md/image4.png" width="49%">
