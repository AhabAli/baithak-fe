import React from 'react'
import { useNavigate } from "react-router-dom";
import { instance } from '../api/api';

const loginUser = async (data) => {
    try {
        const { data: reponse, status } = await instance.post('/users/authenticate', data);
        if (status === 200) {
            return reponse;
        }
    } catch (error) {
        console.log(error)
        return error.response.data;
    }
}

const Login = () => {

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        let email = document.getElementById('auth-email').value;
        let password = document.getElementById('auth-password').value;
        let alert = document.getElementById('alert-auth');
        if (email && password) {
            // window.localStorage.setItem('isAuthenticated', true);
            const user = await loginUser({
                username: email,
                password: password
            });
            if (user != null && user.hasOwnProperty('success')) {
                window.localStorage.setItem('isAuthenticated', true);
                navigate('/')
            } else {
                window.alert(user.message);
            }
            // console.log(user)
        } else {
            alert.classList.remove('d-none')
        }
    }

    return (
        <>
            <div className="content content-auth auth-middle">
                <div className="container">
                    <div className="media align-items-stretch justify-content-center ht-100p pos-relative">
                        <div className="media-body align-items-center d-none d-lg-flex">
                            <div className="mx-wd-600">
                                <img
                                    src="assets/img/img15.png"
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>

                        </div>
                        {/* media-body */}
                        <div className="sign-wrapper mg-lg-l-50 mg-xl-l-60">
                            <div className="wd-100p">
                                <h3 className="tx-color-01 mg-b-5">Sign In</h3>
                                <p className="tx-color-03 tx-16 mg-b-20">
                                    Welcome back! Please signin to continue.
                                </p>
                                <div id="alert-auth" className="alert alert-danger d-none" role="alert">
                                    Please enter email and password
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label>Email address</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter User Name"
                                            required
                                            id='auth-email'
                                        />
                                    </div>
                                    <div className="form-group">
                                        <div className="d-flex justify-content-between mg-b-5">
                                            <label className="mg-b-0-f">Password</label>
                                            {/* <a href="" className="tx-13">
                                                Forgot password?
                                            </a> */}
                                        </div>
                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="Enter your password"
                                            required
                                            id='auth-password'
                                        />
                                    </div>
                                    <button type='submit' className="btn btn-brand-02 btn-block">Log In</button>
                                </form>

                            </div>
                        </div>
                        {/* sign-wrapper */}
                    </div>
                    {/* media */}
                </div>
                {/* container */}
            </div>
            {/* content */}</>
        // <div>

        //     <button type='button' onClick={postLogin}>Login</button>
        // </div>
    )
}

export default Login;