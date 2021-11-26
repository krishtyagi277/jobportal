import React from "react";
import "./candidateCard.css"

function CandidateCard({name, email, skills}){
    return(
        <div className="candidate-card">
            <div className="profile">
                <div className="profile-pic">
                    k
                </div>
                <div className="profile-details">
                    <p className="profile-name">{name}</p>
                    <p className="profile-email">{email}</p>
                </div>
            </div>
            <div className="skills">
                <p className="skills-heading">Skills</p>
                <p className="skills-details">{skills}</p>
            </div>
        </div>
    )
}

export default CandidateCard;