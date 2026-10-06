import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

/**
 * Exports data to a CSV file.
 * @param {Array} data - Array of objects representing rows
 * @param {Array} columns - Array of column definitions: { header: 'Title', render: (row) => string }
 * @param {string} filename - Output filename (without extension or date)
 */
export const exportToCSV = (data, columns, filename) => {
    if (!data || data.length === 0) {
        alert("No data to export");
        return;
    }

    const headers = columns.map(col => col.header);
    const csvRows = [headers.join(',')];

    data.forEach(row => {
        const rowData = columns.map(col => {
            let val = col.render ? col.render(row) : (row[col.key] || '');
            const stringVal = (val === null || val === undefined) ? '' : String(val);
            return `"${stringVal.replace(/"/g, '""')}"`;
        });
        csvRows.push(rowData.join(','));
    });

    const blob = new Blob([csvRows.join('\n')], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${filename}_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
};

/**
 * Exports data to a PDF file.
 * @param {Array} data - Array of objects representing rows
 * @param {Array} columns - Array of column definitions: { header: 'Title', render: (row) => string }
 * @param {string} title - Report title printed on PDF
 * @param {string} filename - Output filename (without extension or date)
 */
export const exportToPDF = (data, columns, title, filename) => {
    if (!data || data.length === 0) {
        alert("No data to export");
        return;
    }

    const doc = new jsPDF();
    doc.text(title, 14, 15);
    
    const tableColumn = columns.map(col => col.header);
    const tableRows = [];

    data.forEach(row => {
        const rowData = columns.map(col => {
            let val = col.render ? col.render(row) : (row[col.key] || '');
            return val;
        });
        tableRows.push(rowData);
    });

    autoTable(doc, {
        head: [tableColumn],
        body: tableRows,
        startY: 20,
    });

    doc.save(`${filename}_${new Date().toISOString().split('T')[0]}.pdf`);
};
