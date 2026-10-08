import React, { useEffect, useState } from 'react';
import api from '../../lib/api';

const ManageUsers = () => {
    const [users, setUsers] = useState([]);
    const [roles, setRoles] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const [usersRes, rolesRes] = await Promise.all([
                api.get('/api/users'),
                api.get('/api/users/roles')
            ]);
            setUsers(usersRes.data);
            setRoles(rolesRes.data);
        } catch (error) {
            console.error("Failed to load data", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleAssignManager = async (userId, managerId) => {
        try {
            await api.patch(`/api/users/${userId}/manager`, { managerId });
            fetchData();
        } catch (error) {
            console.error("Failed to assign manager", error);
            alert("Failed to assign manager. Check console.");
        }
    };

    if (loading) {
        return <div className="d-flex justify-content-center p-5"><div className="spinner-border text-primary" role="status"></div></div>;
    }

    return (
        <div className="content">
            <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                <div>
                    <h4 className="mb-1">Manage Users<span className="badge badge-soft-primary ms-2">{users.length}</span></h4>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0 p-0">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Manage Users</li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div className="card border-0 rounded-0 shadow-sm">
                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table table-hover table-striped mb-0">
                            <thead className="table-light">
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Current Manager</th>
                                    <th>Assign New Manager</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map(user => (
                                    <tr key={user.id}>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td><span className="badge badge-soft-info">{user.role?.name || user.roleId}</span></td>
                                        <td>
                                            {user.manager ? (
                                                <span className="badge badge-soft-success">{user.manager.name} ({user.manager.role?.code})</span>
                                            ) : (
                                                <span className="badge badge-soft-secondary">None</span>
                                            )}
                                        </td>
                                        <td>
                                            <select 
                                                className="form-select form-select-sm" 
                                                value={user.managerId || ''}
                                                onChange={(e) => handleAssignManager(user.id, e.target.value || null)}
                                            >
                                                <option value="">-- No Manager --</option>
                                                {users
                                                    .filter(u => u.id !== user.id) // Cannot assign self
                                                    .map(potentialManager => (
                                                    <option key={potentialManager.id} value={potentialManager.id}>
                                                        {potentialManager.name} ({potentialManager.role?.code})
                                                    </option>
                                                ))}
                                            </select>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageUsers;
