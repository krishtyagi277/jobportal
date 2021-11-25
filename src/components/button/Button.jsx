import React from "react";
import PropTypes from "prop-types";
import "./button.css";

function Button({title}){
    return (
    <button className="btn btn-comp">
        {title}
    </button>
    )
}

Button.propTypes = {
    title: PropTypes.string
}

export default Button;