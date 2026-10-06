import React, { useState, useEffect } from 'react';
import api from '../lib/api';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [addLoading, setAddLoading] = useState(false);
    const navigate = useNavigate();

    const fetchProjects = async () => {
        try {
            console.log("Fetching projects start");
            setLoading(true);
            
            // Failsafe to ensure loading spinner doesn't get stuck forever
            setTimeout(() => {
                setLoading(prev => {
                    if (prev) console.warn("Failsafe triggered: forcefully stopping loading spinner");
                    return false;
                });
            }, 3000);

            const res = await api.get('/api/inventory/projects');
            console.log("Fetching projects success", res.data);
            const data = res.data?.data || res.data || [];
            setProjects(Array.isArray(data) ? data : []);
        } catch (err) {
            console.error("Failed to fetch projects ERROR", err);
        } finally {
            console.log("Fetching projects finally block reached");
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    const handleAddProject = async (e) => {
        e.preventDefault();
        setAddLoading(true);
        const formData = new FormData(e.target);
        const body = {
            name: formData.get('name'),
            location: formData.get('location'),
            city: formData.get('city'),
            description: formData.get('description'),
            status: formData.get('status') || 'ACTIVE',
            type: formData.get('type') || 'RESIDENTIAL',
        };

        try {
            await api.post('/api/inventory/projects', body);
            e.target.reset();
            fetchProjects();
            // Close offcanvas
            try {
                const offcanvasEl = document.getElementById('offcanvas_add_project');
                if (offcanvasEl && window.bootstrap) {
                    const bsOffcanvas = window.bootstrap.Offcanvas.getInstance(offcanvasEl) || new window.bootstrap.Offcanvas(offcanvasEl);
                    bsOffcanvas.hide();
                } else {
                    document.querySelector('#offcanvas_add_project .btn-close')?.click();
                }
            } catch (closeErr) {
                document.querySelector('#offcanvas_add_project .btn-close')?.click();
            }
        } catch (err) {
            console.error("Failed to add project", err);
            alert(`Error: ${err.response?.data?.message || err.message}`);
        } finally {
            setAddLoading(false);
        }
    };

    const getStatusColor = (status) => {
        switch (status?.toUpperCase()) {
            case 'ACTIVE': return 'success';
            case 'UPCOMING': return 'info';
            case 'COMPLETED': return 'secondary';
            case 'ON_HOLD': return 'warning';
            default: return 'primary';
        }
    };

    const getTypeIcon = (type) => {
        switch (type?.toUpperCase()) {
            case 'RESIDENTIAL': return 'ti-building';
            case 'COMMERCIAL': return 'ti-briefcase';
            case 'MIXED': return 'ti-building-community';
            default: return 'ti-home';
        }
    };

    return (
        <div className="content">
            {/* Page Header */}
            <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                <div>
                    <h4 className="mb-1">Projects<span className="badge badge-soft-primary ms-2">{projects.length}</span></h4>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0 p-0">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Projects</li>
                        </ol>
                    </nav>
                </div>
                <div className="gap-2 d-flex align-items-center flex-wrap">
                    <div className="dropdown">
                        <a href="#" className="dropdown-toggle btn btn-outline-light px-2 shadow"
                            data-bs-toggle="dropdown"><i className="ti ti-package-export me-2"></i>Export</a>
                        <div className="dropdown-menu dropdown-menu-end">
                            <ul>
                                <li><a href="#" className="dropdown-item"><i className="ti ti-file-type-pdf me-1"></i>Export as PDF</a></li>
                                <li><a href="#" className="dropdown-item"><i className="ti ti-file-type-xls me-1"></i>Export as Excel</a></li>
                            </ul>
                        </div>
                    </div>
                    <button onClick={fetchProjects} className="btn btn-icon btn-outline-light shadow" title="Refresh">
                        <i className="ti ti-refresh"></i>
                    </button>
                    <a href="#" className="btn btn-primary" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvas_add_project"><i className="ti ti-square-rounded-plus-filled me-1"></i>Add New Project</a>
                </div>
            </div>

            {/* Project Grid */}
            {loading ? (
                <div className="text-center p-5">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : projects.length === 0 ? (
                <div className="text-center p-5 bg-white rounded shadow-sm">
                    <i className="ti ti-building-skyscraper fs-48 text-muted mb-3 d-block"></i>
                    <h5 className="text-muted">No projects found</h5>
                    <p className="text-muted mb-0">Create your first project to get started with inventory management.</p>
                </div>
            ) : (
                <div className="row">
                    {projects.map((project, idx) => (
                        <div className="col-xxl-3 col-xl-4 col-md-6" key={project.id || idx}>
                            <div className="card border shadow" style={{ cursor: 'pointer' }} onClick={() => navigate(`/projects/${project.id}`)}>
                                <div className="card-body">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <div className="d-flex align-items-center gap-2">
                                            <span className={`badge badge-soft-${getStatusColor(project.status)} fs-12`}>
                                                {project.status || 'ACTIVE'}
                                            </span>
                                            <span className="badge badge-soft-dark fs-12">
                                                {project.type || 'Residential'}
                                            </span>
                                        </div>
                                        <div className="dropdown table-action" onClick={(e) => e.stopPropagation()}>
                                            <a href="#" className="action-icon btn btn-icon btn-sm btn-outline-light shadow"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="ti ti-dots-vertical"></i>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href={`/projects/${project.id}`}>
                                                    <i className="ti ti-eye text-blue-light me-1"></i> View Details
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="avatar avatar-md flex-shrink-0 me-2 bg-primary rounded text-white d-flex align-items-center justify-content-center fs-16">
                                            <i className={`ti ${getTypeIcon(project.type)}`}></i>
                                        </div>
                                        <div>
                                            <h6 className="fw-semibold fs-15 mb-1">{project.name}</h6>
                                            {project.description && (
                                                <p className="text-muted mb-0 fs-12 text-truncate" style={{ maxWidth: '200px' }}>
                                                    {project.description}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="d-flex flex-column gap-2 mb-3">
                                        {project.location && (
                                            <p className="text-default d-inline-flex align-items-center mb-0 fs-13">
                                                <i className="ti ti-map-pin text-dark me-2"></i>{project.location}
                                            </p>
                                        )}
                                        {project.city && (
                                            <p className="text-default d-inline-flex align-items-center mb-0 fs-13">
                                                <i className="ti ti-building-community text-dark me-2"></i>{project.city}
                                            </p>
                                        )}
                                    </div>

                                    <div className="d-flex align-items-center justify-content-between pt-3 border-top">
                                        <div className="d-flex gap-3">
                                            {project.towerCount !== undefined && (
                                                <span className="fs-12 text-muted">
                                                    <i className="ti ti-building me-1"></i>{project.towerCount} Towers
                                                </span>
                                            )}
                                            {project.unitCount !== undefined && (
                                                <span className="fs-12 text-muted">
                                                    <i className="ti ti-door me-1"></i>{project.unitCount} Units
                                                </span>
                                            )}
                                        </div>
                                        <span className="fs-12 text-muted">
                                            {project.createdAt ? new Date(project.createdAt).toLocaleDateString() : ''}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Add Project Offcanvas */}
            <div className="offcanvas offcanvas-end offcanvas-large" tabIndex="-1" id="offcanvas_add_project">
                <div className="offcanvas-header border-bottom">
                    <h5 className="mb-0">Add New Project</h5>
                    <button type="button" className="btn-close custom-btn-close border p-1 me-0 d-flex align-items-center justify-content-center rounded-circle" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <form onSubmit={handleAddProject}>
                        <div className="row">
                            <div className="col-md-12 mb-3">
                                <label className="form-label">Project Name <span className="text-danger">*</span></label>
                                <input type="text" name="name" className="form-control" placeholder="e.g. Sunrise Heights" required />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Location</label>
                                <input type="text" name="location" className="form-control" placeholder="e.g. Baner Road" />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label">City</label>
                                <input type="text" name="city" className="form-control" placeholder="e.g. Pune" />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Type</label>
                                <select name="type" className="form-select">
                                    <option value="RESIDENTIAL">Residential</option>
                                    <option value="COMMERCIAL">Commercial</option>
                                    <option value="MIXED">Mixed Use</option>
                                </select>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Status</label>
                                <select name="status" className="form-select">
                                    <option value="ACTIVE">Active</option>
                                    <option value="UPCOMING">Upcoming</option>
                                    <option value="COMPLETED">Completed</option>
                                    <option value="ON_HOLD">On Hold</option>
                                </select>
                            </div>
                            <div className="col-md-12 mb-3">
                                <label className="form-label">Description</label>
                                <textarea name="description" className="form-control" rows="3" placeholder="Describe the project..."></textarea>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-end mt-4">
                            <button type="button" data-bs-dismiss="offcanvas" className="btn btn-light me-2">Cancel</button>
                            <button type="submit" className="btn btn-primary" disabled={addLoading}>
                                {addLoading ? 'Creating...' : 'Create Project'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Projects;
