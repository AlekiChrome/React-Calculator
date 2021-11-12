import React from 'react'
import "./Buttons.css"

const Buttons = ({ symbol, color, handleClick }) => {
    // This looks good!
    return (
        <div
            onClick={() => handleClick(symbol)}
            className="button-main"
            style={{backgroundColor: color }}
        >
            {symbol}
        </div>
    )
}

export default Buttons
