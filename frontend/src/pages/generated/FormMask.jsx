import React from 'react';

const FormMask = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from form-mask.html */}
            {/* Page Header */}
                <div className="mb-4">
                    <h4 className="mb-1">Form Inputmask</h4>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0 p-0">
                            <li className="breadcrumb-item"><a href="/index">Home</a></li>
                            <li className="breadcrumb-item"><a href="form-mask.html#">Forms</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Form Inputmask</li>
                        </ol>
                    </nav>
                </div>
                {/* End Page Header */}

                <div className="card">
                    <div className="card-header">
                        <h5 className="card-title">Form Inputmask</h5>
                    </div>
                    <div className="card-body pb-0">
                        <p className="text-muted">A JavaScript plugin for applying input masks to form fields and HTML
                            elements</p>

                        {/* start row */}
                        <div className="row">

                            <div className="col-md-6">
                                <form action="form-mask.html#">
                                    <div className="mb-3">
                                        <label className="form-label">Date</label>
                                        <input type="text" className="form-control" data-toggle="input-mask"
                                            data-mask-format="00/00/0000" />
                                        <span className="fs-13 text-muted">e.g "DD/MM/YYYY"</span>
                                        <p className="mt-1">Add attribute
                                            <code>data-toggle="input-mask" data-mask-format="00/00/0000"</code>
                                        </p>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Hour</label>
                                        <input type="text" className="form-control" data-toggle="input-mask"
                                            data-mask-format="00:00:00" />
                                        <span className="fs-13 text-muted">e.g "HH:MM:SS"</span>
                                        <p className="mt-1">Add attribute
                                            <code>data-toggle="input-mask" data-mask-format="00:00:00"</code>
                                        </p>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Date & Hour</label>
                                        <input type="text" className="form-control" data-toggle="input-mask"
                                            data-mask-format="00/00/0000 00:00:00" />
                                        <span className="fs-13 text-muted">e.g "DD/MM/YYYY HH:MM:SS"</span>
                                        <p className="mt-1">Add attribute
                                            <code>data-toggle="input-mask" data-mask-format="00/00/0000 00:00:00"</code>
                                        </p>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">ZIP Code</label>
                                        <input type="text" className="form-control" data-toggle="input-mask"
                                            data-mask-format="00000-000" />
                                        <span className="fs-13 text-muted">e.g "xxxxx-xxx"</span>
                                        <p className="mt-1">Add attribute
                                            <code>data-toggle="input-mask" data-mask-format="00000-000"</code>
                                        </p>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">SSN field 1</label>
                                        <input type="text" id="ssn" className="form-control" data-toggle="input-mask"
                                            data-mask-format="000-00-0000" />
                                        <span className="form-text text-muted">e.g "999-99-9999"</span>
                                        <p className="mt-1">Add attribute
                                            <code>data-toggle="input-mask" data-mask-format="000-00-0000"</code>
                                        </p>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Crazy Zip Code</label>
                                        <input type="text" className="form-control" data-toggle="input-mask"
                                            data-mask-format="0-00-00-00" />
                                        <span className="fs-13 text-muted">e.g "x-xx-xx-xx"</span>
                                        <p className="mt-1">Add attribute
                                            <code>data-toggle="input-mask" data-mask-format="0-00-00-00"</code>
                                        </p>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Money</label>
                                        <input type="text" className="form-control" data-toggle="input-mask"
                                            data-mask-format="000.000.000.000.000,00" data-reverse="true" />
                                        <span className="fs-13 text-muted">e.g "Your money"</span>
                                        <p className="mt-1">Add attribute
                                            <code>data-mask-format="000.000.000.000.000,00" data-reverse="true"</code>
                                        </p>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Percent</label>
                                        <input type="text" className="form-control" data-toggle="input-mask"
                                            data-mask-format="00%" data-reverse="true" />
                                        <span className="fs-13 text-muted">e.g "99%"</span>
                                        <p className="mt-1">Add attribute
                                            <code>data-toggle="input-mask" data-mask-format="00%" data-reverse="true"</code>
                                        </p>
                                    </div>
                                </form>
                            </div> {/* end col */}

                            <div className="col-md-6">
                                <form action="form-mask.html#">
                                    <div className="mb-3">
                                        <label className="form-label">Telephone</label>
                                        <input type="text" className="form-control" data-toggle="input-mask"
                                            data-mask-format="0000-0000" />
                                        <span className="fs-13 text-muted">e.g "xxxx-xxxx"</span>
                                        <p className="mt-1">Add attribute
                                            <code>data-toggle="input-mask" data-mask-format="0000-0000"</code>
                                        </p>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Telephone with Code Area</label>
                                        <input type="text" className="form-control" data-toggle="input-mask"
                                            data-mask-format="(00) 0000-0000" />
                                        <span className="fs-13 text-muted">e.g "(xx) xxxx-xxxx"</span>
                                        <p className="mt-1">Add attribute
                                            <code>data-toggle="input-mask" data-mask-format="(00) 0000-0000"</code>
                                        </p>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">US Telephone</label>
                                        <input type="text" className="form-control" data-toggle="input-mask"
                                            data-mask-format="(000) 000-0000" />
                                        <span className="fs-13 text-muted">e.g "(xxx) xxx-xxxx"</span>
                                        <p className="mt-1">Add attribute
                                            <code>data-toggle="input-mask" data-mask-format="(000) 000-0000"</code>
                                        </p>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">São Paulo Celphones</label>
                                        <input type="text" className="form-control" data-toggle="input-mask"
                                            data-mask-format="(00) 00000-0000" />
                                        <span className="fs-13 text-muted">e.g "(xx) xxxxx-xxxx"</span>
                                        <p className="mt-1">Add attribute
                                            <code>data-toggle="input-mask" data-mask-format="(00) 00000-0000"</code>
                                        </p>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">CPF</label>
                                        <input type="text" className="form-control" data-toggle="input-mask"
                                            data-mask-format="000.000.000-00" data-reverse="true" />
                                        <span className="fs-13 text-muted">e.g "xxx.xxx.xxxx-xx"</span>
                                        <p className="mt-1">Add attribute
                                            <code>data-mask-format="000.000.000-00" data-reverse="true"</code>
                                        </p>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">IP Address</label>
                                        <input type="text" className="form-control" data-toggle="input-mask"
                                            data-mask-format="099.099.099.099" data-reverse="true" />
                                        <span className="fs-13 text-muted">e.g "xxx.xxx.xxx.xxx"</span>
                                        <p className="mt-1">Add attribute
                                            <code>data-toggle="input-mask" data-mask-format="099.099.099.099"</code>
                                        </p>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Credit Card Number</label>
                                        <input type="text" className="form-control" data-toggle="input-mask"
                                            data-mask-format="0000.0000.0000.0000" />
                                        <span className="form-text text-muted">e.g "xxxx.xxxx.xxxx.xxxx"</span>
                                        <p className="mt-1">Add attribute
                                            <code>data-toggle="input-mask" data-mask-format="0000.0000.0000.0000"</code>
                                        </p>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Eye Script</label>
                                        <input type="text" id="eyescript" className="form-control" data-toggle="input-mask"
                                            data-mask-format="~0.00 ~0.00 000" />
                                        <span className="form-text text-muted">~9.99 ~9.99 999</span>
                                        <p className="mt-1">Add attribute
                                            <code>data-toggle="input-mask" data-mask-format="~0.00 ~0.00 000"</code>
                                        </p>
                                    </div>
                                </form>
                            </div> {/* end col */}

                        </div>
                        {/* end row */}

                    </div> {/* end card body */}
                </div> {/* end card */}
        </div>
    );
};

export default FormMask;
