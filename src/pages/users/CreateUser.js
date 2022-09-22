import React from 'react'
import { useState, useEffect } from 'react';
import {
    Link,
    useNavigate
} from "react-router-dom";
import { instance } from '../../api/api';

const getRoles = async (data) => {
    try {
        const { data: reponse, status } = await instance.get('/roles');
        if (status === 200) {
            return reponse;
        }
    } catch (error) {
        console.log(error)
        return null;
    }
}
const getRegion = async (data) => {
    try {
        const { data: reponse, status } = await instance.get('/clusters/all');
        if (status === 200) {
            return reponse;
        }
    } catch (error) {
        console.log(error)
        return null;
    }
}
const addUser = async (data) => {
    try {
        const { data: reponse, status } = await instance.post('/users', data);
        if (status === 200) {
            return reponse;
        }
    } catch (error) {
        console.log(error)
        return null;
    }
}


const CreateUser = () => {
    const navigate = useNavigate();
    const [roles, setRoles] = useState([]);
    const [region, setRegion] = useState([]);
    const [school, setSchool] = useState([]);
    const [formData, setFormData] = useState({
        schoolId: null,
        clusterId: null,
        staffId: null,
        teacherId: null,
        username: "",
        password: "",
        accessLevel: null,
        roleId: null
    });
    function handleCancel() {
        navigate('/');
    }

    useEffect(() => {
        (async () => {
            const roleData = await getRoles();
            const regionData = await getRegion();
            setRoles(roleData.data);
            setRegion(regionData.data);
        })();
    }, []);
    const _handleOnChange = (e) => {
        setFormData(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
        if (e.target.name === 'clusterId') {
            setSchool((prevState) => {
                return region.filter(
                    (item) => item.RegionId === Number(e.target.value)
                )[0].School;
            });
        }
    }
    const _renderRegionSelect = () => {
        if (
            formData.accessLevel === "REGION" ||
            formData.accessLevel === "SCHOOL"
        ) {
            return (
                <div className="form-group">
                    <label htmlFor="clusterId" className="d-block">
                        Select Region
                    </label>
                    <select
                        className="custom-select"
                        name="clusterId"
                        onChange={_handleOnChange}
                    >
                        <option value="">Select Region</option>
                        {region
                            ? region.map((val, key) => (
                                <option key={key} value={val.RegionId}>
                                    {val.RegionName}
                                </option>
                            ))
                            : ""}
                    </select>
                </div>
            );
        }
        return null;
    }
    const _renderSchoolSelect = () => {
        if (formData.accessLevel === 'SCHOOL') {
            return (
                <div className="form-group">
                    <label htmlFor="schoolId" className="d-block">
                        Select School
                    </label>
                    <select
                        className="custom-select"
                        name="schoolId"
                        onChange={_handleOnChange}
                        disabled={school.length === 0}
                    >
                        <option value="">Select School</option>
                        {school
                            ? school.map((val, key) => (
                                <option key={key} value={val.SchoolId}>
                                    {val.NameOfSchool}
                                </option>
                            ))
                            : ""}
                    </select>
                </div>
            );
        }
        return null
    }
    const _SubmitForm = async (e) => {
        e.preventDefault();

        const newUser = await addUser(formData);
        console.log(newUser)
        if (newUser.hasOwnProperty('success')) {
            navigate('/', {
                state: {
                    success: true,
                    status: "User Added Successfully"
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
                                    <Link to="/">Dashboard</Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    Add User
                                </li>
                            </ol>
                        </nav>
                        <h4 className="mg-b-0 tx-spacing--1">Create A User</h4>
                    </div>
                </div>
                <form autoComplete="off" onSubmit={_SubmitForm}>
                    {/* ACCESS LEVEL */}
                    <div className="form-group">
                        <label htmlFor="accessLevel" className="d-block">
                            Access Level
                        </label>
                        <select
                            className="custom-select"
                            name="accessLevel"
                            onChange={_handleOnChange}
                        >
                            <option value="">
                                Select Access Level
                            </option>
                            <option value="REGION">REGION</option>
                            <option value="SCHOOL">SCHOOL</option>
                            <option value="STAFF">STAFF</option>
                            <option value="TEACHER">TEACHER</option>
                            <option value="ADMIN">ADMIN</option>
                        </select>
                    </div>

                    {/* ROLES */}
                    <div className="form-group">
                        <label htmlFor="roleId" className="d-block">
                            Select Role
                        </label>
                        <select
                            className="custom-select"
                            name="roleId"
                            onChange={_handleOnChange}
                        >
                            <option value="" disabled>
                                Select Role
                            </option>
                            {roles
                                ? roles.map((val, key) => (
                                    <option key={key} value={val.RoleId}>
                                        {val.RoleName}
                                    </option>
                                ))
                                : ""}
                        </select>
                    </div>

                    {/* REGION */}
                    {_renderRegionSelect()}

                    {/* SCHOOL */}
                    {_renderSchoolSelect()}

                    {/* USERNAME */}
                    <div className="form-group">
                        <label htmlFor="username" className="d-block">
                            User Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter User Name"
                            autoComplete="off"
                            name="username"
                            value={formData.username}
                            onChange={_handleOnChange}
                        />
                    </div>

                    {/* Password */}
                    <div className="form-group">
                        <label htmlFor="password" className="d-block">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter Password"
                            autoComplete="off"
                            name="password"
                            value={formData.password}
                            onChange={_handleOnChange}
                        />
                    </div>

                    <button className="btn btn-primary mr-2" type="submit">
                        Submit
                    </button>
                    <button
                        className="btn btn-secondary"
                        type="cancel"
                        onClick={handleCancel}
                    >
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CreateUser