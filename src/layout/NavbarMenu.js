import React from 'react';
import {
    Link
} from "react-router-dom";

const NavbarMenu = () => {
    return (
        <>
            <div id="navbarMenu" className="navbar-menu-wrapper">
                <div className="navbar-menu-header">
                    <a href="/" className="df-logo">
                        dash<span>forge</span>
                    </a>
                    <a id="mainMenuClose" href="">

                    </a>
                </div>
                {/* navbar-menu-header */}
                <ul className="nav navbar-menu">
                    <li className="nav-label pd-l-20 pd-lg-l-25 d-lg-none">
                        Main Navigation
                    </li>

                    <li className="nav-item">
                        <Link to="/" className="nav-link">Dashboard</Link>
                        {/* <a href="#!" className="nav-link">
                            Dashboard
                        </a> */}
                    </li>
                    <li className="nav-item">
                        <a href="#!" className="nav-link">
                            Clusters
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#!" className="nav-link">
                            Principals
                        </a>
                    </li>
                    <li className="nav-item">
                        <Link to="/teachers" className="nav-link"> Teachers</Link>
                        {/* <a href="#!" className="nav-link">
                            Teachers
                        </a> */}
                    </li>
                    <li className="nav-item">
                        <Link to="/students" className="nav-link"> Students</Link>
                    </li>
                    <li className="nav-item">
                        <a href="#!" className="nav-link">
                            Classes
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#!" className="nav-link">
                            Tests
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#!" className="nav-link">
                            Variables
                        </a>
                    </li>
                </ul>
            </div>
            {/* navbar-menu-wrapper */}
        </>

    )
}

export default NavbarMenu;
