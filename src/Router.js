import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ApplyPickup from './pages/ApplyPickup';
const Router = () => {
  return (
    
       
    <Routes>
            <Route path="/" element={<Home/>}/>   
            <Route path="/apply" element={<ApplyPickup/>}></Route> 
    </Routes>
            
       
   
  )
}

export default Router