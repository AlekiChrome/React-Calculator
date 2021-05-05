import React from 'react'
import "./Buttons.css"

const Buttons = ({ symbol, color }) => {
    return (
        <div className="button-main" style={{backgroundColor: color }}>
            {symbol}
        </div>
    )
}

export default Buttons
