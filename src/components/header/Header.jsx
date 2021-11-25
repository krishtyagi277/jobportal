import React, {useContext, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../../context/Context";
import { SET_USER } from "../../context/Actiontype";
import { flushLocalStorage } from "../../utils/Utils";
import "./header.css";

function Header() {
    const {state, dispatch} = useContext(userContext);
    const navigate = useNavigate();
    const { isAuth } = state;

    const handleLogOut = ()=>{
        flushLocalStorage();
        navigate("/")
        dispatch({
            type:SET_USER,
            payload:null
        })
    }

    useEffect(()=>{
        if(!isAuth && localStorage.getItem("user")) {
            dispatch({
                type:SET_USER,
                payload: JSON.parse(localStorage.getItem("user"))
            })
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <header>
            <div className="header-block">
            <Link to="/">
                <span className="logo text-white">My</span><span className="logo text-blue">Jobs</span>
            </Link>
            <div>
                {
                   isAuth ? <>
                   <Link to="/dashboard" className="text-white">
                    Dashboard
                   </Link>
                    <Link to="/create" className="text-white">
                    Post a Job
                   </Link>
                   <button className="btn btn-login" onClick={handleLogOut}>
                   Logout
                   </button> 
                   </>: 
                   <Link to="/login" className="btn btn-login">
                   Login/Signup
                   </Link>
                }
                
            </div> 
            </div>
        </header>
    )
}

export default Header;