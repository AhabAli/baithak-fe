import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import DayJS from 'react-dayjs';
import { instance } from '../../api/api'

const SchoolDetails = () => {
    const { id } = useParams()
    const [schoolData, setSchoolData] = useState({})
    let { state: locationState, pathname } = useLocation();

    useEffect(() => {
        if (locationState != null) {
            setSchoolData(locationState.schoolData)
        } else {
            (async () => {
                try {
                    const { data, status } = await instance.get(`/schools/${id}`);
                    if (status === 200) {
                        setSchoolData(data.data)
                    }
                } catch (error) {
                    console.log(error)
                    return null;
                }
            })();
        }

    }, [])

    return (

        <div className="content content-fixed">
            <div className="container pd-x-0 pd-lg-x-10 pd-xl-x-0">
                <div className="d-sm-flex align-items-center justify-content-between mg-b-20 mg-lg-b-25 mg-xl-b-30">
                    <div>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb breadcrumb-style1 mg-b-10">
                                <li className="breadcrumb-item">
                                    <Link to="/viewSchools">School Listing</Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    School Details
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h4 className="mg-b-0 tx-spacing--1">School Details</h4>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Name Of School:</h5>
                        <p className="card-text">{schoolData.NameOfSchool}</p>
                        <h5 className="card-title">Address:</h5>
                        <p className="card-text">{schoolData.Address}</p>
                        <h5 className="card-title">Area:</h5>
                        <p className="card-text">{schoolData.Area} {schoolData.SquareYardsOrKanal}</p>
                        <h5 className="card-title">Registered:</h5>
                        <p className="card-text">{schoolData.Registered}</p>
                        <h5 className="card-title">Ownership Status:</h5>
                        <p className="card-text">{schoolData.OwnerShipStatus}</p>
                        <h5 className="card-title">No. Of Rooms:</h5>
                        <p className="card-text">{schoolData.NoOfRooms}</p>
                        <h5 className="card-title">Status:</h5>
                        <p className="card-text">{schoolData.Status}</p>
                        <h5 className="card-title">Date Created:</h5>
                        <p className="card-text"> <DayJS format="MM-DD-YYYY">{schoolData.DateCreated}</DayJS></p>
                        <h5 className="card-title">Date Closed:</h5>
                        {
                            schoolData.DateClosed !== null ?
                                <p className="card-text"><DayJS format="MM-DD-YYYY">{schoolData.DateClosed}</DayJS></p>
                                : <p className="card-text">No Data Found</p>

                        }
                        <h5 className="card-title">Reason For Closure:</h5><p className="card-text">{schoolData.ReasonForClosure || "Data Not Found"}</p>
                        <h5 className="card-title">Date Data Entry:</h5>
                        <p className="card-text"> <DayJS format="MM-DD-YYYY">{schoolData.DateDataEntry}</DayJS></p>
                        <h5 className="card-title">Data Entry Operator:</h5>
                        <p className="card-text">{schoolData.DataEntryOperator || "No Data Found"}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SchoolDetails