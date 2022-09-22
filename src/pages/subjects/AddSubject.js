import React from 'react'
import { useState } from 'react';
import {
    Link,
    useNavigate
} from "react-router-dom";
import { instance } from '../../api/api';

const addSubjects = async (data) => {
    try {
        const { data: reponse, status } = await instance.post('/subjects', data);
        if (status === 200) {
            return reponse;
        }
    } catch (error) {
        console.log(error)
        return null;
    }
}

const AddSubject = () => {
    const [formData, setFormData] = useState({
        subjectName: ''
    });
    const navigate = useNavigate();

    function handleCancel() {
        navigate('/viewSubjects');
    }
    const _SubmitForm = async (e) => {
        e.preventDefault();
        const data = {
            subjectName: formData.subjectName
        }
        const subject = await addSubjects(data);

        if (subject.hasOwnProperty('success')) {
            navigate('/viewSubjects', {
                state: {
                    success: true,
                    status: "Subject Added Successfully"
                }
            });
        } else {
            alert('An Error Has Occured')
        }
    }
    const _handleOnChange = (e) => {
        setFormData(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }
    return (
        <div className="content content-fixed">
            <div className="container pd-x-0 pd-lg-x-10 pd-xl-x-0">
                <div className="d-sm-flex align-items-center justify-content-between mg-b-20 mg-lg-b-25 mg-xl-b-30">
                    <div>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb breadcrumb-style1 mg-b-10">
                                <li className="breadcrumb-item">
                                    <Link to="/viewSubjects">Subject Listing</Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    Add Subject
                                </li>
                            </ol>
                        </nav>
                        <h4 className="mg-b-0 tx-spacing--1">Create A Subject</h4>
                    </div>
                </div>
                <form onSubmit={_SubmitForm}>
                    <div className="form-group">
                        <label htmlFor="subjectName" className="d-block">
                            Subject Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Subject Name"
                            name="subjectName"
                            value={formData.subjectName}
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

export default AddSubject