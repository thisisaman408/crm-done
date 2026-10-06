import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Layout from './components/layout/Layout';
import ScriptLoader from './components/ScriptLoader';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

// CRM Pages
import Account360 from './pages/Account360';
import Activities from './pages/Activities';
import Analytics from './pages/Analytics';
import Chat from './pages/Chat';
import Companies from './pages/Companies';
import Contacts from './pages/Contacts';
import Contracts from './pages/Contracts';
import Deals from './pages/Deals';
import Estimations from './pages/Estimations';
import ProjectDetails from './pages/generated/ProjectDetails';
import Invoices from './pages/Invoices';
import Leads from './pages/Leads';
import Payments from './pages/Payments';
import Pipeline from './pages/Pipeline';
import Projects from './pages/Projects';
import Proposals from './pages/Proposals';
import RelationshipMap from './pages/RelationshipMap';
import Tasks from './pages/Tasks';
import Integrations from './pages/Integrations';

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
        <Route path="/integrations" element={<ProtectedRoute allowedRoles={['ADMIN', 'DIRECTOR', 'PRE_SALES_MANAGER', 'POST_SALES_MANAGER', 'MANAGER']}><Layout><Integrations /></Layout></ProtectedRoute>} />
        
        {/* High Level Views - Management Only */}
        <Route path="/companies" element={<ProtectedRoute allowedRoles={MANAGEMENT_ONLY}><Layout><Companies /></Layout></ProtectedRoute>} />
        <Route path="/analytics" element={<ProtectedRoute allowedRoles={MANAGEMENT_ONLY}><Layout><Analytics /></Layout></ProtectedRoute>} />
        <Route path="/projects" element={<ProtectedRoute allowedRoles={MANAGEMENT_ONLY}><Layout><Projects /></Layout></ProtectedRoute>} />
        <Route path="/projects/:id" element={<ProtectedRoute allowedRoles={MANAGEMENT_ONLY}><Layout><ProjectDetails /></Layout></ProtectedRoute>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
