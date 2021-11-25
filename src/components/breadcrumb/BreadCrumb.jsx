import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa"
import "./breadcrumb.css"

function BreadCrumb({title="Home"}){
    return (
        <div className="breadcrumb">
            <Link to="/"><FaHome/> Home</Link>
        </div>
    )
}

export default BreadCrumb;