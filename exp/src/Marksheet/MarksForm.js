import Table from 'react-bootstrap/Table';
import React, { useState } from "react";
import { Student_Data } from './MarksData';
import { Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';



function MarksForm({ name, no }) {

  const [newData, setNewData] = useState()
  const [tog, setTog] = useState(true)

  function isValid() {
    const data = Student_Data.filter((ele) => (ele.first_name === name) || (ele.id === no))
    console.log(data);
    setNewData(data)
    setTog(!tog)

  }



  return (
    <>



      <div className=" flex align-items-center gap-1 position-sticky top-0 ">
        <div>
          <Button
            size="small"
            variant="contained"
            color="info"
            className=" text-black border-black"
            onClick={() => isValid()}
          >

            {
              tog ?
                <span >
                  Find Result
                </span>
                :
                <span>All Results</span>

            }
          </Button>
        </div>
        <div className='flex align-items-center justify-center ml-52'>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={age}
          label="Age"
          // onChange={handleChange}
          className=' h-8 m-3 bg-sky-600 text-black'
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {/* <MenuItem value={10} disabled>Rankes</MenuItem> */}
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        </div>
      </div>
      

     




      <div>


        {
          tog ?

            <div>

              <div className="bg-black text-white">
                <Table striped bordered hover variant="white">
                  <thead>
                    <tr  >
                      <td>Students</td>
                      <td colSpan={6}>Subject</td>
                      <td></td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Roll No</td>
                      <td>maths</td>
                      <td>chemistry</td>
                      <td>english</td>
                      <td>geography</td>
                      <td>history</td>
                      <td>biology</td>
                      <td>Total Marks(600)</td>
                    </tr>

                    {
                      Student_Data.map((e) => {
                        return (
                          <tr key={e.id} className=' bg-black'>
                            <td>{e.id}</td>
                            <td>{e.math_score}</td>
                            <td>{e.chemistry_score}</td>
                            <td>{e.english_score}</td>
                            <td>{e.geography_score}</td>
                            <td>{e.biology_score}</td>
                            <td>{e.history_score}</td>
                            <td>{e.math_score + e.history_score + e.biology_score + e.chemistry_score + e.english_score + e.geography_score}</td>
                          </tr>
                        )
                      })
                    }




                  </tbody>
                </Table>
              </div>

            </div>
            :

            <div>

              {
                newData.length > 0 && (
                  <div>

                    <div>
                      <h4>Full Name: {newData[0].first_name}_{newData[0].last_name}</h4>
                      <h4>Roll No: {newData[0].id}</h4>
                      <h4>Absent Day : {newData[0].absence_days}</h4>
                      <h4>Obtain Marks(%) : {((newData[0].math_score + newData[0].history_score + newData[0].biology_score + newData[0].chemistry_score + newData[0].english_score + newData[0].geography_score) / 6).toFixed(3)}%</h4>
                    </div>


                    <Table striped bordered hover variant="white">
                      <thead>
                        <tr  >
                          <td>Students</td>
                          <td colSpan={6}>Subject</td>
                          <td></td>

                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Roll No</td>
                          <td>maths</td>
                          <td>chemistry</td>
                          <td>english</td>
                          <td>geography</td>
                          <td>history</td>
                          <td>biology</td>
                          <td>Total Marks(600)</td>
                        </tr>
                        <tr>
                          <td>{newData[0].id}</td>
                          <td>{newData[0].math_score}</td>
                          <td>{newData[0].chemistry_score}</td>
                          <td>{newData[0].english_score}</td>
                          <td>{newData[0].geography_score}</td>
                          <td>{newData[0].biology_score}</td>
                          <td>{newData[0].history_score}</td>
                          <td>{newData[0].math_score + newData[0].history_score + newData[0].biology_score + newData[0].chemistry_score + newData[0].english_score + newData[0].geography_score}</td>
                        </tr>




                      </tbody>
                    </Table>


                    <div>
                      <center>
                        <span className=' text-blue-800'>Congratulation You Have Pass This Exam.</span>

                      </center>
                    </div>



                  </div>
                )

              }

              {
                newData.length <= 0 && (
                  <div>
                    <center>
                      <h1> OPPS !! Data Not Found</h1>
                      <h2> OR</h2>
                      <h1>Enter Valid Data.</h1>
                    </center>

                  </div>
                )
              }
            </div>

        }


      </div>

    </>
  );
}

export default MarksForm;
