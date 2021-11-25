import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import "./login.css"

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        //API function here
    }
    return (
        <div className="banner login-banner">
            <div className="login-form" onSubmit={handleSubmit}>
                <h2 id="login-heading" className="text-outlineblue">Login</h2>
                <form>
                    <div className="form-element">
                        <div className="field-label"><p>Email address</p></div>
                        <input type="email" className="inp-field" value={email} onChange={(e) => setEmail(e.target.value)} name="email" placeholder="Enter your email"/>
                    </div>
                    <div className="form-element">
                        <div className="field-label"><p>Password</p> <p className="text-blue">Forgot your password?</p></div>
                        <input type="password" className="inp-field" value={password} onChange={(e) => setPassword(e.target.value)} name="password" placeholder="Enter your password"/>
                        <div className="field-error"><p>Incorret email address or password</p></div>
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