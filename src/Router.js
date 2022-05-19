import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ApplyPickup1 from './pages/Apply/ApplyPickup_1';
import ApplyPickup2 from './pages/Apply/ApplyPickup_2';
import ApplyPickup3 from './pages/Apply/ApplyPickup_3';
import ApplyPickup4 from './pages/Apply/ApplyPickup_4';
import ApplyPickup5 from './pages/Apply/ApplyPickup_5';
import MisteryInfo from './pages/MisteryInfo';
import Content from './pages/Content';
import AllList from './pages/Collections/AllList';
import { Accordion } from 'react-bootstrap';
import ContentsList from './pages/Collections/ContentsList';
import UserMyPage from './pages/UserMyPage/UserMyPage';
import Profile from './pages/BookstoreProfile/Profile';

const Router = () => {
  return (
    
       
    <Routes>
            <Route path="/" element={<Home/>}/>   
            <Route path="/apply" element={<ApplyPickup1/>}></Route> 
            <Route path="/apply2" element={<ApplyPickup2/>}></Route> 
            <Route path="/apply3" element={<ApplyPickup3/>}></Route> 
            <Route path="/apply4" element={<ApplyPickup4/>}></Route> 
            <Route path="/apply5" element={<ApplyPickup5/>}></Route> 
            <Route path="/content/:id" element={<Content/>}/>
            <Route path="/collection" element={<ContentsList/>}></Route>
            <Route path="/allCollection" element={<AllList/>}/>
            <Route path="/userPage" element={<UserMyPage/>}></Route>
            <Route path="/profile" element={<Profile></Profile>}/>
            <Route path="/profileC"></Route>
            <Route path='/misteryInfo' element={<MisteryInfo/>}></Route>
            
    </Routes>
            
       
   
  )
}

export default Router