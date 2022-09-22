import React from 'react'
import { useState } from 'react';
import {
  Link,
  useNavigate
} from "react-router-dom";

const Variables = () => {
  const navigate = useNavigate();
  function handleCancel() {
    navigate('/');
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
                  Create Variable
                </li>
              </ol>
            </nav>
            <h4 className="mg-b-0 tx-spacing--1">Create A Variable</h4>
          </div>
        </div>
        <form>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput" className="d-block">
              Select School
            </label>
            <select className="custom-select">
              <option value="active">School 1</option>
              <option value="inactive">School 2</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput" className="d-block">
              Category Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Category Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput" className="d-block">
              Vairables
            </label>
            <textarea class="form-control" rows="5" placeholder="Enter Variables"></textarea>
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

export default Variables