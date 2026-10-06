const fs = require('fs');

let appContent = fs.readFileSync('src/App.jsx', 'utf8');

const imports = `
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
`;

// Add imports after Leads import
appContent = appContent.replace("import Leads from './pages/Leads';", "import Leads from './pages/Leads';" + imports);

const routes = `
        <Route path="/contacts" element={<ProtectedRoute allowedRoles={ALL_INTERNAL}><Layout><Contacts /></Layout></ProtectedRoute>} />
        <Route path="/companies" element={<ProtectedRoute allowedRoles={MANAGEMENT_ONLY}><Layout><Companies /></Layout></ProtectedRoute>} />
        <Route path="/account-360" element={<ProtectedRoute allowedRoles={ALL_INTERNAL}><Layout><Account360 /></Layout></ProtectedRoute>} />
        <Route path="/relationship-map" element={<ProtectedRoute allowedRoles={ALL_INTERNAL}><Layout><RelationshipMap /></Layout></ProtectedRoute>} />
        <Route path="/deals" element={<ProtectedRoute allowedRoles={ALL_INTERNAL}><Layout><Deals /></Layout></ProtectedRoute>} />
        <Route path="/pipeline" element={<ProtectedRoute allowedRoles={ALL_INTERNAL}><Layout><Pipeline /></Layout></ProtectedRoute>} />
        <Route path="/proposals" element={<ProtectedRoute allowedRoles={ALL_INTERNAL}><Layout><Proposals /></Layout></ProtectedRoute>} />
        <Route path="/contracts" element={<ProtectedRoute allowedRoles={ALL_INTERNAL}><Layout><Contracts /></Layout></ProtectedRoute>} />
        <Route path="/estimations" element={<ProtectedRoute allowedRoles={ALL_INTERNAL}><Layout><Estimations /></Layout></ProtectedRoute>} />
        <Route path="/invoices" element={<ProtectedRoute allowedRoles={ALL_INTERNAL}><Layout><Invoices /></Layout></ProtectedRoute>} />
        <Route path="/payments" element={<ProtectedRoute allowedRoles={ALL_INTERNAL}><Layout><Payments /></Layout></ProtectedRoute>} />
        <Route path="/analytics" element={<ProtectedRoute allowedRoles={ALL_INTERNAL}><Layout><Analytics /></Layout></ProtectedRoute>} />
        <Route path="/activities" element={<ProtectedRoute allowedRoles={ALL_INTERNAL}><Layout><Activities /></Layout></ProtectedRoute>} />
        <Route path="/chat" element={<ProtectedRoute allowedRoles={ALL_INTERNAL}><Layout><Chat /></Layout></ProtectedRoute>} />
`;

appContent = appContent.replace('<Route path="/leads" element={<ProtectedRoute allowedRoles={ALL_INTERNAL}><Layout><Leads /></Layout></ProtectedRoute>} />', '<Route path="/leads" element={<ProtectedRoute allowedRoles={ALL_INTERNAL}><Layout><Leads /></Layout></ProtectedRoute>} />\n' + routes);

fs.writeFileSync('src/App.jsx', appContent);
console.log('App.jsx updated with all routes');
