import React from 'react'
import './DrawerToggleButton.css';

const DrawerToggleButton = props => {
    return (
        <button className="toggle-button" onClick={props.click}>
            <span className="toggle-button__line"></span>
            <span className="toggle-button__line"></span>
            <span className="toggle-button__line"></span>
        </button>
    )
}

export default DrawerToggleButton;