import re

with open('src/pages/generated/ProjectDetails.jsx', 'r') as f:
    content = f.read()

old_assignments_block = """								<h6 className="mb-3 fw-semibold">Assignments</h6>
								<div className="text-center text-muted p-4 border rounded mb-3 bg-light">
									<i className="ti ti-users mb-2" style={{ fontSize: '1.5rem' }}></i>
									<p className="mb-0 fs-13">Project assignments and team leader features are managed in the Team Management dashboard.</p>
								</div>"""

new_assignments_block = """								<div className="d-flex align-items-center justify-content-between mb-3">
                                    <h6 className="mb-0 fw-semibold">Assignments</h6>
                                    <button 
                                        className="btn btn-sm btn-outline-primary"
                                        onClick={() => {
                                            const userId = prompt("Enter User ID to assign (Sourcing/Closing Manager, or Sales Exec):");
                                            if (userId) {
                                                api.post(`/api/inventory/projects/${id}/assign`, {
                                                    sourcingManagerIds: [userId],
                                                    closingManagerIds: [],
                                                    salesExecIds: []
                                                }).then(() => {
                                                    alert("User assigned successfully! (Refresh to see changes)");
                                                    window.location.reload();
                                                }).catch(err => alert("Failed to assign user: " + (err.response?.data?.message || err.message)));
                                            }
                                        }}
                                    >
                                        <i className="ti ti-plus me-1"></i>Assign
                                    </button>
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
								</div>"""

content = content.replace(old_assignments_block, new_assignments_block)

with open('src/pages/generated/ProjectDetails.jsx', 'w') as f:
    f.write(content)

print("Patched Assignments Block")
