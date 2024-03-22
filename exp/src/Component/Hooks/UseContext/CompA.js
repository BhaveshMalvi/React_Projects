import React, { createContext } from 'react'
import CompB from './CompB'


export const Data = createContext()

 function CompA() {

   const storeVal = {name:"Bhavesh",surname:"Malvi"} 

return (
  
  <Data.Provider value={storeVal}>
            <CompB />
    </Data.Provider>
  
  )
}

export default CompA


