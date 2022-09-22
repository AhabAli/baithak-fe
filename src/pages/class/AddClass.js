import React from 'react'
import { useState } from 'react';
import {
    Link,
    useNavigate
} from "react-router-dom";
import { instance } from '../../api/api';

const addClass = async (data) => {
    try {
        const { data: reponse, status } = await instance.post('/classes', data);
        if (status === 200) {
            return reponse;
        }
    } catch (error) {
        console.log(error)
        return null;
    }
}

const AddClass = () => {
    const [formData, setFormData] = useState({
        className: ''
    });
    const navigate = useNavigate();
    function handleCancel() {
        navigate('/viewClass');
    }
    const _SubmitForm = async (e) => {
        e.preventDefault();
        const data = {
            className: formData.className
        }
        const newClass = await addClass(data);

        if (newClass.hasOwnProperty('success')) {
            navigate('/viewClass', {
                state: {
                    success: true,
                    status: "Class Added Successfully"
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
                                    <Link to="/viewSyllabus">Class Listing</Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    Add Class
                                </li>
                            </ol>
                        </nav>
                        <h4 className="mg-b-0 tx-spacing--1">Create A Class</h4>
                    </div>
                </div>
                <form onSubmit={_SubmitForm}>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput" className="d-block">
                            Class Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Class Name"
                            name="className"
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

export default AddClass