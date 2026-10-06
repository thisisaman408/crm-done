const fs = require('fs');

const cleanAppContent = `import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import ScriptLoader from './components/ScriptLoader';

// CRM Pages
import Leads from './pages/Leads';
import Contacts from './pages/Contacts';
import Companies from './pages/Companies';
import Account360 from './pages/Account360';
import RelationshipMap from './pages/RelationshipMap';
import Deals from './pages/Deals';
import Pipeline from './pages/Pipeline';
import Proposals from './pages/Proposals';
import Contracts from './pages/Contracts';
import Estimations from './pages/Estimations';
import Invoices from './pages/Invoices';
import Payments from './pages/Payments';
import Analytics from './pages/Analytics';
import Activities from './pages/Activities';
import Chat from './pages/Chat';
import Projects from './pages/Projects';
import Tasks from './pages/Tasks';

// Define our RBAC Roles
const ROLES = {
  ADMIN: 'ADMIN',
  DIRECTOR: 'DIRECTOR',
  MANAGER: 'MANAGER',
  SALES_EXEC: 'SALES_EXECUTIVE',
  PARTNER: 'CHANNEL_PARTNER'
};

const ALL_INTERNAL = [ROLES.ADMIN, ROLES.DIRECTOR, ROLES.MANAGER, ROLES.SALES_EXEC, 'SALES_MANAGER', 'BUSINESS_MANAGER', 'PRE_SALES_MANAGER', 'POST_SALES_MANAGER'];
const MANAGEMENT_ONLY = [ROLES.ADMIN, ROLES.DIRECTOR, ROLES.MANAGER, 'SALES_MANAGER', 'BUSINESS_MANAGER', 'PRE_SALES_MANAGER', 'POST_SALES_MANAGER'];

function App() {
  return (
    <BrowserRouter>
      <ScriptLoader />
      <Routes>
        <Route path="/login" element={<Login />} />
        
        {/* Authenticated Routes wrapped in Layout */}
        <Route path="/" element={<ProtectedRoute allowedRoles={ALL_INTERNAL}><Layout><Dashboard /></Layout></ProtectedRoute>} />
        
        {/* Sales & CRM Core - Available to all internal sales staff */}
        <Route path="/leads" element={<ProtectedRoute allowedRoles={ALL_INTERNAL}><Layout><Leads /></Layout></ProtectedRoute>} />
        <Route path="/contacts" element={<ProtectedRoute allowedRoles={ALL_INTERNAL}><Layout><Contacts /></Layout></ProtectedRoute>} />
        <Route path="/account-360" element={<ProtectedRoute allowedRoles={ALL_INTERNAL}><Layout><Account360 /></Layout></ProtectedRoute>} />
        <Route path="/relationship-map" element={<ProtectedRoute allowedRoles={ALL_INTERNAL}><Layout><RelationshipMap /></Layout></ProtectedRoute>} />
        <Route path="/deals" element={<ProtectedRoute allowedRoles={ALL_INTERNAL}><Layout><Deals /></Layout></ProtectedRoute>} />
        <Route path="/pipeline" element={<ProtectedRoute allowedRoles={ALL_INTERNAL}><Layout><Pipeline /></Layout></ProtectedRoute>} />
        <Route path="/proposals" element={<ProtectedRoute allowedRoles={ALL_INTERNAL}><Layout><Proposals /></Layout></ProtectedRoute>} />
        <Route path="/contracts" element={<ProtectedRoute allowedRoles={ALL_INTERNAL}><Layout><Contracts /></Layout></ProtectedRoute>} />
        <Route path="/estimations" element={<ProtectedRoute allowedRoles={ALL_INTERNAL}><Layout><Estimations /></Layout></ProtectedRoute>} />
        <Route path="/invoices" element={<ProtectedRoute allowedRoles={ALL_INTERNAL}><Layout><Invoices /></Layout></ProtectedRoute>} />
        <Route path="/payments" element={<ProtectedRoute allowedRoles={ALL_INTERNAL}><Layout><Payments /></Layout></ProtectedRoute>} />
        <Route path="/activities" element={<ProtectedRoute allowedRoles={ALL_INTERNAL}><Layout><Activities /></Layout></ProtectedRoute>} />
        <Route path="/chat" element={<ProtectedRoute allowedRoles={ALL_INTERNAL}><Layout><Chat /></Layout></ProtectedRoute>} />
        <Route path="/tasks" element={<ProtectedRoute allowedRoles={ALL_INTERNAL}><Layout><Tasks /></Layout></ProtectedRoute>} />
        
        {/* High Level Views - Management Only */}
        <Route path="/companies" element={<ProtectedRoute allowedRoles={MANAGEMENT_ONLY}><Layout><Companies /></Layout></ProtectedRoute>} />
        <Route path="/analytics" element={<ProtectedRoute allowedRoles={MANAGEMENT_ONLY}><Layout><Analytics /></Layout></ProtectedRoute>} />
        <Route path="/projects" element={<ProtectedRoute allowedRoles={MANAGEMENT_ONLY}><Layout><Projects /></Layout></ProtectedRoute>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
`;

fs.writeFileSync('src/App.jsx', cleanAppContent);
console.log('App.jsx has been cleaned and deduplicated.');
