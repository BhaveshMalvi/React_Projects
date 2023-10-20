# 4. Tailwind and Props
## Link : https://tailwindcss.com/
### App.js
```jsx
import './App.css'
import Card from './component/Card'

function App() {

  const myObj = {
    userName : "dhinga",
    address : "Ranip, Ahmedabad"
  }

    const myArray = [1,2,3,4,5]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl '>Tailwind css with Vite + React.</h1>
      <Card userName = "Bman0" address="NikoL, Ahmedabad" />
      <Card userName = "Bhavesh" add ={myObj.address} decArray = {myArray} />
      <Card userName = "Dipali" address="paldi, Ahmedabad"/>
      <Card userName={myObj.userName} address={myObj.address} />
    </>
  )
}

export default App
```
### Card.jsx  inside of Components.
### Card.jsx 

```jsx
import React from "react"
// change the destructuring kare he props se sidha {userName} likate he aur extra variable add so on {userName, passWord}
function Card({userName,address="Outoff"}){
    // this 1st container props are empty.
    // so, value are given in App.js like declered as props.
    // <Card nickName = "Bman0" />
    // console.log(props.userName);  // if given props.
    // console.log(userName);
    return(
        <>
        <div className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 m-5">
        <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-xl rounded-full m-2" src="https://thumbs.dreamstime.com/z/beautiful-exterior-home-pictures-new-home-design-images-modern-best-house-design-images-best-house-images-images-latest-172194515.jpg?w=992" alt="" width="384" height="512" />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <figcaption className="font-medium justify-between">
            {/* // declered userName is here. */}
            <div className="text-sky-500 dark:text-sky-400 text-4xl px-0 ">{userName}</div>
            <div className="text-slate-700 dark:text-slate-500 text-xl">{address}</div>
    {/* <div className="text-slate-700 dark:text-slate-500 text-xl">{address || "given Add"}</div> */}
          </figcaption>
        </div>
      </div>      
    </>     
   )
}
export default Card
```
<img src="images_md/image-1.png" width="70%">