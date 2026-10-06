import re

with open('src/pages/generated/ProjectDetails.jsx', 'r') as f:
    content = f.read()

# 1. Add states for modal
state_injection = """    const [isUploading, setIsUploading] = useState(false);
    const [userRole, setUserRole] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [availableUsers, setAvailableUsers] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState("");
"""
content = content.replace("    const [isUploading, setIsUploading] = useState(false);", state_injection)

# 2. Add useEffect to fetch user role and users list
effect_injection = """    useEffect(() => {
        const fetchProject = async () => {
            try {
                const res = await api.get(`/api/inventory/projects/${id}`);
                setProject(res.data);
            } catch (err) {
                console.error('Failed to fetch project details:', err);
            } finally {
                setLoading(false);
            }
        };
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
    }, [id]);"""

# Replace the old useEffect
old_effect = """    useEffect(() => {
        const fetchProject = async () => {
            try {
                const res = await api.get(`/api/inventory/projects/${id}`);
                setProject(res.data);
            } catch (err) {
                console.error('Failed to fetch project details:', err);
            } finally {
                setLoading(false);
            }
        };
        fetchProject();
    }, [id]);"""
content = content.replace(old_effect, effect_injection)

# 3. Replace the Assign button with one that checks role and opens modal
old_button = """                                    <button 
                                        className="btn btn-sm btn-outline-primary"
                                        onClick={() => {
                                            const userId = prompt("Enter User ID to assign (Sourcing/Closing Manager, or Sales Exec):");
                                            if (userId) {
                                                const existingSourcing = project.projectAssignments?.filter(a => a.user?.role?.code === 'SOURCING_MANAGER').map(a => a.userId) || [];
                                                const existingClosing = project.projectAssignments?.filter(a => a.user?.role?.code === 'CLOSING_MANAGER').map(a => a.userId) || [];
                                                const existingSales = project.projectAssignments?.filter(a => a.user?.role?.code === 'SALES_EXECUTIVE').map(a => a.userId) || [];
                                                
                                                api.post(`/api/inventory/projects/${id}/assign`, {
                                                    sourcingManagerIds: [...new Set([...existingSourcing, userId])],
                                                    closingManagerIds: existingClosing,
                                                    salesExecIds: existingSales
                                                }).then(() => {
                                                    alert("User assigned successfully! (Refresh to see changes)");
                                                    window.location.reload();
                                                }).catch(err => alert("Failed to assign user: " + (err.response?.data?.message || err.message)));
                                            }
                                        }}
                                    >
                                        <i className="ti ti-plus me-1"></i>Assign
                                    </button>"""

new_button = """                                    {['ADMIN', 'SOURCING_MANAGER', 'CLOSING_MANAGER'].includes(userRole) && (
                                        <button 
                                            className="btn btn-sm btn-outline-primary"
                                            onClick={() => setShowModal(true)}
                                        >
                                            <i className="ti ti-plus me-1"></i>Assign
                                        </button>
                                    )}"""
content = content.replace(old_button, new_button)

# 4. Add the Modal JSX at the bottom of the component
modal_jsx = """
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
                                    {availableUsers.map(u => (
                                        <option key={u.id} value={u.id}>{u.name} ({u.role?.code})</option>
                                    ))}
                                </select>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-light" onClick={() => setShowModal(false)}>Cancel</button>
                                <button type="button" className="btn btn-primary" onClick={() => {
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
                                    
                                    api.post(`/api/inventory/projects/${id}/assign`, {
                                        sourcingManagerIds: [...new Set(newSourcing)],
                                        closingManagerIds: [...new Set(newClosing)],
                                        salesExecIds: [...new Set(newSales)]
                                    }).then(() => {
                                        setShowModal(false);
                                        window.location.reload();
                                    }).catch(err => alert("Failed to assign user: " + (err.response?.data?.message || err.message)));
                                }}>Assign</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};"""

content = content.replace("        </div>\n    );\n};", modal_jsx)

with open('src/pages/generated/ProjectDetails.jsx', 'w') as f:
    f.write(content)

print("Patched ProjectDetails UI with a Modal and RBAC hiding")
