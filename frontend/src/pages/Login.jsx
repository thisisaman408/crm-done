import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../lib/api';

const Login = () => {
    useEffect(() => {
        document.body.classList.add('account-page', 'bg-white');
        return () => {
            document.body.classList.remove('account-page', 'bg-white');
        };
    }, []);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [roleId, setRoleId] = useState('ADMIN');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        
        try {
            // BrokerOS Auth Endpoint (BetterAuth)
            const response = await api.post('/api/auth/sign-in/email', {
                email,
                password,
                roleId
            });
            
            // Save token and user details based on BrokerOS response
            localStorage.setItem('token', response.data.token || response.data.access_token);
            if (response.data.user) {
                const userData = response.data.user;
                userData.roleCode = roleId; // Inject the selected role string (e.g. 'SALES_MANAGER') since the DB roleId is a UUID
                localStorage.setItem('user', JSON.stringify(userData));
            }
            
            // Redirect to dashboard
            navigate('/');
        } catch (err) {
            setError(err.response?.data?.message || 'Invalid email, role, or password. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="main-wrapper">
            <div className="overflow-hidden p-3 acc-vh">
                <div className="row vh-100 w-100 g-0">
                    <div className="col-lg-6 vh-100 overflow-y-auto overflow-x-hidden">
                        <div className="row">
                            <div className="col-md-10 mx-auto">
                                <form onSubmit={handleLogin} className="vh-100 d-flex justify-content-center flex-column p-4">
                                    <div className="text-center mb-4 auth-logo">
                                        <h2 className="fw-bold text-primary">Resyl-CRM</h2>
                                    </div>
                                    <div>
                                        <div className="mb-4">
                                            <h3 className="mb-2">Sign In</h3>
                                            <p className="mb-0">Access the Resyl-CRM panel using your email and passcode.</p>
                                        </div>
                                        
                                        {error && (
                                            <div className="alert alert-danger mb-3" role="alert">
                                                {error}
                                            </div>
                                        )}

                                        <div className="mb-3">
                                            <label className="form-label">Role</label>
                                            <select 
                                                className="form-control form-select"
                                                value={roleId}
                                                onChange={(e) => setRoleId(e.target.value)}
                                                required
                                            >
                                                <option value="ADMIN">Admin</option>
                                                <option value="DIRECTOR">Director</option>
                                                <option value="BUSINESS_MANAGER">Business Manager</option>
                                                <option value="SALES_MANAGER">Sales Manager</option>
                                                <option value="SALES_EXECUTIVE">Sales Executive</option>
                                                <option value="PRE_SALES_MANAGER">Pre-Sales Manager</option>
                                                <option value="PRE_SALES">Pre-Sales</option>
                                                <option value="POST_SALES_MANAGER">Post-Sales Manager</option>
                                                <option value="POST_SALES">Post-Sales</option>
                                                <option value="FINANCE">Finance</option>
                                                <option value="MARKETING">Marketing</option>
                                            </select>
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">Email Address</label>
                                            <input 
                                                type="email" 
                                                className="form-control" 
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <label className="form-label">Password</label>
                                            <div className="pass-group">
                                                <input 
                                                    type={showPassword ? "text" : "password"} 
                                                    className="form-control pass-input" 
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    required
                                                />
                                                <span 
                                                    className={`ti toggle-password ${showPassword ? 'ti-eye' : 'ti-eye-off'}`}
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    style={{ cursor: 'pointer' }}
                                                ></span>
                                            </div>
                                        </div>
                                        
                                        <div className="d-flex align-items-center justify-content-between mb-4">
                                            <div className="form-check form-check-md d-flex align-items-center">
                                                <input className="form-check-input mt-0" type="checkbox" id="checkebox-md" defaultChecked />
                                                <label className="form-check-label text-dark ms-1" htmlFor="checkebox-md">
                                                    Remember Me
                                                </label>
                                            </div>
                                            <div className="text-end">
                                                <a href="#" className="link-danger fw-medium link-hover">Forgot Password?</a>
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                                                {loading ? 'Signing In...' : 'Sign In'}
                                            </button>
                                        </div>
                                    </div>
                                    
                                    <div className="text-center mt-5 pb-4">
                                        <p className="text-dark mb-0">Copyright &copy; {new Date().getFullYear()} - Resyl-CRM</p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 account-bg-01"></div>
                </div>
            </div>
        </div>
    );
};

export default Login;
