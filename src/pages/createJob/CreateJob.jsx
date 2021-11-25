import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import {validateJobForm} from "../../utils/vaildation";
import { createJobsByRecruiter } from "../../api/ApiCalls";
import "./createjob.css"

let ERROR_MESSAGE ="All fields are mandatory"

function CreateJob(){
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [error,  setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault(); 

        if(!validateJobForm(title, description,location)) {
            setError(true)
            return;
        }
         
        //API function here
        createJobsByRecruiter({title, description, location}).then((res) => {
            if(res.code === 401) 
                setError(true);
            else if(res.code === 201) {
                navigate('/dashboard')
            } else if(res.code === 422) {
                setError(true);
                ERROR_MESSAGE = "title and location must be 3 to 100 and description must be 3 to 150"
            }
        }).catch((err) => console.log(err))

    }
    return (
        <div className="banner job-banner">
            <div className="job-form" onSubmit={handleSubmit}>
                <h2 id="job-heading" className="text-outlineblue">Post a Job</h2>
                <form>
                    <div className="form-element">
                        <div className="field-label"><p>Job title*</p></div>
                        <input type="text" className={error ?"error inp-field": "inp-field"} value={title} onChange={(e) => setTitle(e.target.value)} name="jobTitle" placeholder="Enter job title"/>
                    </div>
                    <div className="form-element">
                        <div className="field-label"><p>Description*</p></div>
                        <textarea rows="4" className={error ?"inp-field error": "inp-field"} value={description} onChange={(e) => setDescription(e.target.value)} name="description" placeholder="Enter job description"/>
                    </div>
                    <div className="form-element">
                        <div className="field-label"><p>Location*</p></div>
                        <input type="text" className={error ?"inp-field error": "inp-field"} value={location} onChange={(e) => setLocation(e.target.value)} name="location" placeholder="Enter location"/>
                        { error ? <div className="field-error"><p>{ERROR_MESSAGE}</p></div> : ""}
                    </div>
                    <div className="form-element-btn">
                        <Button title={"Post"}/>
                    </div>
                </form>
               
            </div>
        </div>
    )
}

export default CreateJob;