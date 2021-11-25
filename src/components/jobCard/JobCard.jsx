import React from "react";
import PropTypes from "prop-types"
import { FaPeriscope} from "react-icons/fa";
import "./jobcard.css";

function JobCard({title, desc, location}){
    return (
        <div className="job-card">
        <h3>
           {title}
        </h3>
        <p>
        {desc}
        </p>
        <div className="job-apply">
            <button className="view-location">
               <FaPeriscope className="text-blue"/> {location}
            </button>
            <button className="view-application-btn">
                View Applications
            </button>
        </div>
    </div>
    )
}

JobCard.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
    location: PropTypes.string
}
export default JobCard;