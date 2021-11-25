import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import {validateLoginForm} from "../../utils/vaildation";
import { LoginApi } from "../../api/ApiCalls";
import { saveUser } from "../../utils/Utils";
import { userContext } from "../../context/Context";
import { SET_USER } from "../../context/Actiontype";
import "./login.css"

function Login(){
    const navigate = useNavigate();
    const {  dispatch } = useContext(userContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error,  setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault(); 

        if(!validateLoginForm(email, password)) {
            setError(true)
            return;
        }
         
        //API function here
        LoginApi({email, password}).then((res) => {
            if(res.code === 401) 
                setError(true);
            else if(res.code === 200) {
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
        <div className="banner login-banner">
            <div className="login-form" onSubmit={handleSubmit}>
                <h2 id="login-heading" className="text-outlineblue">Login</h2>
                <form>
                    <div className="form-element">
                        <div className="field-label"><p>Email address</p></div>
                        <input type="email" className={error ?"error inp-field": "inp-field"} value={email} onChange={(e) => setEmail(e.target.value)} name="email" placeholder="Enter your email"/>
                    </div>
                    <div className="form-element">
                        <div className="field-label"><p>Password</p> <Link to="/forgot" className="text-blue">Forgot your password?</Link></div>
                        <input type="password" className={error ?"inp-field error": "inp-field"} value={password} onChange={(e) => setPassword(e.target.value)} name="password" placeholder="Enter your password"/>
                        { error ? <div className="field-error"><p>Incorret email address or password</p></div> : ""}
                    </div>
                    <div className="form-element-btn">
                        <Button title={"Login"}/>
                    </div>
                </form>
                <div className="login-text">
                    <span className="text-outlineblue">New to MyJobs?</span><span className="text-blue"><Link to="/signup" className="text-blue">Create an account</Link></span>
                </div>
            </div>
        </div>
    )
}

export default Login;