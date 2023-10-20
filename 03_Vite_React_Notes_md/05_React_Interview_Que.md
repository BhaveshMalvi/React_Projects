# 5. React Interview Question on Counter
### App.js
```jsx
import './App.css'
import { useState } from 'react'


function App() {
  const [counter, setCounter] = useState(15)
  const addValue = () => {
   
    // setCounter( counter + 1)
    // setCounter( counter + 1)
    // setCounter( counter + 1)
    // setCounter( counter + 1)
    // setCounter( counter + 1)
    // react me jab bhi useState ka use karte vakt vo as banch (pura function 1) ki tarah trit karta he aur usme dekata he ki kiski value ko update karna he.
    // jab perform task duplicate milta he to use vo ignore karrta he ki use to mene kardiua.
    // jitne bhi setCounterr he usme 1 callback function exceppt karta he.
    // setCounter( () => {})


    setCounter( (preCounter) => preCounter + 1 )   // prevCounter jo last update he counter ki. jo vapas fatch karke magvai he.
    setCounter( (preCounter) => preCounter + 1 ) // jab call k throught ata he tab vo pura complite ho k ata he..
    setCounter( (preCounter) => preCounter + 1 ) // this is a 1 type of propogate.. // ye bunch of packets nahi he.. previous state le rahe ho.
  }
  const removeValue = () => {
    setCounter( counter - 1 )
  }
  return (
    <>
     <h1>React + Vite</h1>
     <h2>Counter Update {counter} </h2>
     <br />
     <button onClick={addValue}>Add Values</button>
     <br /><br />
     <button onClick={removeValue}> Remove Values</button>
    </>
  )
}
export default App
```