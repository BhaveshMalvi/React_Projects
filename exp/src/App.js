import "./App.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Data from "./Component/DisplayData/Data";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HandleForm from "./Component/HandleForm/HandleForm";
import Form from "./Component/DisplayData/Form";
// import UseEffect from './Component/Hooks/UseEffect';
// import UseRef_Uncontroled from "./Component/Hooks/UseRef";
// import UseReducer from "./Component/Hooks/UseReducer";
import CompA from "./Component/Hooks/UseContext/CompA";
import CompC from "./Component/Hooks/UseContext/CompC";
// import Marksheeet from "./Marksheet/Marksheeet";
// import CompCus from "./Component/Hooks/CustomHOOK/CompCus";
import Home from "./Component/DisplayData/Home";
import CompB from "./Component/Hooks/UseContext/CompB";
// import Parent from "./Component/CTP/Parent";
// import SmollApp from "./Component/Hooks/SmollApp/SmollApp";
// import UseCallback from "./Component/Hooks/UseCallback/UseCallback";


function App() {
  return (
    <>
      <div
        style={{ backgroundColor: "black", color: "white", fontWeight: "bold", justifyContent:"center" }}
      >
        {/* <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/handleForm"> Sign Up</Link>
      <Link to="/data" className='px-5'>Data</Link>
      <Link to="/form">Form</Link>
      
      <Routes >
      <Route path='/' element={<Home />}></Route>
      <Route path='/handleForm' element={<HandleForm />}> </Route>
      <Route path='/data' element={<Data />}> </Route>
      <Route path='/form' element={<Form />}> </Route>
      </Routes>
    </BrowserRouter> */}

        {/* <Form /> */}

        {/* <HandleForm /> */}
        {/* <UseEffect /> */}
      </div>

    <div 
    style={{ height:"100vh", width:"100%", display:"flex", justifyContent:"center", alignItems:"center"}}

    >
      <div
        style={{ backgroundColor: "#b0bfd5", fontWeight: "bold", height:"90vh", width:"90%"}}
        className=" rounded-sm"
      >
       {/* <UseRef_Uncontroled /> */}
       {/* <UseReducer /> */}
       {/* <CompA /> */}
       {/* <CompB /> */}
       {/* <Marksheeet /> */}
       {/* <CompCus /> */}
       {/* <Parent /> */}
       {/* <SmollApp /> */}
       {/* <UseCallback /> */}

      </div>
    </div>
    </>
  );
}

export default App;








