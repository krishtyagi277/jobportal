import React from "react";
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Header from "./components/header/Header";
import './App.css';
import RecruiterDashboard from "./pages/dashboard/RecruiterDashboard";
import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes >
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/signup" element={<Signup/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
