import React,{useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup'
import {auth} from './firebase'

import Navbar from './components/Navbar/Navbar';

function App() {
  const[userName,setUserName] = useState('')
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      // console.log(user.displayName)
      if(user){
      
        setUserName(user.email)
       
      }else {
        setUserName('')
       
      }
  })
  }, [])
  



  return (
    <div className="App">
      <BrowserRouter>
          <Navbar name={userName}/>
        <Routes>
        <Route path="/" element={<Home name={userName} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
