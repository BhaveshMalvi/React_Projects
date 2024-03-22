import React from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import Link1 from './Link1'
import Link2 from './Link2'
import Link3 from './Link3'
import Link4 from './Link4'

function SmollApp() {
  return (

    <>
    <div className='  text-center block bg-black text-white'>SmollApp</div>
    <div>
    <BrowserRouter>
    <div className=' bg-slate-500'>
    <div className=' flex gap-3 mx-2'> 
    <NavLink className={({ isActive }) =>
              isActive ? "text-red-700 font-bold" : "text-white"
            } to="/">Link 1</NavLink>
    <NavLink className={({ isActive }) =>
              isActive ? "text-red-700 font-bold" : "text-white"
            } to="/link2">Link 2</NavLink>
    <NavLink className={({ isActive }) =>
              isActive ? "text-red-700 font-bold" : "text-white"
            } to="/link3">Link 3</NavLink>
    <NavLink className={({ isActive }) =>
              isActive ? "text-red-700 font-bold" : "text-white"
            } to="/link4">Link 4</NavLink>

    </div>

    </div>



    <Routes>
      <Route path='/' element={<Link1 />}></Route>
      <Route path='/link2' element={<Link2 />}></Route>
      <Route path='/link3' element={<Link3 />}></Route>
      <Route path='/link4' element={<Link4 />}></Route>
    </Routes>
    </BrowserRouter>
    </div>
    
    </>
    
  )
}

export default SmollApp