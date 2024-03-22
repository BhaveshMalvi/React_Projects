import React, { useReducer, useState } from "react";
import useCustomHook from "./CustomHOOK/useCustomHook";

// An alternative to useState.
// useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values. It also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks

function reducer(state, action) {
  console.log("state", state);
  console.log("action", action);
  // if(action.type === "incerement"){

  //     return state + 1
  // }
  // if(action.type === "decrement"){
  //     return state - 1
  // }

  // return state

  // or 

  switch (action.type) {
      case "incerement":  return  state + 1
      case "decrement": return state - 1;  
      default: return 0;
    }
  }
  
  function UseReducer() {
    
    // const [name, setName] = useState("Bhavesh");
  
    const color =  useCustomHook("blue")

  const initialState = 0
  const [update, dispatch] = useReducer(reducer, initialState);
  console.log(update);

  function inc() {
    // debugger
    dispatch({ type: "incerement"});
  }
  function dec() {
    dispatch({ type: "decrement" });
  }
  function reset() {
    dispatch({ type: "reset" });
  }




  return (  
    <>
      <div className="flex justify-center align-items-center  ">
        {/* bg-slate-600 */}
        <div className="flex  items-center text-white justify-center h-60 w-5/6 rounded " style={{backgroundColor:`${color}`}}>
          <div className=" justify-between">
            <div className=" text-center my-3">
              {/* <h1>{update}</h1>  */}
              <h1>{update}</h1>
              {/* <h1>{age}</h1> */}

            </div>

            <div className=" flex column-gap-2">
              <button
                className=" hover:bg-white hover:text-black rounded"
                onClick={ inc}
              >
                Increment
              </button>
              <button
                className=" hover:bg-white hover:text-black rounded"
                onClick={dec}
              >
                Decrement
              </button>
              <button
                className=" hover:bg-white hover:text-black rounded"
                onClick={reset}
              >
                Reset
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UseReducer;
