import React from 'react'

const Dashboard = () => {
  return (
    <div className="content content-fixed">
      <div className="container pd-x-0 pd-lg-x-10 pd-xl-x-0">
        <div className="d-sm-flex align-items-center justify-content-between mg-b-20 mg-lg-b-25 mg-xl-b-30">
          <div>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb breadcrumb-style1 mg-b-10">
                <li className="breadcrumb-item">
                  <a href="#">Dashboard</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Website Analytics
                </li>
              </ol>
            </nav>
            <h4 className="mg-b-0 tx-spacing--1">Welcome to Dashboard</h4>
          </div>
        </div>
        <div className="row row-xs">
          <div className="col-lg-4 col-md-6 mg-t-10">
            <div className="card">
              <div className="card-body pd-y-20 pd-x-25">
                <div className="row row-sm">
                  <div className="col-12">
                    <h3 className="tx-normal tx-rubik tx-spacing--1 mg-b-5">3,605</h3>
                    <h6 className="tx-12 tx-semibold tx-uppercase tx-spacing-1 tx-primary mg-b-5">
                      Click Through
                    </h6>
                    <p className="tx-11 tx-color-03 mg-b-0">
                      No. of clicks to ad that consist of a single impression.
                    </p>
                  </div>
                </div>
              </div>
              {/* card-body */}
            </div>
            {/* card */}
          </div>

        </div>
      </div>
    </div>

  )
}

export default Dashboard;