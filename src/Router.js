import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ApplyPickup1 from './pages/ApplyPickup_1';
import ApplyPickup2 from './pages/ApplyPickup_2';
const Router = () => {
  return (
    
       
    <Routes>
            <Route path="/" element={<Home/>}/>   
            <Route path="/apply" element={<ApplyPickup1/>}></Route> 
            <Route path="/apply2" element={<ApplyPickup2/>}></Route> 
    </Routes>
            
       
   
  )
}

export default Router