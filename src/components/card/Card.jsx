import React from "react";
import PropTypes from "prop-types";
import "./card.css"

function Card({title, description}) {
    return (
        <div className="card">
            <h3>
                {title}
            </h3>
            <p>
            {description}
            </p>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string,
    describe:PropTypes.string
}

export default Card;