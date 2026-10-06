import re
with open('src/pages/generated/ProjectDetails.jsx', 'r') as f:
    content = f.read()

# Add isUploading state
content = content.replace('const [error, setError] = useState(null);', 'const [error, setError] = useState(null);\n    const [isUploading, setIsUploading] = useState(false);')

# Fix Avatar to use project.thumbnailUrl
content = content.replace(
    'src="assets/img/priority/truellysel.svg"', 
    'src={project.thumbnailUrl || "assets/img/priority/truellysel.svg"}'
)

# Fix input field to show loading
upload_snippet_old = '''                                    <input type="file" className="form-control" accept="image/*" onChange={async (e) => {
                                        const file = e.target.files[0];
                                        if (!file) return;
                                        const reader = new FileReader();
                                        reader.onloadend = async () => {
                                            try {
                                                const base64 = reader.result;
                                                await api.patch(`/api/inventory/projects/${id}`, { thumbnailUrl: base64 });
                                                setProject(prev => ({ ...prev, thumbnailUrl: base64 }));
                                                alert("Image uploaded successfully!");
                                            } catch(err) {
                                                alert("Failed to upload image");
                                            }
                                        };
                                        reader.readAsDataURL(file);
                                    }} />'''

upload_snippet_new = '''                                    {isUploading ? (
                                        <button className="btn btn-primary form-control" type="button" disabled>
                                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                            Uploading Image...
                                        </button>
                                    ) : (
                                        <input type="file" className="form-control" accept="image/*" onChange={async (e) => {
                                            const file = e.target.files[0];
                                            if (!file) return;
                                            
                                            setIsUploading(true);
                                            const reader = new FileReader();
                                            reader.onloadend = async () => {
                                                try {
                                                    const base64 = reader.result;
                                                    await api.patch(`/api/inventory/projects/${id}`, { thumbnailUrl: base64 });
                                                    setProject(prev => ({ ...prev, thumbnailUrl: base64 }));
                                                    alert("Image uploaded successfully!");
                                                } catch(err) {
                                                    alert("Failed to upload image: " + (err.response?.data?.message || err.message));
                                                } finally {
                                                    setIsUploading(false);
                                                }
                                            };
                                            reader.readAsDataURL(file);
                                        }} />
                                    )}'''
content = content.replace(upload_snippet_old, upload_snippet_new)

with open('src/pages/generated/ProjectDetails.jsx', 'w') as f:
    f.write(content)

print("Patched ProjectDetails.jsx")
