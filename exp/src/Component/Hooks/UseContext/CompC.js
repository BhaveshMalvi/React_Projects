import { useContext } from "react"
import { Data } from "./CompA"




function CompC() {

  const info = useContext(Data)
  console.log("CompC", info);


  return (
       <>
      
      <div className="flex   items-center text-white justify-center bg-slate-600 h-60  rounded ">
    
        {info.name}  {info.surname}

       </div>
  </>
  )
}

export default CompC