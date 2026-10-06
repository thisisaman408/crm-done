const fs = require('fs');

let content = fs.readFileSync('src/pages/Analytics.jsx', 'utf8');

const regex = /\/\* Fetch Real Analytics Data \*\/\s*const fetchData = async \(\) => {([\s\S]*?)\};\s*fetchData\(\);\s*}, \[\]\);/g;

const newLogic = `/* Fetch Real Analytics Data */
        const fetchData = async () => {
            try {
                const [leadsRes, activitiesRes] = await Promise.all([
                    api.get('/api/leads'),
                    api.get('/api/activities')
                ]);
                
                const leads = leadsRes.data?.data || leadsRes.data || [];
                const acts = activitiesRes.data?.data || activitiesRes.data || [];
                
                // Sort by newest and take top 5
                setRecentContacts(leads.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 5));
                setRecentActivities(acts.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 5));
                
                // --- Group data for charts ---
                const inPipeline = leads.filter(l => ['NEW', 'CONTACTED'].includes(l.status)).length || 0;
                const followUp = leads.filter(l => ['INTERESTED', 'NEGOTIATION'].includes(l.status)).length || 0;
                const schedule = leads.filter(l => l.status === 'SITE_VISIT').length || 0;
                const won = leads.filter(l => l.status === 'BOOKING').length || 0;
                const lost = leads.filter(l => ['LOST', 'NOT_INTERESTED'].includes(l.status)).length || 0;
                const conversation = acts.length || 0;

                // --- Destroy old charts if they exist ---
                window._charts = window._charts || {};
                const initOrUpdateChart = (id, options) => {
                    const el = document.querySelector('#' + id);
                    if(!el) return;
                    if(window._charts[id]) {
                        window._charts[id].destroy();
                    }
                    if(window.ApexCharts) {
                        const chart = new window.ApexCharts(el, options);
                        chart.render();
                        window._charts[id] = chart;
                    }
                };

                // --- 1. Won Deals Stage (#won-chart) ---
                initOrUpdateChart('won-chart', {
                    series: [{ data: [conversation, followUp, inPipeline] }],
                    chart: { type: 'bar', height: 180, toolbar: { show: false } },
                    plotOptions: { bar: { horizontal: true } },
                    dataLabels: { enabled: false },
                    colors: ['#27AE60'],
                    grid: { borderColor: '#E8E8E8', strokeDashArray: 4 },
                    xaxis: { categories: ['Conversation', 'Follow Up', 'Inpipeline'] }
                });

                // --- 2. Deals By Stage (#deals-chart) ---
                initOrUpdateChart('deals-chart', {
                    series: [{ name: 'Deals', data: [inPipeline, followUp, schedule, conversation, won, lost] }],
                    chart: { type: 'bar', height: 350, toolbar: { show: false } },
                    plotOptions: { bar: { columnWidth: '50%' } },
                    dataLabels: { enabled: false },
                    colors: ['#13B28A'],
                    xaxis: { categories: ['Inpipeline', 'Follow Up', 'Schedule', 'Conversation', 'Won', 'Lost'] }
                });

                // --- 3. Last Chart 2 (#last-chart-2) ---
                initOrUpdateChart('last-chart-2', {
                    series: [{ data: [conversation, followUp, inPipeline] }],
                    chart: { type: 'bar', height: 150, toolbar: { show: false } },
                    plotOptions: { bar: { horizontal: true } },
                    dataLabels: { enabled: false },
                    colors: ['#FC0027'],
                    xaxis: { categories: ['Conversation', 'Follow Up', 'Inpipeline'] }
                });

            } catch (err) {
                console.error("Failed to fetch analytics data", err);
            }
        };
        fetchData();
    }, []);
`;

content = content.replace(regex, newLogic);

fs.writeFileSync('src/pages/Analytics.jsx', content);
console.log('Analytics.jsx charts refactored successfully.');
