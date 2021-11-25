import React from "react";
import PropTypes from "prop-types"
import "./jobcard.css";

function JobCard({title, desc}){
    return (
        <div className="job-card">
        <h3>
           {title}
        </h3>
        <p>
        {desc}
        </p>
        <div className="job-apply">
            <button className="btn view-location">
                Bengaluru
            </button>
            <button className="btn view-application-btn">
                View Application
            </button>
        </div>
    </div>
    )
}

JobCard.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string
}
export default JobCard;