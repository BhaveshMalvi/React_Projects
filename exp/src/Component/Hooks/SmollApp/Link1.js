import React from 'react'
import {  useLocation } from 'react-router-dom';

function Link1() {
    const location =  useLocation()
    console.log(location.pathname);
        
   return (
     <div>
         <h1>
         {location.pathname.replace('/','Link 1')}
         </h1>
         </div>
   )
}

export default Link1