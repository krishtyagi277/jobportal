import React from "react";
import JobSearch from "../../img/U0A9130.jpg";
import "./banner.css";

function Banner() {
    return (
        <div className="banner">
            <div className="l-section">
                <p className="banner-title">
                    Welcome to<br/><span className="text-white">My</span><span className="text-blue">Jobs</span>
                </p>
                <button className="btn btn-start">
                    Get Started
                </button>
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