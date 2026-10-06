import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScriptLoader = () => {
    const location = useLocation();

    useEffect(() => {
        // Re-initialize tooltips
        if (window.bootstrap) {
            const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
            tooltipTriggerList.map(function (tooltipTriggerEl) {
                // dispose old one if exists
                const existing = window.bootstrap.Tooltip.getInstance(tooltipTriggerEl);
                if (existing) existing.dispose();
                return new window.bootstrap.Tooltip(tooltipTriggerEl);
            });

            // Re-initialize popovers
            const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
            popoverTriggerList.map(function (popoverTriggerEl) {
                const existing = window.bootstrap.Popover.getInstance(popoverTriggerEl);
                if (existing) existing.dispose();
                return new window.bootstrap.Popover(popoverTriggerEl);
            });
        }

        // Re-initialize chart-data.js (if function is exported)
        if (window.initCharts) {
            setTimeout(() => {
                // clear old charts to prevent duplication on strict mode / route changes
                const chartDivs = ['performance-stats', 'traffic-sources-chart'];
                chartDivs.forEach(id => {
                    const el = document.getElementById(id);
                    if (el) el.innerHTML = '';
                });
                
                window.initCharts();
            }, 100);
        }

        // Add any other specific template initializations here
        if (window.initScript) {
            setTimeout(() => {
                window.initScript();
            }, 100);
        }
        
        if (window.initChartJS) {
            setTimeout(() => {
                window.initChartJS();
            }, 100);
        }

        if (window.initTheme) {
            setTimeout(() => {
                window.initTheme();
            }, 100);
        }
    }, [location.pathname]);

    return null;
};

export default ScriptLoader;
