import React,{useContext} from "react";
import { Link } from "react-router-dom";
import JobSearch from "../../img/U0A9130.jpg";
import { userContext } from "../../context/Context";
import "./banner.css";

function Banner() {
    const {state} = useContext(userContext);
    const {isAuth} = state;
    return (
        <div className="banner">
            <div className="l-section">
                <p className="banner-title">
                    Welcome to<br/><span className="text-white">My</span><span className="text-blue">Jobs</span>
                </p>
                <Link to={isAuth ?"/dashboard":"/login"} className="btn btn-start">
                    Get Started
                </Link>
            </div>
            <div className="r-section">
                <div className="banner-img">
                 <img src={JobSearch} className="round-corners" alt="job-search"/>
                </div>
            </div>
        </div>
    )
}

export default Banner;