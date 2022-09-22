import React from 'react'
import {
    Link
} from "react-router-dom";

const TeachersTable = () => {
    return (
        <div className="content content-fixed">
            <div className="container pd-x-0 pd-lg-x-10 pd-xl-x-0">
                <div className="d-sm-flex align-items-center justify-content-between mg-b-20 mg-lg-b-25 mg-xl-b-30">
                    <div>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb breadcrumb-style1 mg-b-10">
                                <li className="breadcrumb-item">
                                    <Link to="/">Dashboard</Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    Teachers
                                </li>
                            </ol>
                        </nav>
                        <h4 className="mg-b-0 tx-spacing--1">Staff Listing</h4>
                    </div>
                    <div className="d-md-block d-none">
                        <Link className='btn btn-sm pd-x-15 btn-primary btn-uppercase mg-l-5' to="/staffEntryForm">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-file wd-10 mg-r-5"
                            >
                                <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                                <polyline points="13 2 13 9 20 9" />
                            </svg>Add Staff</Link>
                    </div>

                </div>
                <div className="table-responsive">
                    <table className="table table-bordered mg-b-0">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Teacher Name</th>
                                <th scope="col">Designation</th>
                                <th scope="col">Address</th>
                                <th scope="col">Class ID</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Cell No.</th>
                                <th scope="col">Email</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Adrian Monino</td>
                                <td>Head Teacher</td>
                                <td>Lorem Ipsum</td>
                                <td>0987</td>
                                <td>Male</td>
                                <td>0300526456</td>
                                <td>teacher@teacher.com</td>
                                <td>Active</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Adrian Monino</td>
                                <td>Head Teacher</td>
                                <td>Lorem Ipsum</td>
                                <td>0987</td>
                                <td>Male</td>
                                <td>0300526456</td>
                                <td>teacher@teacher.com</td>
                                <td>Active</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Adrian Monino</td>
                                <td>Head Teacher</td>
                                <td>Lorem Ipsum</td>
                                <td>0987</td>
                                <td>Male</td>
                                <td>0300526456</td>
                                <td>teacher@teacher.com</td>
                                <td>Active</td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Adrian Monino</td>
                                <td>Head Teacher</td>
                                <td>Lorem Ipsum</td>
                                <td>0987</td>
                                <td>Male</td>
                                <td>0300526456</td>
                                <td>teacher@teacher.com</td>
                                <td>Active</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default TeachersTable