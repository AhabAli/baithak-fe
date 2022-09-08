import React from 'react'
import { useState } from 'react';
import {
    Link,
    useNavigate
} from "react-router-dom";

const StudentEntryForm = () => {
    const navigate = useNavigate();
    function handleCancel() {
        navigate('/students');
    }
    return (
        <div className="content content-fixed">
            <div className="container pd-x-0 pd-lg-x-10 pd-xl-x-0">
                <div className="d-sm-flex align-items-center justify-content-between mg-b-20 mg-lg-b-25 mg-xl-b-30">
                    <div>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb breadcrumb-style1 mg-b-10">
                                <li className="breadcrumb-item">
                                    <Link to="/students">Student Listing</Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    Students
                                </li>
                            </ol>
                        </nav>
                        <h4 className="mg-b-0 tx-spacing--1">Create A Student</h4>
                    </div>
                </div>
                <form>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput" className="d-block">
                            Student's Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Student's Name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput2" className="d-block">
                            GRNO
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter GRNO"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput" className="d-block">
                            Status Code
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Status Code"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput" className="d-block">
                            Father's Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Father's Name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput" className="d-block">
                            Guardian's Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Guardian's Name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput" className="d-block">
                            Guardian's Relation
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Guardian's Relation"
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
                        <label htmlFor="formGroupExampleInput4" className="d-block">
                            School Code
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Enter School Code"
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
                            UC
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter UC"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput3" className="d-block">
                            Taluka
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Taluka"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput3" className="d-block">
                            District
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter District"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput3" className="d-block">
                            Mother Tongue
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Mother Tongue"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput3" className="d-block">
                            Nationality
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Nationality"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput3" className="d-block">
                            Enter Religion
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Religion"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput5" className="d-block">
                            NIC Father
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Enter Father's NIC"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput5" className="d-block">
                            NIC Mother
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Enter Mother's NIC"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput11" className="d-block">
                            Mother's Qualifications
                        </label>
                        <textarea
                            className="form-control"
                            rows={4}
                            placeholder="Enter Mother's Qualifications"
                            defaultValue={""}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput12" className="d-block">
                            Father's Qualifications
                        </label>
                        <textarea
                            className="form-control"
                            rows={4}
                            placeholder="Enter Father's Qualifications"
                            defaultValue={""}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput3" className="d-block">
                            Father's Occupation
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Father's Occupation"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput3" className="d-block">
                            Mother's Occupation
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Mother's Occupation"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput3" className="d-block">
                            Present Address
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Present Address"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput3" className="d-block">
                            Permanent Address
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Permanent Address"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput3" className="d-block">
                            Parent Education Highest Level
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Parent Education Highest Level"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput7" className="d-block">
                            Is Nazra Done?
                        </label>
                        <select className="custom-select">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput10" className="d-block">
                            Average Monthly Income
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Enter Average Monthly Income"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput12" className="d-block">
                            Dependents
                        </label>
                        <textarea
                            className="form-control"
                            rows={4}
                            placeholder="Enter Dependents"
                            defaultValue={""}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput10" className="d-block">
                            Class ID
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Class ID"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput10" className="d-block">
                            Date of Admission
                        </label>
                        <input
                            type="date"
                            className="form-control"
                            placeholder="Enter Date of Admission"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput10" className="d-block">
                            Old School Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Old School Name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput10" className="d-block">
                            Old Class Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Old Class Name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput10" className="d-block">
                            Reason For Leaving
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Reason For Leaving"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput10" className="d-block">
                            Parent's Cell No.
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Enter Parent's Cell No."
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput10" className="d-block">
                            Parent's Whatsapp No.
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Enter Parent's Whatsapp No."
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput10" className="d-block">
                            Current Session
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Enter Current Session"
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

export default StudentEntryForm