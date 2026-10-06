import React, { useState, useEffect } from 'react';
import api from '../../lib/api';

const EditActivityOffcanvas = ({ leads, users, activity, onSuccess }) => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        type: 'Task',
        leadId: '',
        date: '',
        notes: '',
        status: 'SCHEDULED',
        ownerId: ''
    });

    useEffect(() => {
        if (activity) {
            // Format date for datetime-local input
            let formattedDate = '';
            if (activity.date) {
                const dateObj = new Date(activity.date);
                if (!isNaN(dateObj.getTime())) {
                    // Extract local timezone date string compatible with datetime-local
                    const tzOffset = dateObj.getTimezoneOffset() * 60000; // offset in milliseconds
                    const localISOTime = (new Date(dateObj.getTime() - tzOffset)).toISOString().slice(0, 16);
                    formattedDate = localISOTime;
                }
            }
            
            setFormData({
                type: activity.type || 'Task',
                leadId: activity.leadId || '',
                date: formattedDate,
                notes: activity.notes || '',
                status: activity.status || 'SCHEDULED',
                ownerId: activity.ownerId || ''
            });
        }
    }, [activity]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        try {
            if (formData.type === 'Meeting') {
                await api.patch(`/api/leads/site-visits/${activity.id}`, {
                    scheduledDate: new Date(formData.date).toISOString(),
                    status: formData.status,
                    notes: formData.notes,
                    leadId: formData.leadId,
                    salesExecId: formData.ownerId
                });
            } else if (formData.type === 'Task') {
                await api.patch(`/api/leads/follow-ups/${activity.id}`, {
                    scheduledDate: new Date(formData.date).toISOString(),
                    status: formData.status,
                    notes: formData.notes,
                    leadId: formData.leadId,
                    userId: formData.ownerId
                });
            } else {
                alert("Cannot edit Call records directly here.");
                setLoading(false);
                return;
            }
            
            alert('Activity updated successfully!');
            if (onSuccess) onSuccess();
            
            // Close offcanvas
            try {
                const offcanvasEl = document.getElementById('offcanvas_edit');
                if (offcanvasEl && window.bootstrap) {
                    const bsOffcanvas = window.bootstrap.Offcanvas.getInstance(offcanvasEl) || new window.bootstrap.Offcanvas(offcanvasEl);
                    bsOffcanvas.hide();
                } else {
                    document.querySelector('#offcanvas_edit .btn-close')?.click();
                }
            } catch (e) {
                document.querySelector('#offcanvas_edit .btn-close')?.click();
            }
        } catch (err) {
            console.error('Failed to update activity:', err);
            alert(`Error: ${err.response?.data?.message || err.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="offcanvas offcanvas-end offcanvas-large" tabIndex="-1" id="offcanvas_edit">
            <div className="offcanvas-header border-bottom">
                <h5 className="mb-0">Edit Activity</h5>
                <button type="button" className="btn-close custom-btn-close border p-1 me-0 d-flex align-items-center justify-content-center rounded-circle" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <label className="form-label">Related Lead</label>
                            <select name="leadId" className="form-select" value={formData.leadId} onChange={handleChange}>
                                <option value="">Select a Lead</option>
                                {leads && leads.map(lead => (
                                    <option key={lead.id} value={lead.id}>{lead.firstName} {lead.lastName}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col-md-12 mb-3">
                            <label className="form-label">Activity Type</label>
                            <select name="type" className="form-select" value={formData.type} disabled>
                                <option value="Meeting">Meeting (Site Visit)</option>
                                <option value="Task">Task (Follow up)</option>
                                <option value="Call">Call</option>
                            </select>
                            <small className="text-muted">Activity type cannot be changed. Create a new activity instead.</small>
                        </div>
                        <div className="col-md-12 mb-3">
                            <label className="form-label">Assign To (Owner) <span className="text-danger">*</span></label>
                            <select name="ownerId" className="form-select" value={formData.ownerId} onChange={handleChange} required>
                                <option value="">Select an Owner</option>
                                {users && users
                                    .filter(u => !u.role?.code || ['SALES_EXECUTIVE', 'CLOSING_MANAGER', 'PRE_SALES_AGENT'].includes(u.role?.code))
                                    .map(user => (
                                    <option key={user.id} value={user.id}>{user.name || user.username}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col-md-12 mb-3">
                            <label className="form-label">Due Date <span className="text-danger">*</span></label>
                            <input type="datetime-local" name="date" className="form-control" value={formData.date} onChange={handleChange} required />
                        </div>
                        <div className="col-md-12 mb-3">
                            <label className="form-label">Status <span className="text-danger">*</span></label>
                            <select name="status" className="form-select" value={formData.status} onChange={handleChange} required>
                                <option value="SCHEDULED">Scheduled</option>
                                <option value="COMPLETED">Completed</option>
                                <option value="CANCELLED">Cancelled</option>
                                {formData.type === 'Task' && <option value="MISSED">Missed</option>}
                                {formData.type === 'Meeting' && <option value="NO_SHOW">No Show (Missed)</option>}
                            </select>
                        </div>
                        <div className="col-md-12 mb-3">
                            <label className="form-label">Notes</label>
                            <textarea name="notes" className="form-control" rows="3" value={formData.notes} onChange={handleChange} placeholder="Enter details about this activity..."></textarea>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-end mt-4">
                        <button type="button" data-bs-dismiss="offcanvas" className="btn btn-light me-2">Cancel</button>
                        <button type="submit" className="btn btn-primary" disabled={loading || formData.type === 'Call'}>
                            {loading ? <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> : null}
                            Update Activity
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditActivityOffcanvas;
