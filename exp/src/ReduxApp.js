import React from 'react'
import Count from './Comp_Redux/Count'
import { useDispatch } from 'react-redux'
import OtherShowCount from './HOC/OtherShowCount';
import { dec, inc } from './Comp_Redux/redux/action';

function ReduxApp() {

  const dispatch = useDispatch();
  // console.log(dispatch);



  return (
    <>
      <div>
        <OtherShowCount />
      </div>
      <div className=' text-white w-full h-screen flex justify-center align-items-center'>
        <div className=' flex justify-between gap-2'>
          <button className=' bg-black p-1 rounded-md'
            onClick={() =>
              // dispatch({type:"DECREMENT"})
              dispatch(dec())
            }
          >
            Decrement
          </button>
          <Count />
          <button className=' bg-black p-1 rounded-md'
            onClick={() =>
              // dispatch({type:"INCREMENT"})
              dispatch(inc())
            }
          >
            Increment
          </button>


        </div>

      </div>
    </>

  )
}

export default ReduxApp