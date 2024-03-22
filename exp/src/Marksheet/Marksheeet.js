import React, { useState } from "react";
import MarksForm from "./MarksForm";
import { TextField } from "@mui/material";

function Marksheeet() {

  const [name, setName] = useState()
  const [no, setNo] = useState()

  const nameField = (e) => {
  

      e.preventDefault()
      setName(e.target.value) 
    
  }

  const noField = (e) => {


      e.preventDefault()
      setNo((e.target.value))
    
   
  }

  console.log( no);



  return (
    <div className="">
      <div className=" w-full bg-black text-white  p-2 text-center font-bold">
        Student Marksheeet {name}{no}
      </div>

      <div className=" position-sticky top-0">
        <div className=" bg-cyan-100 flex gap-8 py-2">
          <div>
            <TextField
              helperText="Please enter your name"
              id="demo-helper-text-misaligned"
              label="Name"
              variant="standard"
              className=" mx-3"
              value={name}
              onChange={(e) => nameField(e)}

            />

            <TextField
              label="Roll No"
              variant="standard"
              
              helperText="Please enter your Roll No  *(optional)"
              value={no}
              onChange={(e) => noField(e)}
            />
          </div>
         
        </div>
      </div>


      <MarksForm name ={name} no={Number(no)}   />
    </div>
  );
}

export default Marksheeet;
