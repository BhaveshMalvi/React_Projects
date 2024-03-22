import React from "react";
import Child from "./Child";

function Parent() {

    function childData(childInfo){
        // alert(childInfo)
        console.log(childInfo);
    }



  return (
    <>
      <div>
        <h1></h1>
        <h1>Parent</h1>
      </div>
      <Child name="User Name" password="12345678" parentData ={childData} />
    </>
  );
}

export default Parent;
