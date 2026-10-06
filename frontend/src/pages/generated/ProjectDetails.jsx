import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import api from '../../lib/api';

const ProjectDetails = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isUploading, setIsUploading] = useState(false);
    const [userRole, setUserRole] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [assignLoading, setAssignLoading] = useState(false);
    const [updatingStatus, setUpdatingStatus] = useState(null);
    const [availableUsers, setAvailableUsers] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState("");

    const fetchProject = async () => {
        try {
            setLoading(true);
            setTimeout(() => {
                setLoading(prev => {
                    if (prev) console.warn("Failsafe triggered for Project Details.");
                    return false;
                });
            }, 3000);
            
            const res = await api.get(`/api/inventory/projects/${id}`);
            setProject(res.data);
        } catch (err) {
            console.error('Failed to fetch project details:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProject();

        const userJson = localStorage.getItem('user');
        if (userJson) {
            try {
                setUserRole(JSON.parse(userJson).roleCode);
            } catch (e) {}
        }

        const fetchUsers = async () => {
            try {
                const res = await api.get('/api/users');
                setAvailableUsers(res.data);
            } catch (err) {}
        };
        fetchUsers();
    }, [id]);

    if (loading) {
        return <div className="content d-flex justify-content-center mt-5"><div className="spinner-border text-primary" role="status"></div></div>;
    }

    if (!project) {
        return <div className="content mt-5 text-center"><h4>Project not found</h4><Link to="/projects" className="btn btn-primary mt-3">Back to Projects</Link></div>;
    }

    return (
<div className="content pb-0">

				
				<div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
					<div>
						<h4 className="mb-1">{project.name || 'Project Details'}<span className="badge badge-soft-primary ms-2">{project._count?.towers || 0} Towers</span></h4>
						<nav aria-label="breadcrumb">
							<ol className="breadcrumb mb-0 p-0">
								<li className="breadcrumb-item"><Link to="/projects">Projects</Link></li>
								<li className="breadcrumb-item active" aria-current="page">{project.name}</li>
							</ol>
						</nav>
					</div>
					<div className="gap-2 d-flex align-items-center flex-wrap">
						<div className="dropdown">
							<a href="#" className="dropdown-toggle btn btn-outline-light px-2 shadow"
								data-bs-toggle="dropdown"><i className="ti ti-package-export me-2"></i>Export</a>
							<div className="dropdown-menu  dropdown-menu-end">
								<ul>
									<li>
										<a href="#" className="dropdown-item"><i
												className="ti ti-file-type-pdf me-1"></i>Export as
											PDF</a>
									</li>
									<li>
										<a href="#" className="dropdown-item"><i
												className="ti ti-file-type-xls me-1"></i>Export as
											Excel </a>
									</li>
								</ul>
							</div>
						</div>
						<a href="#" className="btn btn-icon btn-outline-light shadow"
							data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Refresh"
							data-bs-original-title="Refresh"><i className="ti ti-refresh"></i></a>
						<a href="#" className="btn btn-icon btn-outline-light shadow"
							data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Collapse"
							data-bs-original-title="Collapse" id="collapse-header"><i
								className="ti ti-transition-top"></i></a>
					</div>
				</div>
				

				<div className="row">
					<div className="col-md-12">

						<div className="mb-3">
							<Link to="/projects"><i className="ti ti-arrow-narrow-left me-1"></i>Back to Projects</Link>
						</div>

						<div className="card">
							<div className="card-body pb-2">
								<div className="d-flex align-items-center justify-content-between flex-wrap">
									<div className="d-flex align-items-center mb-2">
										<div className="avatar avatar-xxl p-2 avatar-rounded border me-3 flex-shrink-0">
											<img src={project.thumbnailUrl || "assets/img/priority/truellysel.svg"} alt="img"
												className="avatar avtart-sm rounded-circle" /> 
										</div>
										<div>
											<h5 className="mb-1">{project.name}</h5>
											<p className="mb-1">Project Id : <span
													className="text-dark fw-medium">{project.id.slice(0, 8)}...</span></p>
											<div className="d-flex align-items-center">
												<span
													className="badge badge-sm badge-soft-danger fw-medium me-2 border-0"><i
														className="ti ti-arrow-up-right me-1"></i>High</span>
												<span className="badge badge-sm bg-success">{project.status ? project.status.replace(/_/g, ' ') : 'ACTIVE'}</span>
											</div>
										</div>
									</div>
									<div className="d-flex align-items-center flex-wrap gap-2">
                                        {project.isCpProject && (
										    <span className="py-1 px-2 fs-12 bg-soft-info rounded text-info fw-medium"><i
												className="ti ti-users-group me-1"></i>CP Project</span>
                                        )}
										
									</div>
								</div>
							</div>
						</div>
						

					</div>

					
					<div className="col-xl-4">
						<div className="card">
							<div className="card-body p-3">
								<h6 className="mb-3 fw-semibold">Project Information</h6>
								<div className="border-bottom mb-3 pb-3">
									<div className="d-flex align-items-center justify-content-between mb-2">
										<p className="mb-0">Project Type</p>
										<p className="mb-0 text-dark fw-medium"> {project.type || 'N/A'} </p>
									</div>
									<div className="d-flex align-items-center justify-content-between mb-2">
										<p className="mb-0">CP Project</p>
										<p className="mb-0 text-dark fw-medium"> {project.isCpProject ? 'Yes' : 'No'} </p>
									</div>
									<div className="d-flex align-items-center justify-content-between mb-2">
										<p className="mb-0">City</p>
										<p className="mb-0 text-dark fw-medium">{project.city || 'N/A'}</p>
									</div>
									<div className="d-flex align-items-center justify-content-between mb-2">
										<p className="mb-0">State</p>
										<p className="mb-0 text-dark fw-medium">{project.state || 'N/A'}</p>
									</div>
									<div className="d-flex align-items-center justify-content-between mb-2">
										<p className="mb-0">Total Towers</p>
										<p className="mb-0 text-dark fw-medium">{project.totalTowers || project._count?.towers || 0}</p>
									</div>
									<div className="d-flex align-items-center justify-content-between mb-2">
										<p className="mb-0">Total Units</p>
										<p className="mb-0 text-dark fw-medium">{project.totalUnits || 'N/A'}</p>
									</div>
								</div>
								
								<div className="d-flex align-items-center justify-content-between mb-3">
                                    <h6 className="mb-0 fw-semibold">Assignments</h6>
                                    {['ADMIN', 'SOURCING_MANAGER', 'CLOSING_MANAGER', 'SALES_MANAGER'].includes(userRole) && (
                                        <button 
                                            className="btn btn-sm btn-outline-primary"
                                            onClick={() => setShowModal(true)}
                                        >
                                            <i className="ti ti-plus me-1"></i>Assign
                                        </button>
                                    )}
                                </div>
								<div className="border rounded mb-3 bg-light p-2">
                                    {project.projectAssignments && project.projectAssignments.length > 0 ? (
                                        <ul className="list-group list-group-flush bg-transparent">
                                            {project.projectAssignments.map(assignment => (
                                                <li key={assignment.id} className="list-group-item bg-transparent px-0 py-2 d-flex align-items-center">
                                                    <span className="avatar avatar-sm rounded-circle me-2 bg-primary text-white d-flex align-items-center justify-content-center">
                                                        {assignment.user?.name?.charAt(0) || 'U'}
                                                    </span>
                                                    <div>
                                                        <p className="mb-0 fw-medium">{assignment.user?.name || 'Unknown User'}</p>
                                                        <small className="text-muted">{assignment.user?.role?.code || 'NO_ROLE'}</small>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <div className="text-center text-muted p-3">
                                            <i className="ti ti-users mb-2" style={{ fontSize: '1.5rem' }}></i>
                                            <p className="mb-0 fs-13">No users assigned to this project yet.</p>
                                        </div>
                                    )}
								</div>
							</div>
						</div>
					</div>
					

					
					<div className="col-xl-8">
						<div className="mb-3 pb-3 border-bottom">
							<h5 className="mb-3">Project Pipeline Status</h5>
							<div className="d-flex flex-wrap gap-2 mb-4">
                                {['UPCOMING', 'UNDER_CONSTRUCTION', 'READY_TO_MOVE', 'COMPLETED'].map(status => (
                                    <button 
                                        key={status}
                                        disabled={updatingStatus !== null}
                                        className={`btn ${project.status === status ? 'btn-primary' : 'btn-outline-primary'}`}
                                        onClick={async () => {
                                            try {
                                                setUpdatingStatus(status);
                                                await api.patch(`/api/inventory/projects/${id}`, { status });
                                                setProject(prev => ({ ...prev, status }));
                                            } catch (e) {
                                                alert('Failed to update status: ' + (e.response?.data?.message || e.message));
                                            } finally {
                                                setUpdatingStatus(null);
                                            }
                                        }}
                                    >
                                        {updatingStatus === status && <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>}
                                        {status.replace(/_/g, ' ')}
                                    </button>
                                ))}
                            </div>
                            <hr />
                            <h5 className="card-title mt-4 mb-3">Project Thumbnail (Image Upload)</h5>
                            <div className="d-flex align-items-start gap-4 mb-4">
                                {project.thumbnailUrl ? (
                                    <img src={project.thumbnailUrl} alt="Thumbnail" className="img-thumbnail" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
                                ) : (
                                    <div className="bg-light d-flex align-items-center justify-content-center text-muted border rounded" style={{ width: '150px', height: '150px' }}>
                                        No Image
                                    </div>
                                )}
                                <div className="flex-grow-1">
                                    <label className="form-label">Upload New Thumbnail</label>
                                    {isUploading ? (
                                        <button className="btn btn-primary form-control" type="button" disabled>
                                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                            Uploading Image...
                                        </button>
                                    ) : (
                                        <input type="file" className="form-control" accept="image/*" onChange={async (e) => {
                                            const file = e.target.files[0];
                                            if (!file) return;
                                            
                                            setIsUploading(true);
                                            const reader = new FileReader();
                                            reader.onloadend = async () => {
                                                try {
                                                    const base64 = reader.result;
                                                    await api.patch(`/api/inventory/projects/${id}`, { thumbnailUrl: base64 });
                                                    setProject(prev => ({ ...prev, thumbnailUrl: base64 }));
                                                    alert("Image uploaded successfully!");
                                                } catch(err) {
                                                    alert("Failed to upload image: " + (err.response?.data?.message || err.message));
                                                } finally {
                                                    setIsUploading(false);
                                                }
                                            };
                                            reader.readAsDataURL(file);
                                        }} />
                                    )}
                                    <small className="text-muted mt-2 d-block">Select an image to instantly upload and set it as the project thumbnail.</small>
                                </div>
                            </div>
						</div>
					</div>
				</div>
    
            {showModal && (
                <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Assign User to Project</h5>
                                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                            </div>
                            <div className="modal-body">
                                <label className="form-label">Select User</label>
                                <select 
                                    className="form-select" 
                                    value={selectedUserId} 
                                    onChange={(e) => setSelectedUserId(e.target.value)}
                                >
                                    <option value="">-- Choose User --</option>
                                    {availableUsers
                                        .filter(u => userRole === 'SALES_MANAGER' ? u.role?.code === 'SALES_EXECUTIVE' : true)
                                        .map(u => (
                                        <option key={u.id} value={u.id}>
                                            {u.name} {userRole !== 'SALES_MANAGER' ? `- ${u.role?.name || u.role?.code?.replace('_', ' ')}` : ''}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-light" disabled={assignLoading} onClick={() => setShowModal(false)}>Cancel</button>
                                <button type="button" className="btn btn-primary" disabled={assignLoading} onClick={async () => {
                                    if (!selectedUserId) return alert('Please select a user');
                                    const userToAssign = availableUsers.find(u => u.id === selectedUserId);
                                    if (!userToAssign) return;
                                    
                                    const existingSourcing = project.projectAssignments?.filter(a => a.user?.role?.code === 'SOURCING_MANAGER').map(a => a.userId) || [];
                                    const existingClosing = project.projectAssignments?.filter(a => a.user?.role?.code === 'CLOSING_MANAGER').map(a => a.userId) || [];
                                    const existingSales = project.projectAssignments?.filter(a => a.user?.role?.code === 'SALES_EXECUTIVE').map(a => a.userId) || [];
                                    
                                    let newSourcing = [...existingSourcing];
                                    let newClosing = [...existingClosing];
                                    let newSales = [...existingSales];
                                    
                                    if (userToAssign.role?.code === 'SOURCING_MANAGER') newSourcing.push(selectedUserId);
                                    else if (userToAssign.role?.code === 'CLOSING_MANAGER') newClosing.push(selectedUserId);
                                    else if (userToAssign.role?.code === 'SALES_EXECUTIVE') newSales.push(selectedUserId);
                                    else newSourcing.push(selectedUserId); // fallback
                                    
                                    try {
                                        setAssignLoading(true);
                                        await api.post(`/api/inventory/projects/${id}/assign`, {
                                            sourcingManagerIds: [...new Set(newSourcing)],
                                            closingManagerIds: [...new Set(newClosing)],
                                            salesExecIds: [...new Set(newSales)]
                                        });
                                        setShowModal(false);
                                        setSelectedUserId("");
                                        // fetch latest project info directly to prevent full screen refresh
                                        await fetchProject();
                                    } catch (err) {
                                        alert("Failed to assign user: " + (err.response?.data?.message || err.message));
                                    } finally {
                                        setAssignLoading(false);
                                    }
                                }}>
                                    {assignLoading && <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>}
                                    Assign
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectDetails;
