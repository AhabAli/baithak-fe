import React from 'react'
import { useState, useEffect } from 'react';
import {
    Link,
    useNavigate
} from "react-router-dom";
import { instance } from '../../api/api';

const getClasses = async () => {
    try {
        const { data, status } = await instance.get('/classes');
        if (status === 200) {
            return data;
        }
    } catch (error) {
        console.log(error)
        return null;
    }
}
const addStudent = async (data) => {
    try {
        const { data: reponse, status } = await instance.post('/students', data);
        if (status === 200) {
            return reponse;
        }
    } catch (error) {
        console.log(error)
        return null;
    }
}
const StudentEntryForm = () => {
    const [classes, setClasses] = useState([]);
    const [formData, setFormData] = useState({
        GRNO: null,
        StatusCode: null,
        StudentName: null,
        FathersName: null,
        GuardianName: "",
        GuardianRelation: "",
        Gender: null,
        DOB: null,
        School_code: null,
        Address: null,
        UC: null,
        Taluka: null,
        District: null,
        MotherTongue: null,
        Ntionality: null,
        Religion: null,
        NIC_Father: null,
        NIC_Mother: null,
        NIC_Guardian: null,
        Mother_qualification: null,
        Father_Qualification: null,
        Father_Occupation: null,
        Mother_Occupation: null,
        Present_Address: null,
        PermanentAddress: null,
        Parent_Education_Highest_Level: null,
        IsNazra_Done: null,
        Average_Monthly_Income: null,
        Dependents: null,
        ClassID: null,
        Date_Of_Addmission: null,
        Old_School_Name: null,
        Old_ClassName: null,
        Reason_Leaved: null,
        Parent_Cell_No: null,
        Parent_Whatssapp_No: null,
        CurrentSession: null
    });
    const navigate = useNavigate();
    function handleCancel() {
        navigate('/students');
    }
    useEffect(() => {

        (async () => {
            const classData = await getClasses();
            setClasses(classData.data);
        })();
    }, [])

    const _handleOnChange = (e) => {
        setFormData(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }
    const _SubmitForm = async (e) => {
        e.preventDefault();

        const newStudent = await addStudent(formData);
        console.log(newStudent)
        if (newStudent.hasOwnProperty('success')) {
            navigate('/students', {
                state: {
                    success: true,
                    status: "Student Added Successfully"
                }
            });
        } else {
            alert('An Error Has Occured')
        }
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
                <form onSubmit={_SubmitForm}>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput" className="d-block">
                            Student's Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Student's Name"
                            name="StudentName"
                            onChange={_handleOnChange}
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
                            name="GRNO"
                            onChange={_handleOnChange}
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
                            name="StatusCode"
                            onChange={_handleOnChange}
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
                            name="FathersName"
                            onChange={_handleOnChange}
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
                            name="GuardianName"
                            onChange={_handleOnChange}
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
                            name="GuardianRelation"
                            onChange={_handleOnChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput9" className="d-block">
                            Gender
                        </label>
                        <select className="custom-select"
                            name="Gender"
                            onChange={_handleOnChange}
                            defaultValue=""
                        >
                            <option value="" disabled>Select Gender</option>
                            <option value="MALE">Male</option>
                            <option value="FEMALE">Female</option>
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
                            name="DOB"
                            onChange={_handleOnChange}
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
                            name="School_code"
                            onChange={_handleOnChange}
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
                            name="Address"
                            onChange={_handleOnChange}
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
                            name="UC"
                            onChange={_handleOnChange}
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
                            name="Taluka"
                            onChange={_handleOnChange}
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
                            name="District"
                            onChange={_handleOnChange}
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
                            name="MotherTongue"
                            onChange={_handleOnChange}
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
                            name="Ntionality"
                            onChange={_handleOnChange}
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
                            name="Religion"
                            onChange={_handleOnChange}
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
                            name="NIC_Father"
                            onChange={_handleOnChange}
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
                            name="NIC_Mother"
                            onChange={_handleOnChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput5" className="d-block">
                            Guardian's NIC
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Enter Guardian's NIC"
                            name="NIC_Guardian"
                            onChange={_handleOnChange}
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
                            name="Mother_qualification"
                            onChange={_handleOnChange}
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
                            name="Father_Qualification"
                            onChange={_handleOnChange}
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
                            name="Father_Occupation"
                            onChange={_handleOnChange}
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
                            name="Mother_Occupation"
                            onChange={_handleOnChange}
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
                            name="Present_Address"
                            onChange={_handleOnChange}
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
                            name="PermanentAddress"
                            onChange={_handleOnChange}
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
                            name="Parent_Education_Highest_Level"
                            onChange={_handleOnChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput7" className="d-block">
                            Is Nazra Done?
                        </label>
                        <select className="custom-select"
                            name="IsNazra_Done"
                            onChange={_handleOnChange}
                            defaultValue=""
                        >
                            <option value="">Select An Option</option>
                            <option value="1">Yes</option>
                            <option value="2">No</option>
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
                            name="Average_Monthly_Income"
                            onChange={_handleOnChange}
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
                            name="Dependents"
                            onChange={_handleOnChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput10" className="d-block">
                            Class Name
                        </label>
                        <select
                            className="custom-select"
                            defaultValue=""
                            name="ClassID"
                            onChange={_handleOnChange}
                        >
                            <option value="" disabled>
                                Select Class
                            </option>
                            {
                                classes ? classes.map((val, key) => (
                                    <option value={val.ID}>{val.ClassName}</option>
                                )) : null
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput10" className="d-block">
                            Date of Admission
                        </label>
                        <input
                            type="date"
                            className="form-control"
                            placeholder="Enter Date of Admission"
                            name="Date_Of_Addmission"
                            onChange={_handleOnChange}
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
                            name="Old_School_Name"
                            onChange={_handleOnChange}
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
                            name="Old_ClassName"
                            onChange={_handleOnChange}
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
                            name="Reason_Leaved"
                            onChange={_handleOnChange}
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
                            name="Parent_Cell_No"
                            onChange={_handleOnChange}
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
                            name="Parent_Whatssapp_No"
                            onChange={_handleOnChange}
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
                            name="CurrentSession"
                            onChange={_handleOnChange}
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