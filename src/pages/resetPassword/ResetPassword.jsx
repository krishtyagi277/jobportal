import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import { resetPasswordApi } from "../../api/ApiCalls";
import { saveUser } from "../../utils/Utils";
import { userContext } from "../../context/Context";
import { SET_USER } from "../../context/Actiontype";
import "./resetPassword.css"

function ResetPassword(){
    const navigate = useNavigate();
    const {  dispatch } = useContext(userContext);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error,  setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault(); 

        if(!password) {
            setError(true)
            return;
        }
         
        //API function here
        resetPasswordApi(password, confirmPassword).then((res) => {
            if(res.code === 422) 
                setError(true);
            else if(res.code === 201) {
                saveUser(res.data)
                dispatch({
                    type: SET_USER,
                    payload:res.data
                })
                navigate('/dashboard')
            }
        }).catch((err) => console.log(err))

    }
    return (
        <div className="banner reset-pass-banner">
            <div className="reset-pass-form" onSubmit={handleSubmit}>
                <h2 id="reset-pass-heading" className="text-outlineblue">Reset Your Password</h2>
                <p className="text-outlineblue reset-pass-desc">Enter your new password below.</p>
                <form>
                <div className="form-element">
                        <div className="field-label"><p>New Password</p> </div>
                        <input type="password" className={error ?"inp-field error": "inp-field"} value={password} onChange={(e) => setPassword(e.target.value)} name="password" placeholder="Enter your password"/>
                        { error ? <div className="field-error"><p>Invalid password</p></div> : ""}
                </div>
                <div className="form-element">
                        <div className="field-label"><p>Confirm Password</p> </div>
                        <input type="password" className={error ?"inp-field error": "inp-field"} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} name="password" placeholder="Enter your password"/>
                        { error ? <div className="field-error"><p>Invalid password</p></div> : ""}
                    </div>
                    <div className="form-element-btn">
                        <Button title={"Reset"}/>
                    </div>
                </form>
                
            </div>
        </div>
    )
}

export default ResetPassword;