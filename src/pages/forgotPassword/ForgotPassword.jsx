import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import {validateEmail} from "../../utils/vaildation";
import { forgotPasswordApi } from "../../api/ApiCalls";
import { saveUser } from "../../utils/Utils";
import "./forgotPassword.css"

function ForgotPassword(){
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [error,  setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault(); 

        if(!validateEmail(email)) {
            setError(true)
            return;
        }
         
        //API function here
        forgotPasswordApi(email).then((res) => {
            if(res.code === 404) 
                setError(true);
            else if(res.code === 201) {
                saveUser(res.data)
                navigate('/reset')
            }
        }).catch((err) => console.log(err))

    }
    return (
        <div className="banner forgot-pass-banner">
            <div className="forgot-pass-form" onSubmit={handleSubmit}>
                <h2 id="forgot-pass-heading" className="text-outlineblue">Forgot your password?</h2>
                <p className="text-outlineblue forgot-pass-desc">Enter the email associated with your account and we’ll send you instructions to reset your password.</p>
                <form>
                    <div className="form-element">
                        <div className="field-label"><p>Email address</p></div>
                        <input type="email" className={error ?"error inp-field": "inp-field"} value={email} onChange={(e) => setEmail(e.target.value)} name="email" placeholder="Enter your email"/>
                        { error ? <div className="field-error"><p>Incorret email address</p></div> : ""}
                    </div>
                    <div className="form-element-btn">
                        <Button title={"Submit"}/>
                    </div>
                </form>
                
            </div>
        </div>
    )
}

export default ForgotPassword;