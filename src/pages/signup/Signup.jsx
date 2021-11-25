import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import { validateSignUpForm } from "../../utils/vaildation";
import { registerApi } from "../../api/ApiCalls"; 
import { saveUser } from "../../utils/Utils";
import "./signup.css"

function Signup(){
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [skills, setSkills] = useState(""); 
    const [userRole, setUserRole] = useState(false);
    const [error,  setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const userObj = {
            name,
            email,
            password,
            confirmPassword,
            skills,
            userRole: userRole ? 1 : 0,
        }
        
        if(!validateSignUpForm(userObj)) {
            setError(true);
            return;
        }

        //Register API
        registerApi(userObj).then((res) => {
            if(res.code === 201) {
                saveUser(userObj)
                navigate('/dashboard')
            } else {
                setError(true)
            }
        }).catch((err) =>  console.log(err))

    }
    return (
        <div className="banner signup-banner">
            <div className="signup-form" onSubmit={handleSubmit}>
                <h2 id="signup-heading" className="text-outlineblue">Signup</h2>
                <form>
                <div className="form-element">
                <div className="field-label"><p>I'm a*</p></div>
                </div>
                <div className="form-element field-box">
                <div className={!userRole?"field-label-box box-selected":"field-label-box"} onClick={()=>setUserRole(true)}><p>Recruiter</p></div>
                <div className={userRole?"field-label-box box-selected":"field-label-box"} onClick={()=>setUserRole(false)}><p>Candidate</p></div>
                </div>
                <div className="form-element">
                    <div className="field-label"><p>Full Name*</p></div>
                        <input type="text" className={error ?"error inp-field": "inp-field"} value={name} onChange={(e) => setName(e.target.value)} name="email" placeholder="Enter your full name"/>
                    </div>
                    <div className="form-element">
                        <div className="field-label"><p>Email address*</p></div>
                        <input type="email" className={error ?"error inp-field": "inp-field"} value={email} onChange={(e) => setEmail(e.target.value)} name="email" placeholder="Enter your email"/>
                    </div>
                    <div className="form-elements-horiz">
                    <div className="form-element">
                        <div className="field-label"><p>Create Password*</p> </div>
                        <input type="password" className={error ?"error inp-field": "inp-field"} value={password} onChange={(e) => setPassword(e.target.value)} name="password" placeholder="Enter your password"/>
                        {/* <div className="field-error"><p>Incorret email address or password</p></div> */}
                    </div>
                    <div className="form-element">
                        <div className="field-label"><p>Confirm Password*</p></div>
                        <input type="password" className={error ?"error inp-field": "inp-field"} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} name="password" placeholder="Enter your password"/>
                        {/* <div className="field-error"><p>Incorret email address or password</p></div> */}
                    </div>
                    </div>
                   
                    <div className="form-element">
                        <div className="field-label"><p>Skills</p></div>
                        <input type="text" className={error ?"error inp-field": "inp-field"} value={skills} onChange={(e) => setSkills(e.target.value)} name="email" placeholder="Enter comma seprated skills"/>
                    </div>
                    <div className="form-element-btn">
                        <Button title={"Signup"}/>
                    </div>
                </form>
                <div className="login-text">
                    <span className="text-outlineblue">Have an account?</span><span className="text-blue"><Link to="/login" className="text-blue">Login</Link></span>
                </div>
            </div>
        </div>
    )
}

export default Signup;