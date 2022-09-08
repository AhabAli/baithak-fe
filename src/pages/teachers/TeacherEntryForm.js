import React from 'react'
import { useState } from 'react';
import {
    Link,
    useNavigate
} from "react-router-dom";

const TeacherEntryForm = () => {
    const navigate = useNavigate();
    function handleCancel() {
        navigate('/teachers');
    }
    return (
        <div className="content content-fixed">
            <div className="container pd-x-0 pd-lg-x-10 pd-xl-x-0">
                <div className="d-sm-flex align-items-center justify-content-between mg-b-20 mg-lg-b-25 mg-xl-b-30">
                    <div>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb breadcrumb-style1 mg-b-10">
                                <li className="breadcrumb-item">
                                    <Link to="/teachers">Teacher Listing</Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    Teachers
                                </li>
                            </ol>
                        </nav>
                        <h4 className="mg-b-0 tx-spacing--1">Create A Teacher</h4>
                    </div>
                </div>
                <form>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput" className="d-block">
                            Teacher Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Teachers Name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput2" className="d-block">
                            Designation
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Designation"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput3" className="d-block">
                            Address
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Address"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput3" className="d-block">
                            Class ID
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Class ID"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput4" className="d-block">
                            Cell Number
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Enter Cellphone Number"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput5" className="d-block">
                            Whatsapp Number
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Enter Whatsapp Number"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput6" className="d-block">
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter Email Address"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput7" className="d-block">
                            Status
                        </label>
                        <select className="custom-select">
                            <option value="active">Active</option>
                            <option value="inactive">InActive</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput8" className="d-block">
                            DOB
                        </label>
                        <input
                            type="date"
                            className="form-control"
                            placeholder="Select DOB"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput9" className="d-block">
                            Gender
                        </label>
                        <select className="custom-select">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput10" className="d-block">
                            Home Phone Number
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Enter Home Number"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput11" className="d-block">
                            Qualifications
                        </label>
                        <textarea
                            className="form-control"
                            rows={4}
                            placeholder="Enter Qualifications"
                            defaultValue={""}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput12" className="d-block">
                            Professional Qualifications
                        </label>
                        <textarea
                            className="form-control"
                            rows={4}
                            placeholder="Enter Professional Qualifications"
                            defaultValue={""}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput13" className="d-block">
                            Years Of Experience
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Enter Years Of Exp."
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput14" className="d-block">
                            Basic Salary
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Enter Basic Salary"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput15" className="d-block">
                            Allowances
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Enter Allowances"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput16" className="d-block">
                            Total Salary
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Enter Total Salary"
                        />
                    </div>

                    <button className="btn btn-primary mr-2" type="submit">
                        Submit
                    </button>
                    <button className="btn btn-secondary" type="cancel" onClick={handleCancel}>
                        Cancel
                    </button>
                </form>

            </div>
        </div>
    )
}

export default TeacherEntryForm