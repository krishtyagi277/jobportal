import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
    return (
        <header>
            <div className="header-block">
            <Link to="/">
                <span className="logo text-white">My</span><span className="logo text-blue">Jobs</span>
            </Link>
            <div>
                <Link to="/login" className="btn btn-login">
                    Login/Signup
                </Link>
            </div> 
            </div>
        </header>
    )
}

export default Header;