import React,{ useState } from "react";
import PropTypes from "prop-types"
import { FaPeriscope} from "react-icons/fa";
import Modal from "../modal/Modal";
import "./jobcard.css";
import CandidateCard from "../candidateCard/CandidateCard";
import {FaTimes} from "react-icons/fa"
import {getOneJobDetails} from "../../api/ApiCalls";
import Writing from "../../img/writing3.png"


function JobCard({title, desc, location, jobId}){
    const [modal, setModal] = useState(false);
    const [candidatesForOneJob, setCandidatesForOneJob] = useState([]);
    
    const modalOpen = (currentJobId) => {
        getOneJobDetails(currentJobId).then((res) => {
            if(res.code === 200 && res.hasOwnProperty("data")){
                setCandidatesForOneJob(res.data)
            }
        }).catch((err) => console.log(err))
        setModal(true)
    }

    const modalClose = () => {
        setModal(false)
    }

    const mapCandiatesForOneThisJob = candidatesForOneJob.map((candidateDetails) => (
        <CandidateCard key={candidateDetails.id} name={candidateDetails.name} email={candidateDetails.email} skills={candidateDetails.skills}/>           
    ))

    return (
        <div className="job-card">
        <h3>
           {title}
        </h3>
        <p className="description">
        {desc}
        </p>
        <div className="job-apply">
            <button className="view-location">
               <FaPeriscope className="text-blue"/> {location}
            </button>
            <button className="view-application-btn" onClick={() => modalOpen(jobId)}>
                View Applications
            </button>
            <Modal show={modal} handleClose={modalClose}>
            <div className="display-jobs-form">
                <div className="modal-head"><h3 id="display-jobs-heading" className="text-outlineblue">Applicants for this job</h3><h3 className="fatimes" onClick={modalClose}><FaTimes/></h3></div>
                <p className="text-outlineblue reset-pass-desc">Total {candidatesForOneJob.length} applications</p>
                <div className="applicants-container">
                    {candidatesForOneJob.length ? mapCandiatesForOneThisJob:
                     <div className="writing-icon-candidate">
                     <img src={Writing} alt="writing-png" />
                     <p className="no-application">No applications available!</p>
                 </div>}
                </div>
            </div>
            </Modal>
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