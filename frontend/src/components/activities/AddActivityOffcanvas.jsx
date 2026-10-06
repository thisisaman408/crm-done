import React, { useState } from 'react';
import api from '../../lib/api';

const AddActivityOffcanvas = ({ leads, users, onSuccess }) => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData(e.target);
        const type = formData.get('type');
        const leadId = formData.get('leadId');
        
        try {
            const selectedLead = leads.find(l => l.id === leadId);
            const ownerId = formData.get('ownerId');
            const fallbackUserId = 'user-placeholder'; // In real app, get from auth context
            const userId = ownerId || selectedLead?.assignedUser?.id || fallbackUserId;
            
            if (type === 'Meeting') {
                const projectId = selectedLead?.interestedProject?.id || 'project-placeholder';
                await api.post(`/api/leads/${leadId}/site-visits`, {
                    scheduledDate: new Date(formData.get('date')).toISOString(),
                    status: 'SCHEDULED',
                    meetingNotes: formData.get('notes') || '',
                    userId: userId,
                    projectId: projectId
                });
            } else {
                // Task or Follow Up
                await api.post(`/api/leads/${leadId}/follow-ups`, {
                    scheduledDate: new Date(formData.get('date')).toISOString(),
                    status: 'SCHEDULED',
                    remarks: formData.get('notes') || '',
                    type: type === 'Call' ? 'CALL' : 'WHATSAPP',
                    userId: userId
                });
            }
            
            alert('Activity created successfully!');
            e.target.reset();
            if (onSuccess) onSuccess();
            
            // Close offcanvas
            try {
                const offcanvasEl = document.getElementById('offcanvas_add');
                if (offcanvasEl && window.bootstrap) {
                    const bsOffcanvas = window.bootstrap.Offcanvas.getInstance(offcanvasEl) || new window.bootstrap.Offcanvas(offcanvasEl);
                    bsOffcanvas.hide();
                } else {
                    document.querySelector('#offcanvas_add .btn-close')?.click();
                }
            } catch (e) {
                document.querySelector('#offcanvas_add .btn-close')?.click();
            }
        } catch (err) {
            console.error('Failed to create activity:', err);
            alert(`Error: ${err.response?.data?.message || err.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="offcanvas offcanvas-end offcanvas-large" tabIndex="-1" id="offcanvas_add">
            <div className="offcanvas-header border-bottom">
                <h5 className="mb-0">Add New Activity</h5>
                <button type="button" className="btn-close custom-btn-close border p-1 me-0 d-flex align-items-center justify-content-center rounded-circle" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <label className="form-label">Related Lead <span className="text-danger">*</span></label>
                            <select name="leadId" className="form-select" required>
                                <option value="">Select a Lead</option>
                                {leads.map(lead => (
                                    <option key={lead.id} value={lead.id}>{lead.firstName} {lead.lastName}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col-md-12 mb-3">
                            <label className="form-label">Activity Type <span className="text-danger">*</span></label>
                            <select name="type" className="form-select" required>
                                <option value="Meeting">Meeting (Site Visit)</option>
                                <option value="Task">Task (Follow up)</option>
                                <option value="Call">Call</option>
                            </select>
                        </div>
                        <div className="col-md-12 mb-3">
                            <label className="form-label">Assign To (Owner) <span className="text-danger">*</span></label>
                            <select name="ownerId" className="form-select" required>
                                <option value="">Select an Owner</option>
                                {users && users
                                    .filter(u => !u.role?.code || ['SALES_EXECUTIVE', 'CLOSING_MANAGER', 'PRE_SALES_AGENT'].includes(u.role?.code))
                                    .map(user => (
                                    <option key={user.id} value={user.id}>
                                        {user.profile?.firstName ? `${user.profile.firstName} ${user.profile.lastName || ''}`.trim() : (user.name || user.username)}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="col-md-12 mb-3">
                            <label className="form-label">Due Date <span className="text-danger">*</span></label>
                            <input type="datetime-local" name="date" className="form-control" required />
                        </div>
                        <div className="col-md-12 mb-3">
                            <label className="form-label">Notes</label>
                            <textarea name="notes" className="form-control" rows="3" placeholder="Enter details about this activity..."></textarea>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-end mt-4">
                        <button type="button" data-bs-dismiss="offcanvas" className="btn btn-light me-2">Cancel</button>
                        <button type="submit" className="btn btn-primary" disabled={loading}>
                            {loading ? <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> : null}
                            Create Activity
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddActivityOffcanvas;
