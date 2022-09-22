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
        username: null,
        password: null,
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
    }, [])

    const _handleRegionChange = (e) => {
        setSchool(region[e].School)
    }
    const _handleOnChange = (e) => {
        setFormData(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
        if (e.target.name === 'clusterId') {
            setSchool(prevState => {
                return region.filter((item) => item.RegionId === e.target.value)[0].School
            })
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
                <form autoComplete="off">

                    {/* ACCESS LEVEL */}
                    <div className="form-group">
                        <label htmlFor="accessLevel" className="d-block">
                            Access Level
                        </label>
                        <select className="custom-select"
                            name="accessLevel"
                            value={formData.accessLevel}
                            onChange={_handleOnChange}
                            defaultValue="">
                            <option value="" disabled>Select Access Level</option>
                            <option value="active">REGION</option>
                            <option value="inactive">SCHOOL</option>
                            <option value="inactive">STAFF</option>
                            <option value="inactive">TEACHER</option>
                            <option value="inactive">ADMIN</option>
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
                            value={formData.roleId}
                            onChange={_handleOnChange}
                            defaultValue="">

                            <option value="" disabled>Select Role</option>
                            {
                                roles ? roles.map((val, key) => (
                                    <option key={key} value={val.RoleId}>{val.RoleName}</option>
                                )) : ""
                            }
                        </select>
                    </div>

                    {/* REGION */}
                    <div className="form-group">
                        <label htmlFor="clusterId" className="d-block">
                            Select Region
                        </label>
                        <select className="custom-select" name="clusterId" onChange={_handleOnChange} defaultValue="">
                            <option value="" disabled>Select Region</option>
                            {
                                region ? region.map((val, key) => (
                                    <option key={key} value={val.RegionId}>{val.RegionName}</option>
                                )) : ""
                            }
                        </select>
                    </div>

                    {/* SCHOOL */}
                    <div className="form-group">
                        <label htmlFor="schoolId" className="d-block">
                            Select School
                        </label>
                        <select className="custom-select" defaultValue=""
                            name="schoolId"
                            value={formData.schoolId}
                            onChange={_handleOnChange}>
                            <option value="" disabled>Select School</option>
                            {
                                school ? school.map((val, key) => (
                                    <option key={key}>{val.NameOfSchool}</option>
                                )) : ""
                            }
                        </select>
                    </div>

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
                    <button className="btn btn-secondary" type="cancel" onClick={handleCancel}>
                        Cancel
                    </button>
                </form>

            </div >
        </div >
    )
}

export default CreateUser