import React, { useEffect, useState } from "react";
import Breadcrumb from "../../components/breadcrumb/BreadCrumb";
import JobCard from "../../components/jobCard/JobCard";
import { getJobsPostedByRecruiter } from "../../api/ApiCalls";
import Writing from "../../img/writing3.png"
import "./recruiter.css";
import { Link } from "react-router-dom";
import {FaAngleLeft, FaAngleRight} from "react-icons/fa"


function RecruiterDashboard(){

    const [jobsData, setJobsData] = useState([]);
    const [totalPage, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1); 

    const handleLeftPagination = () => {
        if(currentPage > 1)
        setCurrentPage((currVal) => (currVal - 1))
    }
    const handleRightPagination = () => {
        if((currentPage+1) > totalPage){
            return;
        }
        setCurrentPage((currVal) => (currVal + 1))
    }

    useEffect (()=> {
        getJobsPostedByRecruiter(JSON.parse(localStorage.getItem('token')), currentPage)
        .then((res) => {
            if(res.code === 200) {
                if(res.hasOwnProperty("data")) {
                    setJobsData(res.data.data)
                    setTotalPages(Math.ceil(res.data.metadata.count / res.data.metadata.limit))
                }
            }
        }).catch((err) => console.log(err))
    }, [currentPage])


    useEffect (()=> {
        getJobsPostedByRecruiter(JSON.parse(localStorage.getItem('token')))
        .then((res) => {
            if(res.code === 200) {
                if(res.hasOwnProperty("data")) {
                    setJobsData(res.data.data)
                    setTotalPages(Math.ceil(res.data.metadata.count / res.data.metadata.limit))
                }
            }
            setCurrentPage(1);
        }).catch((err) => console.log(err))
    }, [])

    return (
        <div className="recruiter-dashboard">
            <Breadcrumb/>
            <h2 className="job-post-title">Job posted by you</h2>
            
            {  jobsData.length ?
                <div className="jobcard-container">
            {
               jobsData.map((jobDetails) => (
                    <JobCard key={jobDetails.id} jobId={jobDetails.id} title={jobDetails.title} desc={jobDetails.description} location={jobDetails.location}/>
                ))
            }
            <div className={jobsData.length <= 8?"pagination pagination-fix":"pagination"}>
                <button className="btn-left" onClick={handleLeftPagination}><FaAngleLeft/></button>
                <div className="page-num">{currentPage}</div>
                <button className="btn-right" onClick={handleRightPagination}><FaAngleRight/></button>
            </div>
            </div> : <div className="no-jobs-container">
                <div className="writing-icon">
                    <img src={Writing} alt="writing-png" />
                </div>
                <Link to="/create" className="btn btn-start">
                    Post a Job
                </Link>
            </div>
            }
            
            </div>
    )
}

export default RecruiterDashboard;