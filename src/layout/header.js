import React from 'react'
import NavbarMenu from './NavbarMenu';
import { useNavigate } from "react-router-dom";
const Header = () => {
    const navigate = useNavigate();
    function handleLogout() {
        window.localStorage.removeItem('isAuthenticated');
        navigate('/login');
    }
    return (
        <>
            <header className="navbar navbar-header navbar-header-fixed">

                <a href="" id="mainMenuOpen" className="burger-menu">
                    <i data-feather="menu" />
                </a>

                <div className="navbar-brand">
                    <a href="/" className="df-logo">
                        Bai<span>Thak</span>
                    </a>
                </div>

                <NavbarMenu />

                <div className="navbar-right">
                    <a id="navbarSearch" href="" className="search-link">
                        <i data-feather="search" />
                    </a>
                    <div className="dropdown dropdown-message">
                        <a href="" className="dropdown-link new-indicator" data-toggle="dropdown">
                            <i data-feather="message-square" />
                            <span>5</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                            <div className="dropdown-header">New Messages</div>
                            <a href="" className="dropdown-item">
                                <div className="media">
                                    <div className="avatar avatar-sm avatar-online">
                                        <img
                                            src="../../assets/img/img6.jpg"
                                            className="rounded-circle"
                                            alt=""
                                        />
                                    </div>
                                    <div className="media-body mg-l-15">
                                        <strong>Socrates Itumay</strong>
                                        <p>nam libero tempore cum so...</p>
                                        <span>Mar 15 12:32pm</span>
                                    </div>
                                    {/* media-body */}
                                </div>
                                {/* media */}
                            </a>
                            <a href="" className="dropdown-item">
                                <div className="media">
                                    <div className="avatar avatar-sm avatar-online">
                                        <img
                                            src="../../assets/img/img8.jpg"
                                            className="rounded-circle"
                                            alt=""
                                        />
                                    </div>
                                    <div className="media-body mg-l-15">
                                        <strong>Joyce Chua</strong>
                                        <p>on the other hand we denounce...</p>
                                        <span>Mar 13 04:16am</span>
                                    </div>
                                    {/* media-body */}
                                </div>
                                {/* media */}
                            </a>
                            <a href="" className="dropdown-item">
                                <div className="media">
                                    <div className="avatar avatar-sm avatar-online">
                                        <img
                                            src="../../assets/img/img7.jpg"
                                            className="rounded-circle"
                                            alt=""
                                        />
                                    </div>
                                    <div className="media-body mg-l-15">
                                        <strong>Althea Cabardo</strong>
                                        <p>is there anyone who loves...</p>
                                        <span>Mar 13 02:56am</span>
                                    </div>
                                    {/* media-body */}
                                </div>
                                {/* media */}
                            </a>
                            <a href="" className="dropdown-item">
                                <div className="media">
                                    <div className="avatar avatar-sm avatar-online">
                                        <img
                                            src="../../assets/img/img9.jpg"
                                            className="rounded-circle"
                                            alt=""
                                        />
                                    </div>
                                    <div className="media-body mg-l-15">
                                        <strong>Adrian Monino</strong>
                                        <p>duis aute irure dolor in repre...</p>
                                        <span>Mar 12 10:40pm</span>
                                    </div>
                                    {/* media-body */}
                                </div>
                                {/* media */}
                            </a>
                            <div className="dropdown-footer">
                                <a href="">View all Messages</a>
                            </div>
                        </div>
                        {/* dropdown-menu */}
                    </div>
                    {/* dropdown */}
                    <div className="dropdown dropdown-notification">
                        <a href="" className="dropdown-link new-indicator" data-toggle="dropdown">
                            <i data-feather="bell" />
                            <span>2</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                            <div className="dropdown-header">Notifications</div>
                            <a href="" className="dropdown-item">
                                <div className="media">
                                    <div className="avatar avatar-sm avatar-online">
                                        <img
                                            src="../../assets/img/img6.jpg"
                                            className="rounded-circle"
                                            alt=""
                                        />
                                    </div>
                                    <div className="media-body mg-l-15">
                                        <p>
                                            Congratulate <strong>Socrates Itumay</strong> for work
                                            anniversaries
                                        </p>
                                        <span>Mar 15 12:32pm</span>
                                    </div>
                                    {/* media-body */}
                                </div>
                                {/* media */}
                            </a>
                            <a href="" className="dropdown-item">
                                <div className="media">
                                    <div className="avatar avatar-sm avatar-online">
                                        <img
                                            src="../../assets/img/img8.jpg"
                                            className="rounded-circle"
                                            alt=""
                                        />
                                    </div>
                                    <div className="media-body mg-l-15">
                                        <p>
                                            <strong>Joyce Chua</strong> just created a new blog post
                                        </p>
                                        <span>Mar 13 04:16am</span>
                                    </div>
                                    {/* media-body */}
                                </div>
                                {/* media */}
                            </a>
                            <a href="" className="dropdown-item">
                                <div className="media">
                                    <div className="avatar avatar-sm avatar-online">
                                        <img
                                            src="../../assets/img/img7.jpg"
                                            className="rounded-circle"
                                            alt=""
                                        />
                                    </div>
                                    <div className="media-body mg-l-15">
                                        <p>
                                            <strong>Althea Cabardo</strong> just created a new blog post
                                        </p>
                                        <span>Mar 13 02:56am</span>
                                    </div>
                                    {/* media-body */}
                                </div>
                                {/* media */}
                            </a>
                            <a href="" className="dropdown-item">
                                <div className="media">
                                    <div className="avatar avatar-sm avatar-online">
                                        <img
                                            src="../../assets/img/img9.jpg"
                                            className="rounded-circle"
                                            alt=""
                                        />
                                    </div>
                                    <div className="media-body mg-l-15">
                                        <p>
                                            <strong>Adrian Monino</strong> added new comment on your photo
                                        </p>
                                        <span>Mar 12 10:40pm</span>
                                    </div>
                                    {/* media-body */}
                                </div>
                                {/* media */}
                            </a>
                            <div className="dropdown-footer">
                                <a href="">View all Notifications</a>
                            </div>
                        </div>
                        {/* dropdown-menu */}
                    </div>
                    {/* dropdown */}
                    <div className="dropdown dropdown-profile">
                        <a
                            href=""
                            className="dropdown-link"
                            data-toggle="dropdown"
                            data-display="static"
                        >
                            <div className="avatar avatar-sm">
                                <img
                                    src="../../assets/img/img1.png"
                                    className="rounded-circle"
                                    alt=""
                                />
                            </div>
                        </a>
                        {/* dropdown-link */}
                        <div className="dropdown-menu dropdown-menu-right tx-13">
                            <div className="avatar avatar-lg mg-b-15">
                                <img
                                    src="../../assets/img/img1.png"
                                    className="rounded-circle"
                                    alt=""
                                />
                            </div>
                            <h6 className="tx-semibold mg-b-5">Katherine Pechon</h6>
                            <p className="mg-b-25 tx-12 tx-color-03">Administrator</p>
                            <a href="" className="dropdown-item">
                                <i data-feather="edit-3" /> Edit Profile
                            </a>
                            <a href="#!" className="dropdown-item">
                                <i data-feather="user" /> View Profile
                            </a>
                            <div className="dropdown-divider" />

                            <a href="#!" className="dropdown-item" onClick={handleLogout}>
                                <i data-feather="log-out" />
                                Sign Out
                            </a>
                        </div>
                        {/* dropdown-menu */}
                    </div>
                    {/* dropdown */}
                </div>
                {/* navbar-right */}

                <div className="navbar-search">
                    <div className="navbar-search-header">
                        <input
                            type="search"
                            className="form-control"
                            placeholder="Type and hit enter to search..."
                        />
                        <button className="btn">
                            <i data-feather="search" />
                        </button>
                        <a id="navbarSearchClose" href="" className="link-03 mg-l-5 mg-lg-l-10">
                            <i data-feather="x" />
                        </a>
                    </div>
                    {/* navbar-search-header */}
                    <div className="navbar-search-body">
                        <label className="tx-10 tx-medium tx-uppercase tx-spacing-1 tx-color-03 mg-b-10 d-flex align-items-center">
                            Recent Searches
                        </label>
                        <ul className="list-unstyled">
                            <li>
                                <a href="dashboard-one.html">modern dashboard</a>
                            </li>
                            <li>
                                <a href="app-calendar.html">calendar app</a>
                            </li>
                            <li>
                                <a href="../../collections/modal.html">modal examples</a>
                            </li>
                            <li>
                                <a href="../../components/el-avatar.html">avatar</a>
                            </li>
                        </ul>
                        <hr className="mg-y-30 bd-0" />
                        <label className="tx-10 tx-medium tx-uppercase tx-spacing-1 tx-color-03 mg-b-10 d-flex align-items-center">
                            Search Suggestions
                        </label>
                        <ul className="list-unstyled">
                            <li>
                                <a href="dashboard-one.html">cryptocurrency</a>
                            </li>
                            <li>
                                <a href="app-calendar.html">button groups</a>
                            </li>
                            <li>
                                <a href="../../collections/modal.html">form elements</a>
                            </li>
                            <li>
                                <a href="../../components/el-avatar.html">contact app</a>
                            </li>
                        </ul>
                    </div>
                    {/* navbar-search-body */}
                </div>
                {/* navbar-search */}

            </header>
        </>
    )
}

export default Header;