import React from 'react'
import { useState } from 'react';
import {
    Link,
    useNavigate
} from "react-router-dom";

const AddSyllabus = () => {
    const navigate = useNavigate();
    function handleCancel() {
        navigate('/viewSyllabus');
    }
    return (
        <div className="content content-fixed">
            <div className="container pd-x-0 pd-lg-x-10 pd-xl-x-0">
                <div className="d-sm-flex align-items-center justify-content-between mg-b-20 mg-lg-b-25 mg-xl-b-30">
                    <div>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb breadcrumb-style1 mg-b-10">
                                <li className="breadcrumb-item">
                                    <Link to="/viewSyllabus">Syllabus Listing</Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    Add Syllabus
                                </li>
                            </ol>
                        </nav>
                        <h4 className="mg-b-0 tx-spacing--1">Create A Syllabus</h4>
                    </div>
                </div>
                <form>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput" className="d-block">
                            Select School
                        </label>
                        <select className="custom-select">
                            <option value="active">Active</option>
                            <option value="inactive">InActive</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput" className="d-block">
                            Select Subject
                        </label>
                        <select className="custom-select">
                            <option value="active">Active</option>
                            <option value="inactive">InActive</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput" className="d-block">
                            Proposed Completion Date
                        </label>
                        <input
                            type="date"
                            className="form-control"
                            placeholder="Proposed Completion Date"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput" className="d-block">
                            Chapter Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Chapter Name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput" className="d-block">
                            Status
                        </label>
                        <select className="custom-select">
                            <option value="active">Active</option>
                            <option value="inactive">InActive</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput" className="d-block">
                            Completion Date
                        </label>
                        <input
                            type="date"
                            className="form-control"
                            placeholder="Actual Completion Date"
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

export default AddSyllabus