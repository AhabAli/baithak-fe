import React, { useEffect, useState } from 'react'
import {
    Link, useLocation, useNavigate
} from "react-router-dom";
import { instance } from '../../api/api';


const getSubjects = async () => {
    try {
        const { data, status } = await instance.get('/subjects');
        if (status === 200) {
            return data;
        }
    } catch (error) {
        console.log(error)
        return null;
    }
}

const ViewSubjects = () => {
    const [subjects, setSetSubjects] = useState([]);

    let { state: locationState, pathname } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (locationState != null && locationState.hasOwnProperty('success')) {
            alert(locationState.status);
            navigate(pathname, {
                state: {}
            })
        }
        (async () => {
            const subjectData = await getSubjects();
            setSetSubjects(subjectData.data);
        })();
    }, [])

    const _handleDelete = (e, id) => {
        e.preventDefault()
        if (window.confirm('Are you sure you want to delete?')) {
            (async () => {
                try {
                    const { data, status } = await instance.delete(`/subjects/${id}`);
                    if (status === 200) {
                        setSetSubjects(prevState => {
                            return prevState.filter(item => item.ID !== id);
                        })
                        console.log("Subject Deleted", data)
                    }

                } catch (error) {
                    console.log(error)
                    return null;
                }
            })();
        } else {
            console.log("operation cancelled")
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
                                    Subjects
                                </li>
                            </ol>
                        </nav>
                        <h4 className="mg-b-0 tx-spacing--1">Subject Listing</h4>
                    </div>
                    <div className="d-md-block d-none">
                        <Link className='btn btn-sm pd-x-15 btn-primary btn-uppercase mg-l-5' to="/addSubject">
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
                            </svg>Add Subject</Link>
                    </div>

                </div>
                <div className="table-responsive">
                    <table className="table table-bordered mg-b-0">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Subject Name</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                subjects ? subjects.map((val, key) => (
                                    <tr key={String(key)}>
                                        <th scope="row">{val.ID}</th>
                                        <td>{val.SubjectName}</td>
                                        <td><button type='button' className='btn btn-danger' onClick={(e) => _handleDelete(e, val.ID)}>Delete</button></td>
                                    </tr>
                                )) : null
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )

}

export default ViewSubjects