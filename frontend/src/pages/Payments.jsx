import React, { useState, useEffect } from 'react';
import api from '../lib/api';

const Payments = () => {
    const [payments, setPayments] = useState([]);
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [submitLoading, setSubmitLoading] = useState(false);
    const [selectedPayment, setSelectedPayment] = useState(null);

    const fetchPayments = async () => {
        try {
            const res = await api.get('/api/payments');
            setPayments(Array.isArray(res.data) ? res.data : []);
        } catch (err) {
            console.error("Failed to fetch payments", err);
        } finally {
            setLoading(false);
        }
    };

    const fetchBookings = async () => {
        try {
            const res = await api.get('/api/bookings');
            const data = res.data?.data || res.data || [];
            setBookings(Array.isArray(data) ? data : []);
        } catch (err) {
            console.error("Failed to fetch bookings", err);
        }
    };

    useEffect(() => {
        fetchPayments();
        fetchBookings();
    }, []);

    const handleCreateSchedule = async (e) => {
        e.preventDefault();
        setSubmitLoading(true);
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        const bookingId = data.bookingId;
        
        if (!bookingId) {
            alert('Please select a booking.');
            setSubmitLoading(false);
            return;
        }
        
        const payload = {
            netAmount: parseFloat(data.netAmount),
            startDate: data.startDate,
            installmentsCount: data.installmentsCount ? parseInt(data.installmentsCount) : undefined,
            percentagePerMonth: data.percentagePerMonth ? parseFloat(data.percentagePerMonth) : undefined,
            frequency: data.frequency || 'MONTHLY',
        };

        try {
            await api.post(`/api/payments/schedule/${bookingId}`, payload);
            document.querySelector('#offcanvas_create_schedule .btn-close')?.click();
            e.target.reset();
            fetchPayments();
        } catch (err) {
            console.error("Error creating schedule", err);
            alert(`Error: ${err.response?.data?.message || err.message}`);
        } finally {
            setSubmitLoading(false);
        }
    };

    const handleEditSchedule = async (e) => {
        e.preventDefault();
        setSubmitLoading(true);
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        
        try {
            await api.post(`/api/payments/${selectedPayment.id}`, {
                amount: data.amount ? parseFloat(data.amount) : undefined,
                dueDate: data.dueDate,
            });
            document.querySelector('#modal_edit_schedule .btn-close')?.click();
            fetchPayments();
        } catch (err) {
            alert(`Error: ${err.response?.data?.message || err.message}`);
        } finally {
            setSubmitLoading(false);
        }
    };

    const handleMarkAsPaid = async (e) => {
        e.preventDefault();
        setSubmitLoading(true);
        const formData = new FormData(e.target);
        
        try {
            await api.post(`/api/payments/${selectedPayment.id}/pay`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            document.querySelector('#modal_mark_paid .btn-close')?.click();
            fetchPayments();
        } catch (err) {
            alert(`Error: ${err.response?.data?.message || err.message}`);
        } finally {
            setSubmitLoading(false);
        }
    };

    return (
<div className="content pb-0">

                
                <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                    <div>
                        <h4 className="mb-1">Payments<span className="badge badge-soft-primary ms-2">{payments.length}</span></h4>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Payments</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="gap-2 d-flex align-items-center flex-wrap">
                        <div className="dropdown">
                            <a href="javascript:void(0);" className="dropdown-toggle btn btn-outline-light px-2 shadow"
                                data-bs-toggle="dropdown"><i className="ti ti-package-export me-2"></i>Export</a>
                            <div className="dropdown-menu  dropdown-menu-end">
                                <ul>
                                    <li>
                                        <a href="javascript:void(0);" className="dropdown-item"><i
                                                className="ti ti-file-type-pdf me-1"></i>Export as
                                            PDF</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" className="dropdown-item"><i
                                                className="ti ti-file-type-xls me-1"></i>Export as
                                            Excel </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <button type="button" className="btn btn-primary px-3 shadow" data-bs-toggle="offcanvas" data-bs-target="#offcanvas_create_schedule">
                            <i className="ti ti-plus me-2"></i>New Schedule
                        </button>
                        <a href="javascript:void(0);" className="btn btn-icon btn-outline-light shadow"
                            data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Refresh"
                            data-bs-original-title="Refresh"><i className="ti ti-refresh"></i></a>
                        <a href="javascript:void(0);" className="btn btn-icon btn-outline-light shadow"
                            data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Collapse"
                            data-bs-original-title="Collapse" id="collapse-header"><i
                                className="ti ti-transition-top"></i></a>
                    </div>
                </div>
                

                
                <div className="card border-0 rounded-0">
                    <div className="card-header d-flex">
                        <div className="input-icon input-icon-start position-relative">
                            <span className="input-icon-addon text-dark"><i className="ti ti-search"></i></span>
                            <input type="text" className="form-control" placeholder="Search" />
                        </div>
                    </div>
                    <div className="card-body">

                        
                        <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                            <div className="d-flex align-items-center gap-2 flex-wrap">
                                <div className="dropdown">
                                    <a href="javascript:void(0);" className="dropdown-toggle btn btn-outline-light shadow"
                                        data-bs-toggle="dropdown"><i className="ti ti-sort-ascending-2 me-2"></i>Sort By</a>
                                    <div className="dropdown-menu">
                                        <ul>
                                            <li>
                                                <a href="javascript:void(0);" className="dropdown-item">Newest</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" className="dropdown-item">Oldest</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div id="reportrange" className="reportrange-picker d-flex align-items-center shadow">
                                    <i className="ti ti-calendar-due text-dark fs-14 me-1"></i><span
                                        className="reportrange-picker-field">9 Jun 25 - 9 Jun 25</span>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-2 flex-wrap">
                                <div className="dropdown">
                                    <a href="javascript:void(0);" className="btn btn-outline-light shadow px-2"
                                        data-bs-toggle="dropdown" data-bs-auto-close="outside"><i
                                            className="ti ti-filter me-2"></i>Filter<i
                                            className="ti ti-chevron-down ms-2"></i></a>
                                    <div className="filter-dropdown-menu dropdown-menu dropdown-menu-md p-0">
                                        <div
                                            className="filter-header d-flex align-items-center justify-content-between border-bottom">
                                            <h4 className="mb-0 fs-16"><i className="ti ti-filter me-1"></i>Filter</h4>
                                            <button type="button" className="btn-close close-filter-btn"
                                                data-bs-dismiss="dropdown-menu" aria-label="Close"></button>
                                        </div>
                                        <div className="filter-set-view p-3">
                                            <div className="accordion" id="accordionExample">
                                                <div className="filter-set-content">
                                                    <div className="filter-set-content-head">
                                                        <a href="payments.html#" className="collapsed" data-bs-toggle="collapse"
                                                            data-bs-target="#collapseThree" aria-expanded="false"
                                                            aria-controls="collapseThree">Invoice ID</a>
                                                    </div>
                                                    <div className="filter-set-contents accordion-collapse collapse"
                                                        id="collapseThree" data-bs-parent="#accordionExample">
                                                        <div
                                                            className="filter-content-list bg-light rounded border p-2 shadow mt-2">
                                                            <div className="mb-1">
                                                                <div
                                                                    className="input-icon-start input-icon position-relative">
                                                                    <span className="input-icon-addon fs-12">
                                                                        <i className="ti ti-search"></i>
                                                                    </span>
                                                                    <input type="text"
                                                                        className="form-control form-control-md"
                                                                        placeholder="Search" />
                                                                </div>
                                                            </div>
                                                            <ul>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        #274729
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        #274730
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        #274731
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        #274732
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        #274733
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="filter-set-content">
                                                    <div className="filter-set-content-head">
                                                        <a href="payments.html#" className="collapsed" data-bs-toggle="collapse"
                                                            data-bs-target="#date" aria-expanded="false"
                                                            aria-controls="date">Due Date</a>
                                                    </div>
                                                    <div className="filter-set-contents accordion-collapse collapse"
                                                        id="date" data-bs-parent="#accordionExample">
                                                        <div
                                                            className="filter-content-list bg-light rounded border p-2 shadow mt-2">
                                                            <div className="input-group w-auto input-group-flat">
                                                                <input type="text" className="form-control"
                                                                    data-provider="flatpickr" data-date-format="d M, Y" />
                                                                <span className="input-group-text">
                                                                    <i className="ti ti-calendar"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="filter-set-content">
                                                    <div className="filter-set-content-head">
                                                        <a href="payments.html#" className="collapsed" data-bs-toggle="collapse"
                                                            data-bs-target="#Status" aria-expanded="false"
                                                            aria-controls="Status">Amount</a>
                                                    </div>
                                                    <div className="filter-set-contents accordion-collapse collapse"
                                                        id="Status" data-bs-parent="#accordionExample">
                                                        <div
                                                            className="filter-content-list bg-light rounded border p-2 shadow mt-2">
                                                            <ul>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        $500
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        $450
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        $1230
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        $3500
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        $3500
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        $2120
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        $4000
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        $2100
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        $1450
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        $2500
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        $280
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center gap-2">
                                                <a href="javascript:void(0);"
                                                    className="btn btn-outline-light w-100">Reset</a>
                                                <a href="javascript:void(0);" className="btn btn-primary w-100">Filter</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dropdown">
                                    <a href="javascript:void(0);" className="btn bg-soft-indigo border-0"
                                        data-bs-toggle="dropdown" data-bs-auto-close="outside"><i
                                            className="ti ti-columns-3 me-2"></i>Manage Columns</a>
                                    <div className="dropdown-menu dropdown-menu-md dropdown-md p-3">
                                        <ul>
                                            <li className="gap-1 d-flex align-items-center mb-2">
                                                <i className="ti ti-columns me-1"></i>
                                                <div className="form-check form-switch w-100 ps-0">

                                                    <label
                                                        className="form-check-label d-flex align-items-center gap-2 w-100">
                                                        <span>Invoice ID</span>
                                                        <input className="form-check-input switchCheckDefault ms-auto"
                                                            type="checkbox" role="switch" checked />
                                                    </label>
                                                </div>
                                            </li>
                                            <li className="gap-1 d-flex align-items-center mb-2">
                                                <i className="ti ti-columns me-1"></i>
                                                <div className="form-check form-switch w-100 ps-0">

                                                    <label
                                                        className="form-check-label d-flex align-items-center gap-2 w-100">
                                                        <span>Client</span>
                                                        <input className="form-check-input switchCheckDefault ms-auto"
                                                            type="checkbox" role="switch" checked />
                                                    </label>
                                                </div>
                                            </li>
                                            <li className="gap-1 d-flex align-items-center mb-2">
                                                <i className="ti ti-columns me-1"></i>
                                                <div className="form-check form-switch w-100 ps-0">

                                                    <label
                                                        className="form-check-label d-flex align-items-center gap-2 w-100">
                                                        <span>Amount</span>
                                                        <input className="form-check-input switchCheckDefault ms-auto"
                                                            type="checkbox" role="switch" checked />
                                                    </label>
                                                </div>
                                            </li>
                                            <li className="gap-1 d-flex align-items-center mb-2">
                                                <i className="ti ti-columns me-1"></i>
                                                <div className="form-check form-switch w-100 ps-0">

                                                    <label
                                                        className="form-check-label d-flex align-items-center gap-2 w-100">
                                                        <span>Due Date</span>
                                                        <input className="form-check-input switchCheckDefault ms-auto"
                                                            type="checkbox" role="switch" />
                                                    </label>
                                                </div>
                                            </li>
                                            <li className="gap-1 d-flex align-items-center mb-2">
                                                <i className="ti ti-columns me-1"></i>
                                                <div className="form-check form-switch w-100 ps-0">

                                                    <label
                                                        className="form-check-label d-flex align-items-center gap-2 w-100">
                                                        <span>Payment</span>
                                                        <input className="form-check-input switchCheckDefault ms-auto"
                                                            type="checkbox" role="switch" checked />
                                                    </label>
                                                </div>
                                            </li>
                                            <li className="gap-1 d-flex align-items-center mb-2">
                                                <i className="ti ti-columns me-1"></i>
                                                <div className="form-check form-switch w-100 ps-0">

                                                    <label
                                                        className="form-check-label d-flex align-items-center gap-2 w-100">
                                                        <span>Transaction ID</span>
                                                        <input className="form-check-input switchCheckDefault ms-auto"
                                                            type="checkbox" role="switch" checked />
                                                    </label>
                                                </div>
                                            </li>
                                            <li className="gap-1 d-flex align-items-center mb-0">
                                                <i className="ti ti-columns me-1"></i>
                                                <div className="form-check form-switch w-100 ps-0">

                                                    <label
                                                        className="form-check-label d-flex align-items-center gap-2 w-100">
                                                        <span>Action</span>
                                                        <input className="form-check-input switchCheckDefault ms-auto"
                                                            type="checkbox" role="switch" checked />
                                                    </label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        

                        
                        <div className="table-responsive table-nowrap custom-table">
                            <table className="table table-nowrap" id="payments-list">
                                <thead className="table-light">
                                    <tr>
                                        <th className="no-sort">
                                            <div className="form-check form-check-md">
                                                <input className="form-check-input" type="checkbox" id="select-all" />
                                            </div>
                                        </th>
                                        <th>Invoice ID</th>
                                        <th>Client</th>
                                        <th>Amount</th>
                                        <th>Due Date</th>
                                        <th>Payment Method</th>
                                        <th>Transaction ID</th>
                                        <th className="no-sort">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {loading ? (
                                        <tr>
                                            <td colSpan="8" className="text-center">Loading payments...</td>
                                        </tr>
                                    ) : payments.length === 0 ? (
                                        <tr>
                                            <td colSpan="8" className="text-center">No payment records found</td>
                                        </tr>
                                    ) : (
                                        payments.map((p) => (
                                            <tr key={p.id}>
                                                <td>
                                                    <div className="form-check form-check-md">
                                                        <input className="form-check-input" type="checkbox" />
                                                    </div>
                                                </td>
                                                <td>#{p.id.slice(0, 6)}</td>
                                                <td>{p.booking?.customer?.firstName} {p.booking?.customer?.lastName}</td>
                                                <td>₹{p.amount?.toLocaleString()}</td>
                                                <td>{new Date(p.dueDate).toLocaleDateString()}</td>
                                                <td>
                                                    <span className={`badge ${p.status === 'PAID' ? 'badge-soft-success' : p.status === 'PENDING' ? 'badge-soft-warning' : 'badge-soft-danger'}`}>
                                                        {p.status}
                                                    </span>
                                                </td>
                                                <td>{p.transactions?.[0]?.id?.slice(0, 8) || '-'}</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <button className="btn btn-icon btn-sm btn-soft-light dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                                            <i className="ti ti-dots-vertical"></i>
                                                        </button>
                                                        <ul className="dropdown-menu">
                                                            <li><a className="dropdown-item" href="#" onClick={() => {
                                                                alert(`Payment Details:\nID: ${p.id}\nAmount: ${p.amount}\nDue: ${p.dueDate}\nStatus: ${p.status}\nRemaining: ${p.remainingAmount}`);
                                                            }}>View Details</a></li>
                                                            <li><a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#modal_edit_schedule" onClick={() => setSelectedPayment(p)}>Edit</a></li>
                                                            {p.status !== 'PAID' && (
                                                                <li><a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#modal_mark_paid" onClick={() => setSelectedPayment(p)}>Mark as Paid</a></li>
                                                            )}
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="datatable-length"></div>
                            </div>
                            <div className="col-md-6">
                                <div className="datatable-paginate"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Offcanvas Create Schedule */}
                <div className="offcanvas offcanvas-end offcanvas-large" tabIndex="-1" id="offcanvas_create_schedule">
                    <div className="offcanvas-header border-bottom">
                        <h5 className="mb-0">Create Payment Schedule</h5>
                        <button type="button" className="btn-close custom-btn-close border p-1 me-0 d-flex align-items-center justify-content-center rounded-circle" data-bs-dismiss="offcanvas"></button>
                    </div>
                    <div className="offcanvas-body">
                        <form onSubmit={handleCreateSchedule}>
                            <div className="mb-3">
                                <label className="form-label">Associated Booking <span className="text-danger">*</span></label>
                                <select name="bookingId" className="form-select" required>
                                    <option value="">Select a booking...</option>
                                    {bookings.map(b => (
                                        <option key={b.id} value={b.id}>
                                            {b.customer?.firstName} {b.customer?.lastName} - Unit {b.unit?.unitNumber || 'N/A'} (Agreed: ₹{b.agreedPrice})
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Total Amount to Schedule <span className="text-danger">*</span></label>
                                <input type="number" name="netAmount" className="form-control" placeholder="e.g. 5000000" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Start Date <span className="text-danger">*</span></label>
                                <input type="date" name="startDate" className="form-control" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Number of Installments</label>
                                <input type="number" name="installmentsCount" className="form-control" placeholder="e.g. 10 (Leave blank if using %)" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Percentage Per Month</label>
                                <input type="number" step="0.01" name="percentagePerMonth" className="form-control" placeholder="e.g. 5 (Leave blank if using count)" />
                                <small className="text-muted">Fill EITHER Installments Count OR Percentage Per Month.</small>
                            </div>
                            <div className="mb-4">
                                <label className="form-label">Frequency</label>
                                <select name="frequency" className="form-select">
                                    <option value="MONTHLY">Monthly</option>
                                    <option value="QUARTERLY">Quarterly</option>
                                </select>
                            </div>
                            <div className="d-flex align-items-center justify-content-end">
                                <button type="button" data-bs-dismiss="offcanvas" className="btn btn-light me-2">Cancel</button>
                                <button type="submit" className="btn btn-primary" disabled={submitLoading}>
                                    {submitLoading ? 'Generating...' : 'Generate Schedule'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Edit Modal */}
                <div className="modal fade" id="modal_edit_schedule" tabIndex="-1">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header border-bottom">
                                <h5 className="modal-title">Edit Payment Schedule</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                {selectedPayment && (
                                    <form onSubmit={handleEditSchedule}>
                                        <div className="mb-3">
                                            <label className="form-label">Amount</label>
                                            <input type="number" name="amount" className="form-control" defaultValue={selectedPayment.amount} />
                                        </div>
                                        <div className="mb-4">
                                            <label className="form-label">Due Date</label>
                                            <input type="date" name="dueDate" className="form-control" defaultValue={new Date(selectedPayment.dueDate).toISOString().split('T')[0]} />
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            <button type="submit" className="btn btn-primary" disabled={submitLoading}>Save Changes</button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mark as Paid Modal */}
                <div className="modal fade" id="modal_mark_paid" tabIndex="-1">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header border-bottom">
                                <h5 className="modal-title">Mark as Paid</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                {selectedPayment && (
                                    <form onSubmit={handleMarkAsPaid}>
                                        <div className="mb-3">
                                            <label className="form-label">Amount Paid <span className="text-danger">*</span></label>
                                            <input type="number" name="amountPaid" className="form-control" defaultValue={selectedPayment.remainingAmount} required />
                                            <small className="text-muted">Remaining amount is ₹{selectedPayment.remainingAmount}</small>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Receipt (Optional)</label>
                                            <input type="file" name="receipt" className="form-control" />
                                        </div>
                                        <div className="mb-4">
                                            <label className="form-label">Remarks</label>
                                            <input type="text" name="remarks" className="form-control" placeholder="e.g. Bank Transfer Ref: XYZ" />
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            <button type="submit" className="btn btn-success" disabled={submitLoading}>Confirm Payment</button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
    );
};

export default Payments;
