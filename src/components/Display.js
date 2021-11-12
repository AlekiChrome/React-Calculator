import React from 'react'
import Thousands from "./Thousands";
import "./Display.css"

const Display = ({ text, results }) => {
    
    /*
        There is a difference between functional components and normal JavaScript functions. A good point of reference to decide if it's a component or a function is whether it returns JSX or data.        
        "Thousands" returns data not JSX so it's just a JavaScript function not a component. In that case, it isn't capitalized but lowercased.
    */
    return (
        <div className="display-main">
            <div className="results">
                <h1>
                    {Thousands(results)}
                </h1>
            </div>

            <div className="text">
                <h3>{text}</h3>
            </div>
        </div>
    )
}

export default Display;
