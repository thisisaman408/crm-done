import React from 'react';

const AddInvoices = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from add-invoices.html */}
            {/* Start Page Header */}
                <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 mb-3">
                    <div className="flex-grow-1">
                        <h6 className="fw-bold mb-0 d-flex align-items-center"><a href="/invoice"><i
                                    className="ti ti-chevron-left me-1 fs-14"></i>Invoices</a></h6>
                    </div>
                </div>
                {/* End Page Header */}

                <div className="card rounded-0 mb-0">
                    <div className="card-header">
                        <h6 className="fw-bold m-0"> New Invoice </h6>
                    </div> {/* end card-header */}

                    <form action="add-invoices.html">
                        <div className="card-body">

                            {/* start row */}
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Patient Name <span
                                                className="text-danger">*</span></label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div> {/* end col */}

                                <div className="col-lg-6 col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Email <span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div> {/* end col */}

                                <div className="col-lg-6 col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Customer <span className="text-danger">*</span></label>
                                        <select className="select">
                                            <option>Select</option>
                                            <option>Anthony Lewis</option>
                                            <option>Brian Villalobos</option>
                                            <option>Harvey Smith</option>
                                            <option>Stephan Peralt</option>
                                        </select>
                                    </div>
                                </div> {/* end col */}

                                <div className="col-lg-6 col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Tax <span className="text-danger">*</span></label>
                                        <select className="select">
                                            <option>Select</option>
                                            <option>GST</option>
                                            <option>VAT</option>
                                            <option>Professional</option>
                                            <option>Income</option>
                                        </select>
                                    </div>
                                </div> {/* end col */}

                                <div className="col-lg-6 col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Invoice Date <span
                                                className="text-danger">*</span></label>
                                        <div className="input-group w-auto input-group-flat">
                                            <input type="text" className="form-control" data-provider="flatpickr"
                                                data-date-format="d M, Y" placeholder="dd/mm/yyyy" />
                                            <span className="input-group-text">
                                                <i className="ti ti-calendar"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div> {/* end col */}

                                <div className="col-lg-6 col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Due Date <span className="text-danger">*</span></label>
                                        <div className="input-group w-auto input-group-flat">
                                            <input type="text" className="form-control" data-provider="flatpickr"
                                                data-date-format="d M, Y" placeholder="dd/mm/yyyy" />
                                            <span className="input-group-text">
                                                <i className="ti ti-calendar"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div> {/* end col */}

                                <div className="col-lg-6 col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Patient Address <span
                                                className="text-danger">*</span></label>
                                        <div className="input-group">
                                            <textarea className="form-control" rows="3"></textarea>
                                        </div>
                                    </div>
                                </div> {/* end col */}

                                <div className="col-lg-6 col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Billing Address <span
                                                className="text-danger">*</span></label>
                                        <div className="input-group">
                                            <textarea className="form-control" rows="3"></textarea>
                                        </div>
                                    </div>
                                </div> {/* end col */}

                                <div className="col-lg-6 col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Payment Method <span
                                                className="text-danger">*</span></label>
                                        <select className="select">
                                            <option>Select</option>
                                            <option>PayPal</option>
                                            <option>Options Enhanced</option>
                                            <option>Cheque</option>
                                        </select>
                                    </div>
                                </div> {/* end col */}

                                <div className="col-lg-6 col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Payment Status <span
                                                className="text-danger">*</span></label>
                                        <select className="select">
                                            <option>Select</option>
                                            <option>Inporgress</option>
                                            <option>Completed</option>
                                            <option>Pending</option>
                                        </select>
                                    </div>
                                </div> {/* end col */}

                                <div className="col-lg-12 col-md-12">

                                    <div className="mb-3">
                                        <table className="table invoice-table border">
                                            <thead>
                                                <tr>
                                                    <th>Item</th>
                                                    <th>Description</th>
                                                    <th>Unit Cost</th>
                                                    <th>Qty</th>
                                                    <th>Amount</th>
                                                    <th></th>
                                                </tr>
                                            </thead>

                                            <tbody className="invoices-list">
                                                <tr className="invoices-list-item">
                                                    <td><input type="text" className="form-control" /></td>
                                                    <td><input type="text" className="form-control" /></td>
                                                    <td><input type="number" className="form-control" /></td>
                                                    <td><input type="number" className="form-control" /></td>
                                                    <td><input type="text" className="form-control" readonly /></td>
                                                    <td><button
                                                            className="btn remove-invoices btn-sm border shadow-sm p-2 d-flex align-items-center justify-content-center rounded fs-14">
                                                            <i className="ti ti-trash"></i> </button></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="add-invoices.html#"
                                                            className="btn add-invoices border-0 text-dark d-felx align-items-center fs-14">
                                                            <i className="ti ti-circle-plus text-primary me-1"></i> Add
                                                            Invoice</a>
                                                    </td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                </div> {/* end col */}

                                <div className="col-lg-8 col-md-8"></div> {/* end col */}

                                <div className="col-lg-4">
                                    <div>
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <h6 className="fs-14 fw-normal text-dark">Amount</h6>
                                            <h6 className="fs-14 fw-semibold text-dark">$0</h6>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <h6 className="fs-14 fw-normal text-dark">Tax (0%)</h6>
                                            <h6 className="fs-14 fw-semibold text-dark">$0</h6>
                                        </div> 
                                        <div className="d-flex align-items-center justify-content-between mb-2 discount-select">
                                            <h6 className="fs-14 fw-normal text-dark">Discount</h6>
                                            <h6 className="fs-14 fw-semibold text-dark">
                                                <select className="select form-control-sm rounded">
                                                    <option>0%</option>
                                                    <option>1%</option>
                                                    <option>2%</option>
                                                    <option>3%</option>
                                                    <option>4%</option>
                                                </select>
                                            </h6>
                                        </div>
                                        <div
                                            className="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">
                                            <h6 className="fs-14 fw-normal text-dark d-flex align-items-center">
                                                <label className="d-flex align-items-center form-switch ps-1">
                                                    <input className="form-check-input m-0 me-2" type="checkbox" checked="" />
                                                </label>
                                                Round Off Total
                                            </h6>
                                            <h6 className="fs-14 fw-semibold text-dark">$0</h6>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <h6 className="fs-18 fw-bold">Total (USD)</h6>
                                            <h6 className="fs-18 fw-bold">$0</h6>
                                        </div>
                                    </div>
                                </div> {/* end col */}

                                <div className="col-lg-12 col-md-12">
                                    <div>
                                        <label className="form-label">Other Information <span
                                                className="text-danger">*</span></label>
                                        <div className="input-group">
                                            <textarea rows="3" className="form-control "></textarea>
                                        </div>
                                    </div>
                                </div> {/* end col */}
                            </div>
                            {/* end row */}
                        </div> {/* end card-body */}
                        <div className="card-footer">
                            <div className="d-flex gap-2 align-items-center justify-content-end mb-0">
                                <button type="button" className="btn btn-light">Cancel</button>
                                <button type="submit" className="btn btn-primary">Add Invoice</button>
                            </div>
                        </div> {/* end card footer */}
                    </form>
                </div> {/* end card */}
        </div>
    );
};

export default AddInvoices;
