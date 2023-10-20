# 2. HOOKS and projects
## Link : https://react.dev/reference/react


### App.js
```jsx
import { useState } from 'react' // 1st import hook.
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
// make these Hook :
const [counter,setCounter] = useState(15);
// setCounter it short term as a function.
// let counter = 15;


 const addValue = ()=> {
  //  counter = counter + 1;
  //  if i was used to counter variable then it is show value are assign  but not UI show on react.
  // so this is a problem solve in Hooks.
  // console.log("clicked", Math.random());


  setCounter(counter + 1 );
 }
 const removeValue = () => {
  setCounter(counter - 1);
 }
  return (
    <>
      <h1>Marval Asssemble</h1>
      <h1>counter {counter}</h1>
      {/* pass only refrence of function not execute. */}
      <button onClick={addValue}>Add Values {counter}</button>
      <br /><br />
      {/* pass only refrence of function not execute. */}
      <button onClick={removeValue}>Remove Values {counter}</button>
      <h1>Footer : {counter}</h1>
    </>
  )
}

export default App

```