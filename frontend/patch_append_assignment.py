import re

with open('src/pages/generated/ProjectDetails.jsx', 'r') as f:
    content = f.read()

# We need to replace the prompt logic
old_logic = """                                        onClick={() => {
                                            const userId = prompt("Enter User ID to assign (Sourcing/Closing Manager, or Sales Exec):");
                                            if (userId) {
                                                api.post(`/api/inventory/projects/${id}/assign`, {
                                                    sourcingManagerIds: [userId],
                                                    closingManagerIds: [],
                                                    salesExecIds: []
                                                }).then(() => {
                                                    alert("User assigned successfully! (Refresh to see changes)");
                                                    window.location.reload();
                                                }).catch(err => alert("Failed to assign user: " + (err.response?.data?.message || err.message)));
                                            }
                                        }}"""

new_logic = """                                        onClick={() => {
                                            const userId = prompt("Enter User ID to assign (Sourcing/Closing Manager, or Sales Exec):");
                                            if (userId) {
                                                const existingSourcing = project.projectAssignments?.filter(a => a.user?.role?.code === 'SOURCING_MANAGER').map(a => a.userId) || [];
                                                const existingClosing = project.projectAssignments?.filter(a => a.user?.role?.code === 'CLOSING_MANAGER').map(a => a.userId) || [];
                                                const existingSales = project.projectAssignments?.filter(a => a.user?.role?.code === 'SALES_EXECUTIVE').map(a => a.userId) || [];
                                                
                                                api.post(`/api/inventory/projects/${id}/assign`, {
                                                    sourcingManagerIds: [...new Set([...existingSourcing, userId])],
                                                    closingManagerIds: existingClosing,
                                                    salesExecIds: existingSales
                                                }).then(() => {
                                                    alert("User assigned successfully! (Refresh to see changes)");
                                                    window.location.reload();
                                                }).catch(err => alert("Failed to assign user: " + (err.response?.data?.message || err.message)));
                                            }
                                        }}"""

content = content.replace(old_logic, new_logic)

with open('src/pages/generated/ProjectDetails.jsx', 'w') as f:
    f.write(content)

print("Patched prompt logic to prevent overwriting")
