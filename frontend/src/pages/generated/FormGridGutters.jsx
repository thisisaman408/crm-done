import React from 'react';

const FormGridGutters = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from form-grid-gutters.html */}
            {/* Page Header */}
                <div className="mb-4">
                    <h4 className="mb-1">Grid System</h4>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0 p-0">
                            <li className="breadcrumb-item"><a href="/index">Home</a></li>
                            <li className="breadcrumb-item"><a href="form-grid-gutters.html#">Forms</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Grid System</li>
                        </ol>
                    </nav>
                </div>
                {/* End Page Header */}

                {/* start row */}
                <div className="row">

                    <div className="col-xl-6 d-flex">
                        <div className="card flex-fill">
                            <div className="card-header">
                                <h5 className="card-title">Form Grid</h5>
                            </div>
                            <div className="card-body">

                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">First Name</label>
                                        <input type="text" className="form-control" placeholder="First Name" />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Last Name</label>
                                        <input type="text" className="form-control" placeholder="Last Name" />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Address</label>
                                        <div className="row">
                                            <div className="col-xl-12 mb-3">
                                                <input type="text" className="form-control" placeholder="Street" />
                                            </div>
                                            <div className="col-xl-12 mb-3">
                                                <input type="text" className="form-control" placeholder="Landmark" />
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <input type="text" className="form-control" placeholder="City" />
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <select id="inputState1" className="form-select">
                                                    <option selected="">State</option>
                                                    <option>...</option>
                                                </select>
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <input type="text" className="form-control" placeholder="Postal/Zip code" />
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <select id="inputCountry" className="form-select">
                                                    <option selected="">Country</option>
                                                    <option>...</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <div className="row">
                                            <div className="col-xl-12 mb-3">
                                                <label className="form-label">Email</label>
                                                <input type="email" className="form-control" placeholder="Email" />
                                            </div>
                                            <div className="col-xl-12 mb-3">
                                                <label className="form-label">DOB</label>
                                                <input type="date" className="form-control" />
                                            </div>
                                            <div className="col-xl-12 mb-3">
                                                <div className="row">
                                                    <label className="form-label mb-1">Maritial Status</label>
                                                    <div className="col-xl-6">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value=""
                                                                id="status-married" required="" />
                                                            <label className="form-check-label" htmlFor="status-married">
                                                                Married
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value=""
                                                                id="status-unmarried" required="" />
                                                            <label className="form-check-label" htmlFor="status-unmarried">
                                                                Single
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Contact Number</label>
                                        <input type="number" className="form-control" placeholder="Phone Number" />
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Alternative Contact</label>
                                        <input type="number" className="form-control" placeholder="Phone Number" />
                                    </div>

                                    <div className="col-md-12">
                                        <div className="form-check mb-3">
                                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                                            <label className="form-check-label" htmlFor="gridCheck">
                                                Check me out
                                            </label>
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <button type="submit" className="btn btn-primary">Sign in</button>
                                    </div>

                                </div>

                            </div> {/* end card-body */}
                        </div> {/* end card */}
                    </div> {/* end col */}

                    <div className="col-xl-6 d-flex">
                        <div className="card flex-fill">
                            <div className="card-header">
                                <h5 className="card-title">Gutters</h5>
                            </div>
                            <div className="card-body pt-0">

                                {/* Start Form */}
                                <form className="row g-3 mt-0">
                                    <div className="col-md-6">
                                        <label className="form-label">First Name</label>
                                        <input type="text" className="form-control" placeholder="First Name" />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Last Name</label>
                                        <input type="text" className="form-control" placeholder="Last Name" />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="inputEmail4" />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="inputPassword4" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="inputPassword4" />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="inputAddress" className="form-label">Address</label>
                                        <input type="text" className="form-control" id="inputAddress" />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                                        <input type="text" className="form-control" id="inputAddress2" />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="inputCity" className="form-label">City</label>
                                        <input type="text" className="form-control" id="inputCity" />
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="inputState" className="form-label">State</label>
                                        <select id="inputState" className="form-select">
                                            <option selected="">Choose...</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                    <div className="col-md-2">
                                        <label htmlFor="inputZip" className="form-label">Zip</label>
                                        <input type="text" className="form-control" id="inputZip" />
                                    </div>
                                    <div className="col-12">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="gridCheck3" />
                                            <label className="form-check-label" htmlFor="gridCheck3">
                                                Check me out
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="btn btn-primary">Sign in</button>
                                    </div>
                                </form>
                                {/* End Form */}

                            </div> {/* end card-body */}
                        </div> {/* end card */}
                    </div> {/* end col */}

                </div>
                {/* end row */}
        </div>
    );
};

export default FormGridGutters;
