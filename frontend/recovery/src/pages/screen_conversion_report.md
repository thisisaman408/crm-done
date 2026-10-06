# CRM Screen Conversion Report

This document outlines the manual analysis of the screen conversion process from the original HTML template to the dynamic React frontend.

## 1. What constitutes a "Correctly Converted Screen"?
A screen is **not** correctly converted just because it has a `.jsx` extension instead of `.html`. 
To be considered "Correctly Converted," a screen must:
1. **Have Zero Hardcoded Mock Data**: The massive HTML blocks of fake users (like "Marcus Whitfield") must be removed.
2. **Be Connected to the Backend API**: Data must flow exclusively from `api.get()` or `api.post()` using the backend's Prisma schema variables (e.g., `lead.firstName`, `lead.status`).
3. **Be Modular**: Massive 2,000-line files must be broken down into reusable components (like `<AIPanel />` or `<AddLeadOffcanvas />`).
4. **Preserve the UI Interactivity**: Toggles, sliders, charts, and dark mode must function natively within the React lifecycle.

---

## 2. The Original `html_template` Screens
The `/html_template/` folder contains a massive collection of **303 HTML files**. These can be broadly categorized into:
* **Core CRM Modules**: `leads.html`, `contacts.html`, `companies.html`, `deals.html`, `projects.html`, `tasks.html`, `pipeline.html`
* **Dashboards**: `dashboard.html`, `sales-dashboard.html`, `executive-dashboard.html`
* **UI Components/Elements**: 70+ files like `ui-accordion.html`, `ui-cards.html`, `ui-modals.html`
* **Icons & Charts**: 20+ files like `icon-feather.html`, `chart-apex.html`
* **Settings & Reports**: 50+ files like `company-settings.html`, `deal-reports.html`
* **Applications**: `chat.html`, `email.html`, `calendar.html`, `file-manager.html`

*Status: 100% static mock data. No backend connection.*

---

## 3. The "Auto-Generated" React Screens
In the `app/frontend/src/pages/generated/` folder, there are **299 `.jsx` files**. 
These were converted programmatically (likely via a script). 
* **State of these files**: They are essentially raw HTML pasted inside a React `return()` statement. They are **not** correctly converted. They still contain 100% mock data, have no backend API hooks, and are bloated (often 1,500+ lines long).

---

## 4. The "Correctly Converted" React Screens
In the root `app/frontend/src/pages/` folder, there are **11 core files** that have been separated for manual conversion:
1. `Activities.jsx`
2. `Analytics.jsx`
3. `Companies.jsx`
4. `Contacts.jsx`
5. `Dashboard.jsx`
6. `Deals.jsx`
7. `Leads.jsx`
8. `Login.jsx`
9. `Pipeline.jsx`
10. `Projects.jsx`
11. `Tasks.jsx`

**Current Status of these 11 Core Pages:**
* **Leads (`Leads.jsx`)**: ✅ **100% Correctly Converted**. All mock data was removed, it connects directly to `/api/leads`, UI components were modularized (e.g., `<AIPanel />`), and the Kanban/Table views map dynamic variables.
* **The Other 10 Pages**: ❌ **Incomplete**. While they exist as root `.jsx` files, they still rely entirely on mock data and are not properly mapping backend schema variables or utilizing `api.get()` to pull live data. 

---

## 5. Summary & Next Steps
**Total Unique Core Screens Needed:** ~15-20 (Dashboards, Contacts, Companies, Leads, Deals, Projects, Tasks, etc.)
**Total Programmatically Ported:** 299 (But unusable for production due to mock data)
**Total Correctly Converted to Backend:** 1 (`Leads.jsx`)

**Next Step:** To reach true "converted correctly" status, the remaining 10 core pages in `src/pages/` need to undergo the exact same manual teardown that `Leads.jsx` went through—stripping out the mock data, breaking out the UI components, and connecting them to their respective NestJS API routes.