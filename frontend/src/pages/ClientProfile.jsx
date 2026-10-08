import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../lib/api';

const ClientProfile = () => {
    const { id } = useParams();
    const [client, setClient] = useState(null);
    const [payments, setPayments] = useState([]);
    const [loading, setLoading] = useState(true);
    
    // Modal State
    const [showEditModal, setShowEditModal] = useState(false);
    const [editForm, setEditForm] = useState({ status: '', budget: 0, temperature: '' });
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        const fetchClientData = async () => {
            try {
                // The leadId is used to fetch the comprehensive profile
                const res = await api.get(`/api/leads/${id}`);
                const data = res.data?.data || res.data;
                setClient(data);
                
                // Fetch all payments and filter for this client's bookings
                const paymentsRes = await api.get('/api/payments');
                const pData = paymentsRes.data?.data || paymentsRes.data || [];
                setPayments(pData);
                
                setEditForm({
                    status: data.status || 'NEW',
                    budget: data.budget || 0,
                    temperature: data.temperature || 'COLD'
                });
            } catch (err) {
                console.error("Failed to fetch client profile", err);
            } finally {
                setLoading(false);
            }
        };
        fetchClientData();
    }, [id]);

    if (loading) return <div className="p-5 text-center"><div className="spinner-border text-primary" role="status"></div><p className="mt-2">Loading Client Profile...</p></div>;
    if (!client) return <div className="p-5 text-center"><h3>Client Not Found</h3><p>Could not load the client profile.</p></div>;

    const bookings = client.customer?.bookings || [];

    return (<>
        <div className="content content-two">
            <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                <div>
                    <h4 className="mb-1">Client Profile: {client.firstName} {client.lastName}</h4>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0 p-0">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item"><Link to="/contacts">Contacts</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">{client.firstName} {client.lastName}</li>
                        </ol>
                    </nav>
                </div>
                <div className="gap-2 d-flex align-items-center flex-wrap">
                    <span className={`badge ${bookings.length > 0 ? 'badge-soft-success' : 'badge-soft-warning'}`}>
                        {bookings.length > 0 ? 'Booked Client' : (client.status || 'Active Lead')}
                    </span>
                    <button 
                        className="btn btn-sm btn-primary"
                        onClick={() => setShowEditModal(true)}
                    >
                        <i className="ti ti-edit me-1"></i>Manage Deal
                    </button>
                </div>
            </div>

            <div className="row">
                {/* Left Column: Basic Info */}
                <div className="col-xl-4 col-lg-5">
                    <div className="card shadow border">
                        <div className="card-body text-center">
                            <span className="avatar avatar-xxl bg-light-primary rounded-circle fw-semibold text-primary fs-2 mb-3 d-flex align-items-center justify-content-center mx-auto" style={{ width: '80px', height: '80px'}}>
                                {client.firstName?.charAt(0) || 'C'}
                            </span>
                            <h5 className="mb-1">{client.firstName} {client.lastName}</h5>
                            <p className="text-muted mb-3">{client.email || 'No email provided'}</p>
                            <div className="d-flex justify-content-center gap-2 mb-4">
                                <a href={`tel:${client.phone}`} className="btn btn-sm btn-outline-primary"><i className="ti ti-phone me-1"></i> Call</a>
                                <a href={`mailto:${client.email}`} className="btn btn-sm btn-outline-info"><i className="ti ti-mail me-1"></i> Email</a>
                            </div>
                        </div>
                        <div className="card-body border-top">
                            <h6 className="mb-3">Contact Details</h6>
                            <p className="mb-2 fs-14"><i className="ti ti-phone text-muted me-2"></i> {client.phone}</p>
                            <p className="mb-2 fs-14"><i className="ti ti-map-pin text-muted me-2"></i> {client.city || 'Location Unknown'}</p>
                            <p className="mb-0 fs-14"><i className="ti ti-wallet text-muted me-2"></i> Budget: {client.budget ? `₹${client.budget.toLocaleString()}` : 'N/A'}</p>
                        </div>
                    </div>

                    {/* Bookings Summary */}
                    {bookings.length > 0 && (
                        <div className="card shadow border mt-4">
                            <div className="card-header border-bottom">
                                <h5 className="card-title mb-0">Confirmed Bookings</h5>
                            </div>
                            <div className="card-body">
                                {bookings.map(b => (
                                    <div key={b.id} className="border p-3 rounded mb-3">
                                        <h6 className="mb-1">Unit {b.unit?.unitNumber || 'N/A'}</h6>
                                        <p className="fs-13 text-muted mb-2">Booked on {new Date(b.createdAt).toLocaleDateString()}</p>
                                        <p className="mb-0 fw-medium">Agreed Price: ₹{b.agreedPrice?.toLocaleString()}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Right Column: 360 Timeline / Activities */}
                <div className="col-xl-8 col-lg-7">
                    <div className="card shadow border">
                        <div className="card-header border-bottom">
                            <h5 className="card-title mb-0">Activity Timeline & Engagement</h5>
                        </div>
                        <div className="card-body">
                            <ul className="list-unstyled">
                                {/* Site Visits */}
                                {client.siteVisits?.map(sv => (
                                    <li className="mb-4" key={`sv-${sv.id}`}>
                                        <div className="d-flex">
                                            <div className="me-3 mt-1">
                                                <span className="avatar avatar-sm bg-light-info rounded-circle d-flex align-items-center justify-content-center">
                                                    <i className="ti ti-map-pin text-info"></i>
                                                </span>
                                            </div>
                                            <div>
                                                <h6 className="mb-1">Site Visit: {sv.status}</h6>
                                                <p className="text-muted fs-13 mb-1">Scheduled for {new Date(sv.scheduledDate).toLocaleString()}</p>
                                                {sv.meetingNotes && <p className="fs-14 text-dark bg-light p-2 rounded">{sv.meetingNotes}</p>}
                                            </div>
                                        </div>
                                    </li>
                                ))}

                                {/* Call Records */}
                                {client.callRecords?.map(cr => (
                                    <li className="mb-4" key={`cr-${cr.id}`}>
                                        <div className="d-flex">
                                            <div className="me-3 mt-1">
                                                <span className="avatar avatar-sm bg-light-success rounded-circle d-flex align-items-center justify-content-center">
                                                    <i className="ti ti-phone text-success"></i>
                                                </span>
                                            </div>
                                            <div>
                                                <h6 className="mb-1">Phone Call ({cr.duration}s)</h6>
                                                <p className="text-muted fs-13 mb-1">Called on {new Date(cr.startedAt).toLocaleString()}</p>
                                            </div>
                                        </div>
                                    </li>
                                ))}

                                {/* Follow Ups */}
                                {client.followUps?.map(fu => (
                                    <li className="mb-4" key={`fu-${fu.id}`}>
                                        <div className="d-flex">
                                            <div className="me-3 mt-1">
                                                <span className="avatar avatar-sm bg-light-warning rounded-circle d-flex align-items-center justify-content-center">
                                                    <i className="ti ti-calendar text-warning"></i>
                                                </span>
                                            </div>
                                            <div>
                                                <h6 className="mb-1">Follow-Up Task: {fu.status}</h6>
                                                <p className="text-muted fs-13 mb-1">Due {new Date(fu.scheduledDate).toLocaleString()}</p>
                                                {fu.remarks && <p className="fs-14 text-dark bg-light p-2 rounded">{fu.remarks}</p>}
                                            </div>
                                        </div>
                                    </li>
                                ))}

                                {/* Token Payments */}
                                {bookings.filter(b => b.tokenAmount > 0).map(b => (
                                    <li className="mb-4" key={`token-${b.id}`}>
                                        <div className="d-flex">
                                            <div className="me-3 mt-1">
                                                <span className="avatar avatar-sm bg-light-success rounded-circle d-flex align-items-center justify-content-center">
                                                    <i className="ti ti-cash text-success"></i>
                                                </span>
                                            </div>
                                            <div>
                                                <h6 className="mb-1">
                                                    Initial Booking Token 
                                                    <span className="badge ms-2 badge-soft-success">PAID</span>
                                                </h6>
                                                <p className="text-muted fs-13 mb-1">
                                                    Amount: ₹{Number(b.tokenAmount).toLocaleString()} • Paid on {new Date(b.createdAt).toLocaleDateString()}
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                ))}

                                {/* Scheduled Payments */}
                                {payments.filter(p => bookings.some(b => b.id === p.bookingId)).map(payment => (
                                    <li className="mb-4" key={`pay-${payment.id}`}>
                                        <div className="d-flex">
                                            <div className="me-3 mt-1">
                                                <span className={`avatar avatar-sm ${payment.status === 'PAID' ? 'bg-light-success' : 'bg-light-secondary'} rounded-circle d-flex align-items-center justify-content-center`}>
                                                    <i className={`ti ti-cash ${payment.status === 'PAID' ? 'text-success' : 'text-secondary'}`}></i>
                                                </span>
                                            </div>
                                            <div>
                                                <h6 className="mb-1">
                                                    Payment: {payment.milestoneName || 'Installment'} 
                                                    <span className={`badge ms-2 ${payment.status === 'PAID' ? 'badge-soft-success' : 'badge-soft-secondary'}`}>
                                                        {payment.status}
                                                    </span>
                                                </h6>
                                                <p className="text-muted fs-13 mb-1">
                                                    Amount: ₹{Number(payment.amount).toLocaleString()}
                                                    {payment.status === 'PAID' && payment.paidAt ? ` • Paid on ${new Date(payment.paidAt).toLocaleDateString()}` : ` • Due on ${new Date(payment.dueDate).toLocaleDateString()}`}
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                                
                                {(!client.siteVisits?.length && !client.callRecords?.length && !client.followUps?.length && !payments.filter(p => bookings.some(b => b.id === p.bookingId)).length) && (
                                    <div className="text-center py-4 text-muted">
                                        No recent activities recorded for this client.
                                    </div>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Manage Deal Modal */}
        {showEditModal && (
            <>
                <div className="modal-backdrop fade show"></div>
                <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
                            <div className="modal-header border-bottom-0 pb-0 pt-4 px-4">
                                <div>
                                    <h5 className="modal-title fs-18 fw-bold">Manage Deal</h5>
                                    <p className="text-muted fs-13 mb-0">Update {client?.firstName}'s pipeline stage and details</p>
                                </div>
                                <button type="button" className="btn-close" onClick={() => setShowEditModal(false)}></button>
                            </div>
                            <div className="modal-body px-4 py-4">
                                <div className="mb-4">
                                    <label className="form-label fw-medium text-dark">Pipeline Stage</label>
                                    <div className="input-group">
                                        <span className="input-group-text bg-light border-end-0"><i className="ti ti-route"></i></span>
                                        <select 
                                            className="form-select border-start-0 ps-0"
                                            value={editForm.status}
                                            onChange={(e) => setEditForm({...editForm, status: e.target.value})}
                                            style={{ backgroundColor: 'transparent' }}
                                        >
                                            <option value="NEW">🆕 New (Uncontacted)</option>
                                            <option value="CONTACTED">📞 Contacted</option>
                                            <option value="SITE_VISIT">🏢 Site Visit</option>
                                            <option value="NEGOTIATION">💬 Negotiation</option>
                                            <option value="DEAL">🤝 Deal (Verbal Yes)</option>
                                            <option value="WON">✅ Won (Booked/Paid)</option>
                                            <option value="LOST">❌ Lost</option>
                                        </select>
                                    </div>
                                    <small className="text-muted d-block mt-2">Moving this changes what column it appears in on the Pipeline board.</small>
                                </div>
                                
                                <div className="mb-4">
                                    <label className="form-label fw-medium text-dark">Client Budget (₹)</label>
                                    <div className="input-group">
                                        <span className="input-group-text bg-light border-end-0 text-success fw-bold">₹</span>
                                        <input 
                                            type="number" 
                                            className="form-control border-start-0 ps-0"
                                            placeholder="e.g. 5000000"
                                            value={editForm.budget}
                                            onChange={(e) => setEditForm({...editForm, budget: e.target.value})}
                                            style={{ backgroundColor: 'transparent' }}
                                        />
                                    </div>
                                    <small className="text-muted d-block mt-2">Found out during a call? Enter the amount here so everyone knows.</small>
                                </div>
                                
                                <div className="mb-2">
                                    <label className="form-label fw-medium text-dark">Lead Temperature</label>
                                    <div className="d-flex gap-2">
                                        {['HOT', 'WARM', 'COLD'].map(temp => (
                                            <button
                                                key={temp}
                                                type="button"
                                                className={`btn btn-sm flex-fill ${editForm.temperature === temp ? 'btn-' + (temp === 'HOT' ? 'danger' : temp === 'WARM' ? 'warning' : 'info') : 'btn-outline-secondary'}`}
                                                onClick={() => setEditForm({...editForm, temperature: temp})}
                                            >
                                                {temp === 'HOT' ? '🔥 Hot' : temp === 'WARM' ? '☀️ Warm' : '❄️ Cold'}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer border-top-0 pt-0 px-4 pb-4">
                                <button type="button" className="btn btn-light rounded-pill px-4" onClick={() => setShowEditModal(false)}>Cancel</button>
                                <button 
                                    type="button" 
                                    className="btn btn-primary rounded-pill px-4"
                                    disabled={saving}
                                    onClick={async () => {
                                        setSaving(true);
                                        try {
                                            // The backend requires a separate endpoint to update the status
                                            if (editForm.status !== client?.status) {
                                                await api.patch(`/api/leads/${id}/status`, {
                                                    status: editForm.status
                                                });
                                            }
                                            
                                            // Update budget and temperature
                                            await api.patch(`/api/leads/${id}`, {
                                                budget: Number(editForm.budget),
                                                temperature: editForm.temperature
                                            });
                                            
                                            window.location.reload();
                                        } catch (err) {
                                            console.error('Failed to update lead', err);
                                            alert('Error updating lead: ' + (err.response?.data?.message || err.message));
                                            setSaving(false);
                                        }
                                    }}
                                >
                                    {saving ? 'Saving...' : 'Save Updates'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )}
    </>);
};

export default ClientProfile;
