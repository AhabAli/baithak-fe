import React, { useEffect, useState } from 'react'
import {
    Link, useLocation, useNavigate
} from "react-router-dom";
import { instance } from '../../api/api';


const getSchools = async () => {
    try {
        const { data, status } = await instance.get('/schools/all');
        if (status === 200) {
            return data;
        }
    } catch (error) {
        console.log(error)
        return null;
    }
}

const SchoolTable = () => {
    const [schools, setSchools] = useState([]);

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
            const schoolData = await getSchools();
            setSchools(schoolData.data);
        })();
    }, [])

    const _handleOnClick = (val) => {
        navigate('/schoolDetail/' + val.SchoolId, {
            state: {
                schoolData: val
            }
        });
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
                                    School Listing
                                </li>
                            </ol>
                        </nav>
                        <h4 className="mg-b-0 tx-spacing--1">School Listing</h4>
                    </div>


                </div>
                <div className="table-responsive">
                    <table className="table table-bordered mg-b-0">
                        <thead>

                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">School Name</th>
                                <th scope="col">Address</th>
                                <th scope="col">Owner Ship Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                schools ? schools.map((val, key) => (
                                    <tr key={String(key)}>
                                        <th scope="row">{val.SchoolId}</th>
                                        <td>{val.NameOfSchool}</td>
                                        <td>{val.Address}</td>
                                        <td>{val.OwnerShipStatus}</td>
                                        <td><button type='button' className='btn btn-primary' onClick={() => _handleOnClick(val)}>View</button></td>
                                        {/* <Link to={`/schoolDetail/${val.SchoolId}`} className='btn btn-primary'>View</Link> */}
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

export default SchoolTable