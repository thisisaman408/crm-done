import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, allowedRoles }) => {
    const token = localStorage.getItem('token');
    const userString = localStorage.getItem('user');
    
    if (!token) {
        return <Navigate to="/login" replace />;
    }

    if (allowedRoles && userString) {
        try {
            const user = JSON.parse(userString);
            const userRole = user?.roleCode || user?.role?.code || user?.roleId || user?.role; // Ensure we extract the string code
            
            console.log("=== ProtectedRoute Auth Check ===");
            console.log("1. Raw allowedRoles:", allowedRoles);
            console.log("2. Raw user object from localStorage:", user);
            console.log("3. Extracted userRole string:", userRole);
            console.log("4. Is userRole included in allowedRoles?", allowedRoles.includes(userRole));
            
            if (!allowedRoles.includes(userRole)) {
                console.error("Auth Failed! Redirecting to /unauthorized");
                return <Navigate to="/unauthorized" replace />;
            }
            console.log("Auth Succeeded! Rendering children.");
        } catch (e) {
            console.error("Failed to parse user data", e);
        }
    }

    return children;
};

export default ProtectedRoute;
