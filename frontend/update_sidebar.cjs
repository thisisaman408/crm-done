const fs = require('fs');

let sidebarContent = fs.readFileSync('src/components/layout/Sidebar.jsx', 'utf8');

// Replace .html hrefs with root paths
const pages = [
    'contacts', 'companies', 'account-360', 'relationship-map', 'deals',
    'leads', 'pipeline', 'proposals', 'contracts', 'estimations', 'invoices',
    'payments', 'analytics', 'activities', 'chat', 'index'
];

pages.forEach(page => {
    const route = page === 'index' ? '/' : `/${page}`;
    // Link replacement logic
    const regex = new RegExp(`href=["']${page}\\.html(["'])`, 'g');
    sidebarContent = sidebarContent.replace(regex, `href="${route}"`);
});

// We should also replace href="/" to Link to="/" or at least make sure it doesn't hard-refresh.
// For now, if we just change the hrefs, react-router doesn't intercept <a> tags unless we use <Link>.
// But rewriting all <a> to <Link> in Sidebar is complex because of Bootstrap's data-bs-toggle which often relies on <a>.
// Let's just update the hrefs so they point to the correct React routes first!
fs.writeFileSync('src/components/layout/Sidebar.jsx', sidebarContent);
console.log('Sidebar.jsx routes updated');
