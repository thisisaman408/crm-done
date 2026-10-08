import React, { useState, useEffect } from 'react';
import api from '../lib/api';

const Invoices = () => {
    const [bookings, setBookings] = useState([]);
    const [payments, setPayments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [bookingsRes, paymentsRes] = await Promise.all([
                    api.get('/api/bookings'),
                    api.get('/api/payments')
                ]);
                
                const bData = bookingsRes.data?.data || bookingsRes.data || [];
                const pData = paymentsRes.data?.data || paymentsRes.data || [];
                
                setBookings(Array.isArray(bData) ? bData : []);
                setPayments(Array.isArray(pData) ? pData : []);
            } catch (err) {
                console.error("Failed to fetch data", err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="content content-two">
            <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                <div>
                    <h4 className="mb-1">Invoices/Bookings<span className="badge badge-soft-primary ms-2">{bookings.length}</span></h4>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0 p-0">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Invoices</li>
                        </ol>
                    </nav>
                </div>
                <div className="gap-2 d-flex align-items-center flex-wrap">
                    <a href="/leads" className="btn btn-primary" onClick={(e) => {
                        alert("Bookings are created by converting an active Lead. You will be redirected to the Leads list.");
                    }}>
                        <i className="ti ti-square-rounded-plus-filled me-1"></i>Add New Booking
                    </a>
                </div>
            </div>

            <div className="row">
                {loading ? (
                    <div className="col-12 text-center py-5">
                        <div className="spinner-border text-primary" role="status"></div>
                        <p className="mt-2">Loading Bookings...</p>
                    </div>
                ) : bookings.length === 0 ? (
                    <div className="col-12 text-center py-5">
                        <p>No confirmed bookings found.</p>
                    </div>
                ) : (
                    bookings.map((booking) => {
                        // Calculate paid and balance from payments
                        const bookingPayments = payments.filter(p => p.bookingId === booking.id);
                        const totalValue = Number(booking.agreedPrice) || 0;
                        const paidAmount = bookingPayments
                            .filter(p => p.status === 'PAID' || p.status === 'PARTIAL')
                            .reduce((sum, p) => sum + (Number(p.amount) - Number(p.remainingAmount)), 0) + (Number(booking.tokenAmount) || 0); // Include token amount
                        
                        const balanceAmount = totalValue - paidAmount;
                        
                        let badgeClass = "badge-soft-danger";
                        let badgeText = "Unpaid";
                        
                        if (paidAmount >= totalValue && totalValue > 0) {
                            badgeClass = "badge-soft-success";
                            badgeText = "Paid";
                        } else if (paidAmount > 0) {
                            badgeClass = "badge-soft-warning";
                            badgeText = "Partially Paid";
                        }

                        return (
                            <div className="col-xxl-3 col-xl-4 col-md-6" key={booking.id}>
                                <div 
                                    className="card border shadow" 
                                    style={{ cursor: 'pointer', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.02)' } }}
                                    onClick={() => window.location.href = `/clients/${booking.customer?.leadId}`}
                                >
                                    <div className="card-body">
                                        <div className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-3">
                                            <div className="users-profile">
                                                <span className="badge badge-soft-info">#{booking.bookingNumber || booking.id.slice(0, 8)}</span>
                                            </div>
                                            <div className="dropdown table-action">
                                                <a href="#" className="action-icon btn btn-icon btn-sm btn-outline-light shadow"
                                                    onClick={(e) => e.stopPropagation()}
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="ti ti-dots-vertical"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item d-inline-flex align-items-center" href="#" onClick={(e) => e.stopPropagation()}><i
                                                            className="ti ti-edit me-1"></i>Edit</a>
                                                    <a className="dropdown-item d-inline-flex align-items-center" href="#" onClick={(e) => e.stopPropagation()}><i
                                                            className="ti ti-trash me-1"></i>Delete</a>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="d-flex align-items-center justify-content-between mb-3">
                                            <div className="d-flex align-items-center">
                                                <span className="avatar avatar-md bg-light-primary rounded-circle fw-semibold text-primary d-flex align-items-center justify-content-center">
                                                    {booking.customer?.firstName?.charAt(0) || 'C'}
                                                </span>
                                                <div className="ms-2">
                                                    <h6 className="mb-0">
                                                        {booking.customer?.firstName} {booking.customer?.lastName}
                                                    </h6>
                                                    <p className="fs-13 text-muted mb-0">Unit: {booking.unit?.unitNumber || 'N/A'}</p>
                                                </div>
                                            </div>
                                            <span className={`badge ${badgeClass}`}>{badgeText}</span>
                                        </div>
                                        
                                        <div>
                                            <p className="mb-2 text-dark fs-14 fw-medium"><i className="ti ti-moneybag me-2"></i>Total Value : ₹{totalValue.toLocaleString()}</p>
                                            <p className="mb-2 text-dark fs-14 fw-medium"><i className="ti ti-calendar me-2"></i>Date : {new Date(booking.createdAt).toLocaleDateString()}</p>
                                            <p className="mb-2 text-dark fs-14 fw-medium"><i className="ti ti-cash me-2"></i>Paid Amount : ₹{paidAmount.toLocaleString()}</p>
                                            <p className="mb-0 text-dark fs-14 fw-medium"><i className="ti ti-wallet me-2"></i>Balance Amount : ₹{balanceAmount.toLocaleString()}</p>
                                        </div>
                                        
                                        <div className="mt-3 border-top pt-3">
                                            <div className="d-flex align-items-center">
                                                <span className="avatar avatar-sm bg-light rounded-circle fw-semibold text-muted border border-light d-flex align-items-center justify-content-center">
                                                    {booking.salesExec?.firstName?.charAt(0) || 'S'}
                                                </span>
                                                <div className="ms-2">
                                                    <h6 className="fs-13 mb-0 text-truncate">{booking.salesExec?.firstName} {booking.salesExec?.lastName}</h6>
                                                    <p className="fs-12 text-muted mb-0 text-truncate">Sales Exec</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
};

export default Invoices;
