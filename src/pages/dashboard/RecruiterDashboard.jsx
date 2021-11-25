import React from "react";
import Breadcrumb from "../../components/breadcrumb/BreadCrumb";
import JobCard from "../../components/jobCard/JobCard";
import "./recruiter.css";

const mockJobDetails = [{
    title:" UI UX Designer",
    desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
},
{
    title:" UI UX Designer",
    desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
},
{
    title:" UI UX Designer",
    desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
}]
function RecruiterDashboard(){
    return (
        <div className="recruiter-dashboard">
            <Breadcrumb/>
            <h2 className="job-post-title">Job posted by you</h2>
            
            {  mockJobDetails.length ?
                <div className="jobcard-container">
            {
               mockJobDetails.map((jobDetails, index) => (
                    <JobCard key={index} title={jobDetails.title} desc={jobDetails.desc}/>
                ))
            }
            </div> : "Empty"
            }
            
            </div>
    )
}

export default RecruiterDashboard;