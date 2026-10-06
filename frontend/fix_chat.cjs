const fs = require('fs');
const file = '/Users/thisisaman408/Downloads/crms/app/frontend/src/pages/Chat.jsx';
let content = fs.readFileSync(file, 'utf8');

const startStr = '<div className="message-body p-4" data-simplebar>';
const endStr = '</div>\n                                        </div>\n\n                                    </div>\n                                    \n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n\n            </div>\n    );\n};\n\nexport default Chat;';

const startIndex = content.indexOf(startStr);

if (startIndex !== -1) {
    const newContent = content.substring(0, startIndex + startStr.length) + `
        {messages.length === 0 ? (
            <div className="text-center text-muted mt-5">No messages in this conversation yet.</div>
        ) : messages.map((msg, idx) => {
            const isMe = currentUser?.id === msg.senderId;
            return (
                <div key={msg.id || idx} className={\`chat-list mb-3 \${isMe ? 'ms-auto' : ''}\`}>
                    <div className={\`d-flex align-items-start \${isMe ? 'justify-content-end' : ''}\`}>
                        {!isMe && (
                            <span className="avatar online me-2 flex-shrink-0">
                                <div className="avatar avatar-md flex-shrink-0 bg-primary rounded-circle text-white d-flex align-items-center justify-content-center fs-16">
                                    {activeContact?.firstName?.[0] || 'U'}
                                </div>
                            </span>
                        )}
                        <div>
                            <div className={\`d-flex align-items-center mb-1 \${isMe ? 'justify-content-end' : ''}\`}>
                                {isMe && <p className="mb-0 d-inline-flex align-items-center"><i className="ti ti-checks text-success me-1"></i>{new Date(msg.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}<i className="ti ti-point-filled mx-2"></i></p>}
                                <h6 className="fs-14 mb-0 fw-semibold">{isMe ? 'You' : (activeContact?.firstName || 'Contact')}</h6>
                                {!isMe && <p className="mb-0 d-inline-flex align-items-center"><i className="ti ti-point-filled mx-2"></i>{new Date(msg.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>}
                            </div>
                            <div className="d-flex align-items-center">
                                <div className={\`message-box p-3 \${isMe ? 'send-message bg-primary text-white' : 'receive-message'}\`}>
                                    <p className="mb-0 fs-14">{msg.content}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        })}
        <div ref={messagesEndRef} />
    </div>
    <div className="message-footer d-flex align-items-center border-top p-3">
        <form className="flex-fill d-flex align-items-center gap-2" onSubmit={handleSend}>
            <div className="flex-fill">
                <input type="text" className="form-control border-0"
                    placeholder="Type Something..." value={messageInput} onChange={(e) => setMessageInput(e.target.value)} />
            </div>
            <div className="d-flex align-items-center gap-2">
                <button type="submit" className="btn btn-icon btn-primary"
                    data-discover="true"><i className="ti ti-send"></i></button>
            </div>
        </form>
    </div>
` + endStr;
    fs.writeFileSync(file, newContent);
    console.log("Replaced successfully");
} else {
    console.log("Could not find start index");
}
