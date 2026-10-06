import React, { useState } from 'react';

const Integrations = () => {
    const [formData, setFormData] = useState({
        whatsappApiKey: '',
        whatsappPhoneNumberId: '',
        metaAdsToken: '',
        metaPixelId: '',
        retellApiKey: '',
        vapiApiKey: ''
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call to save credentials
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
            setTimeout(() => setSuccess(false), 3000);
        }, 1000);
    };

    return (
        <div className="content">
            <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                <div>
                    <h4 className="mb-1">API Integrations</h4>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0 p-0">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Integrations</li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div className="row">
                <div className="col-md-8 mx-auto">
                    <div className="card shadow border">
                        <div className="card-header bg-white border-bottom">
                            <h5 className="mb-0">Connect External Accounts</h5>
                            <p className="text-muted fs-13 mb-0">Configure your Meta Ads, WhatsApp Business, and Voice AI credentials here.</p>
                        </div>
                        <div className="card-body">
                            {success && (
                                <div className="alert alert-success alert-dismissible fade show" role="alert">
                                    <strong>Success!</strong> API Credentials saved successfully.
                                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div>
                            )}

                            <form onSubmit={handleSubmit}>
                                <h6 className="mb-3 text-primary"><i className="ti ti-brand-whatsapp me-2"></i>WhatsApp Business API</h6>
                                <div className="mb-3">
                                    <label className="form-label">WhatsApp Access Token</label>
                                    <input type="password" name="whatsappApiKey" value={formData.whatsappApiKey} onChange={handleChange} className="form-control" placeholder="EAADX..." />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label">Phone Number ID</label>
                                    <input type="text" name="whatsappPhoneNumberId" value={formData.whatsappPhoneNumberId} onChange={handleChange} className="form-control" placeholder="1234567890" />
                                </div>

                                <hr className="my-4" />

                                <h6 className="mb-3 text-primary"><i className="ti ti-brand-meta me-2"></i>Meta Ads & Facebook</h6>
                                <div className="mb-3">
                                    <label className="form-label">Meta Ads Access Token</label>
                                    <input type="password" name="metaAdsToken" value={formData.metaAdsToken} onChange={handleChange} className="form-control" placeholder="EAADX..." />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label">Meta Pixel ID</label>
                                    <input type="text" name="metaPixelId" value={formData.metaPixelId} onChange={handleChange} className="form-control" placeholder="1234567890" />
                                </div>

                                <hr className="my-4" />

                                <h6 className="mb-3 text-primary"><i className="ti ti-headset me-2"></i>Voice AI Agents</h6>
                                <div className="mb-3">
                                    <label className="form-label">Retell AI API Key</label>
                                    <input type="password" name="retellApiKey" value={formData.retellApiKey} onChange={handleChange} className="form-control" placeholder="key_..." />
                                    <div className="form-text">Used for configuring autonomous calling agents.</div>
                                </div>
                                <div className="mb-4">
                                    <label className="form-label">Vapi Private API Key</label>
                                    <input type="password" name="vapiApiKey" value={formData.vapiApiKey} onChange={handleChange} className="form-control" placeholder="sk-..." />
                                </div>

                                <div className="d-flex justify-content-end">
                                    <button type="submit" className="btn btn-primary" disabled={loading}>
                                        {loading ? <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> : <i className="ti ti-device-floppy me-2"></i>}
                                        Save Integrations
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Integrations;
