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
                        <Link to="/staff" className="nav-link"> Staff</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/students" className="nav-link"> Students</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/viewClass" className="nav-sub-link"> Classes</Link>
                    </li>
                    <li className="nav-item">
                        <a href="#!" className="nav-link">
                            Tests
                        </a>
                    </li>
                    <li className="nav-item">
                        <Link to="/createVariables" className="nav-link"> Variables</Link>
                    </li>
                    <li className="nav-item with-sub">
                        <a href="#!" className="nav-link">
                            More
                        </a>
                        <div className="navbar-menu-sub">
                            <ul>
                                <li className="nav-sub-item">
                                    <Link to="/viewSubjects" className="nav-sub-link"> Subjects</Link>
                                </li>
                                <li className="nav-sub-item">
                                    <Link to="/viewSyllabus" className="nav-sub-link"> Syllabus</Link>
                                </li>
                                <li className="nav-sub-item">
                                    <Link to="/viewSchools" className="nav-sub-link"> Schools</Link>
                                </li>
                                <li className="nav-sub-item">
                                    <Link to="/createUser" className="nav-sub-link"> Create User</Link>
                                </li>
                            </ul>
                        </div>
                    </li>

                </ul>
            </div>
            {/* navbar-menu-wrapper */}
        </>

    )
}

export default NavbarMenu;
