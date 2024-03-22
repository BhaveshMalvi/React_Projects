import React from 'react'
import { useLocation } from 'react-router-dom';

function Link2() {
    const location =  useLocation()
    console.log(location.pathname);
   return (
     <div>
         <h1>
         {location.pathname.replace('/','')}
         
         </h1>
         </div>
   )
}

export default Link2