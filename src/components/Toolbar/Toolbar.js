import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const Toolbar = props => {
    return (
        <header className="toolbar">
            <nav className="toolbar__navigation">
                <div className="toolbar__toggle-button">
                    <DrawerToggleButton click={props.drawerClickHandler} />
                </div>
                <div className="toolbar__logo"><a href="/">MY LOGO</a></div>
                <div className="navbar_spacer"></div>
                <div className="toolbar__navigation-items">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Blog</a></li>
                        <li><a href="/">Products</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
};

export default Toolbar;