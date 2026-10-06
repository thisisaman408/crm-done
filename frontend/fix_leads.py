import re

with open("src/pages/Leads.jsx", "r") as f:
    content = f.read()

# Replace the Kanban View block
kanban_start = content.find("/* Kanban View */")
kanban_end = content.find(") : (", kanban_start)

if kanban_start != -1 and kanban_end != -1:
    new_kanban = """/* Kanban View */
                <div className="d-flex overflow-x-auto align-items-start gap-3 pb-3">
                    {statuses.map(status => (
                        <div key={status} className="kanban-list-items p-2 rounded border" style={{ minWidth: '320px' }}>
                            <div className="card mb-0 border-0 shadow">
                                <div className="card-body p-2">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <h6 className="d-flex align-items-center mb-1">
                                                <i className="ti ti-circle-filled fs-10 text-primary me-1"></i>
                                                {status.replace(/_/g, ' ')}
                                            </h6>
                                            <span className="fw-medium">{leadsByStatus[status].length} Leads</span>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <a href="#" className="text-info"><i className="ti ti-plus"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="kanban-drag-wrap mt-3">
                                {leadsByStatus[status].map(lead => (
                                    <div key={lead.id} className="card kanban-card border mb-3 shadow ui-sortable-handle">
                                        <div className="card-body">
                                            <div className="d-block">
                                                <div className="card-topbar mb-3 pt-1 bg-secondary"></div>
                                                <div className="d-flex align-items-center mb-3">
                                                    <div className="avatar rounded-circle bg-soft-info flex-shrink-0 me-2">
                                                        <span className="avatar-title text-info">{lead.firstName?.charAt(0) || 'U'}</span>
                                                    </div>
                                                    <h6 className="fw-medium fs-14 mb-0">{lead.firstName} {lead.lastName}</h6>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-column text-muted">
                                                {lead.email && (
                                                    <p className="text-default d-inline-flex align-items-center mb-2">
                                                        <i className="ti ti-mail text-dark me-1"></i> {lead.email}
                                                    </p>
                                                )}
                                                {lead.phone && (
                                                    <p className="text-default d-inline-flex align-items-center mb-2">
                                                        <i className="ti ti-phone text-dark me-1"></i> {lead.phone}
                                                    </p>
                                                )}
                                                {lead.score !== undefined && lead.score !== null && (
                                                    <p className="text-default d-inline-flex align-items-center mb-2">
                                                        <i className="ti ti-star text-dark me-1"></i> Score: {lead.score}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {leadsByStatus[status].length === 0 && (
                                    <div className="text-center p-3 text-muted fs-12 border border-dashed rounded mt-2">
                                        No leads
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                """
    content = content[:kanban_start] + new_kanban + content[kanban_end:]

# Replace the Status Array
status_start = content.find("const statuses = ['NEW'")
status_end = content.find("];", status_start) + 2
if status_start != -1:
    content = content[:status_start] + "const statuses = ['NEW', 'CONTACTED', 'SITE_VISIT_SCHEDULED', 'SITE_VISIT_COMPLETED', 'NEGOTIATION', 'BOOKING'];" + content[status_end:]

with open("src/pages/Leads.jsx", "w") as f:
    f.write(content)

