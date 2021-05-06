import React from 'react'
import "./Display.css"

const Display = ({ text, results }) => {
    return (
        <div className="display-main">
            <div className="results">
                <h1>
                    {results}
                </h1>
            </div>

            <div className="text">
                <h3>{text}</h3>
            </div>
        </div>
    )
}

export default Display
