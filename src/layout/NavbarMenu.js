import React from 'react'

const NavbarMenu = () => {
    return (
        <>
            <div id="navbarMenu" className="navbar-menu-wrapper">
                <div className="navbar-menu-header">
                    <a href="/" className="df-logo">
                        dash<span>forge</span>
                    </a>
                    <a id="mainMenuClose" href="">
                        <i data-feather="x" />
                    </a>
                </div>
                {/* navbar-menu-header */}
                <ul className="nav navbar-menu">
                    <li className="nav-label pd-l-20 pd-lg-l-25 d-lg-none">
                        Main Navigation
                    </li>
                    <li className="nav-item with-sub active">
                        <a href="#!" className="nav-link">
                            <i data-feather="pie-chart" /> Dashboard
                        </a>
                        <ul className="navbar-menu-sub">
                            <li className="nav-sub-item">
                                <a href="#!" className="nav-sub-link">
                                    <i data-feather="bar-chart-2" />
                                    Sales Monitoring
                                </a>
                            </li>
                            <li className="nav-sub-item">
                                <a href="#!" className="nav-sub-link">
                                    <i data-feather="bar-chart-2" />
                                    Website Analytics
                                </a>
                            </li>
                            <li className="nav-sub-item">
                                <a href="#!" className="nav-sub-link">
                                    <i data-feather="bar-chart-2" />
                                    Cryptocurrency
                                </a>
                            </li>
                            <li className="nav-sub-item">
                                <a href="#!" className="nav-sub-link">
                                    <i data-feather="bar-chart-2" />
                                    Helpdesk Management
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item with-sub">
                        <a href="#!" className="nav-link">
                            <i data-feather="package" /> Apps
                        </a>
                        <ul className="navbar-menu-sub">
                            <li className="nav-sub-item">
                                <a href="#!" className="nav-sub-link">
                                    <i data-feather="calendar" />
                                    Calendar
                                </a>
                            </li>
                            <li className="nav-sub-item">
                                <a href="#!" className="nav-sub-link">
                                    <i data-feather="message-square" />
                                    Chat
                                </a>
                            </li>
                            <li className="nav-sub-item">
                                <a href="#!" className="nav-sub-link">
                                    <i data-feather="users" />
                                    Contacts
                                </a>
                            </li>
                            <li className="nav-sub-item">
                                <a href="#!" className="nav-sub-link">
                                    <i data-feather="file-text" />
                                    File Manager
                                </a>
                            </li>
                            <li className="nav-sub-item">
                                <a href="#!" className="nav-sub-link">
                                    <i data-feather="mail" />
                                    Mail
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item with-sub">
                        <a href="#!" className="nav-link">
                            <i data-feather="layers" /> Pages
                        </a>
                        <div className="navbar-menu-sub">
                            <div className="d-lg-flex">
                                <ul>
                                    <li className="nav-label">Authentication</li>
                                    <li className="nav-sub-item">
                                        <a href="#!" className="nav-sub-link">
                                            <i data-feather="log-in" /> Sign In
                                        </a>
                                    </li>
                                    <li className="nav-sub-item">
                                        <a href="#!" className="nav-sub-link">
                                            <i data-feather="user-plus" /> Sign Up
                                        </a>
                                    </li>
                                    <li className="nav-sub-item">
                                        <a href="#!" className="nav-sub-link">
                                            <i data-feather="user-check" /> Verify Account
                                        </a>
                                    </li>
                                    <li className="nav-sub-item">
                                        <a href="#!" className="nav-sub-link">
                                            <i data-feather="shield-off" /> Forgot Password
                                        </a>
                                    </li>
                                    <li className="nav-label mg-t-20">User Pages</li>
                                    <li className="nav-sub-item">
                                        <a href="#!" className="nav-sub-link">
                                            <i data-feather="user" /> View Profile
                                        </a>
                                    </li>
                                    <li className="nav-sub-item">
                                        <a href="#!" className="nav-sub-link">
                                            <i data-feather="users" /> Connections
                                        </a>
                                    </li>
                                    <li className="nav-sub-item">
                                        <a href="#!" className="nav-sub-link">
                                            <i data-feather="users" /> Groups
                                        </a>
                                    </li>
                                    <li className="nav-sub-item">
                                        <a href="#!" className="nav-sub-link">
                                            <i data-feather="calendar" /> Events
                                        </a>
                                    </li>
                                </ul>
                                <ul>
                                    <li className="nav-label">Error Pages</li>
                                    <li className="nav-sub-item">
                                        <a href="#!" className="nav-sub-link">
                                            <i data-feather="file" /> 404 Page Not Found
                                        </a>
                                    </li>
                                    <li className="nav-sub-item">
                                        <a href="#!" className="nav-sub-link">
                                            <i data-feather="file" /> 500 Internal Server
                                        </a>
                                    </li>
                                    <li className="nav-sub-item">
                                        <a href="#!" className="nav-sub-link">
                                            <i data-feather="file" /> 503 Service Unavailable
                                        </a>
                                    </li>
                                    <li className="nav-sub-item">
                                        <a href="#!" className="nav-sub-link">
                                            <i data-feather="file" /> 505 Forbidden
                                        </a>
                                    </li>
                                    <li className="nav-label mg-t-20">Other Pages</li>
                                    <li className="nav-sub-item">
                                        <a href="#!" className="nav-sub-link">
                                            <i data-feather="file-text" /> Timeline
                                        </a>
                                    </li>
                                    <li className="nav-sub-item">
                                        <a href="#!" className="nav-sub-link">
                                            <i data-feather="file-text" /> Pricing
                                        </a>
                                    </li>
                                    <li className="nav-sub-item">
                                        <a href="#!" className="nav-sub-link">
                                            <i data-feather="file-text" /> Help Center
                                        </a>
                                    </li>
                                    <li className="nav-sub-item">
                                        <a href="#!" className="nav-sub-link">
                                            <i data-feather="file-text" /> Invoice
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* nav-sub */}
                    </li>
                    <li className="nav-item">
                        <a href="#!" className="nav-link">
                            <i data-feather="box" /> Components
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#!" className="nav-link">
                            <i data-feather="archive" /> Collections
                        </a>
                    </li>
                </ul>
            </div>
            {/* navbar-menu-wrapper */}
        </>

    )
}

export default NavbarMenu;
