import React,{ useReducer } from "react";
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Header from "./components/header/Header";
import './App.css';
import RecruiterDashboard from "./pages/dashboard/RecruiterDashboard";
import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import reducer from "./context/Reducer";
import { userContext } from "./context/Context";
import CreateJob from "./pages/createJob/CreateJob";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import ResetPassword from "./pages/resetPassword/ResetPassword";

// first state to provide in react reducer
const initialState = {
  isAuth:false,
  userData:null
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state)
  return (
    <div className="App">
      <BrowserRouter>
      <userContext.Provider value={{ state, dispatch }}>
      <Header/>
      <Routes >
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/signup" element={<Signup/>}/>
      <Route exact path="/dashboard" element={<RecruiterDashboard/>}/>
      <Route exact path="/create" element={<CreateJob/>}/>
      <Route exact path="/forgot" element={<ForgotPassword/>}/>
      <Route exact path="/reset" element={<ResetPassword/>}/>
      </Routes>
      </userContext.Provider>
     </BrowserRouter>
    </div>
  );
}

export default App;
