import React from 'react'
import Header from './header';
// import config from '../config';


const Layout = ({ children }) => {
    return (
        <>
            {/* Header */}
            <Header />

            {/* Content */}
            {children}

            {/* Footer */}
            {/* <div>
                © {new Date().getFullYear()} {config.APP_NAME}
            </div> */}
        </>
    )
}

export default Layout;