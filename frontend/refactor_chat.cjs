const fs = require('fs');

let content = fs.readFileSync('src/pages/Chat.jsx', 'utf8');

// 1. Add Imports
content = content.replace("import React from 'react';", "import React, { useState, useEffect, useRef } from 'react';\nimport { io } from 'socket.io-client';\nimport api from '../lib/api';");

// 2. Add State and Logic inside the component
const logic = `
    const [contacts, setContacts] = useState([]);
    const [activeContact, setActiveContact] = useState(null);
    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState('');
    const [socket, setSocket] = useState(null);
    const [room, setRoom] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        const uStr = localStorage.getItem('user');
        if (uStr) setCurrentUser(JSON.parse(uStr));
        api.get('/api/chat/contacts').then(res => {
            const list = res.data?.data || [];
            setContacts(list);
            if (list.length > 0) setActiveContact(list[0]);
        }).catch(err => console.error(err));
    }, []);

    useEffect(() => {
        if (!activeContact) return;
        api.post('/api/chat/direct/' + activeContact.id).then(res => {
            const rm = res.data?.data;
            setRoom(rm);
            if(rm) {
               api.get('/api/chat/rooms/' + rm.id + '/messages').then(msgRes => {
                   setMessages(msgRes.data?.data?.messages || []);
               });
            }
        });
    }, [activeContact]);

    useEffect(() => {
        if (!room) return;
        const s = io(import.meta.env.VITE_API_URL || 'http://localhost:3000', {
            query: { userId: currentUser?.id }
        });
        setSocket(s);

        s.on('connect', () => {
            s.emit('join_room', { roomId: room.id });
        });

        s.on('new_message', (msg) => {
            setMessages(prev => [...prev, msg]);
        });

        return () => {
            s.emit('leave_room', { roomId: room.id });
            s.disconnect();
        };
    }, [room, currentUser]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSend = (e) => {
        e.preventDefault();
        if(!messageInput.trim() || !room) return;
        
        api.post('/api/chat/rooms/' + room.id + '/messages', { content: messageInput }).then(res => {
            if(res.data?.success) {
                setMessageInput('');
            }
        });
    };
`;

content = content.replace("const Chat = () => {", "const Chat = () => {" + logic);

// 3. Replace Static Contacts List
const regexUsers = /<h6 className="mb-3">All Messages<\/h6>([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<div className="flex-fill chat-messages">/;
const replacementUsers = `<h6 className="mb-3">All Messages</h6>
    {contacts.map(contact => (
        <div key={contact.id} onClick={() => setActiveContact(contact)} className={"d-flex align-items-center justify-content-between rounded p-3 user-list mb-1 cursor-pointer " + (activeContact?.id === contact.id ? 'active' : '')} style={{cursor: 'pointer'}}>
            <div className="d-flex align-items-center">
                <a className="avatar me-2 flex-shrink-0">
                    <div className="avatar avatar-md flex-shrink-0 bg-primary rounded-circle text-white d-flex align-items-center justify-content-center fs-16">
                        {(contact.firstName?.[0] || contact.name?.[0] || 'U').toUpperCase()}
                    </div>
                </a>
                <div>
                    <h6 className="fs-14 mb-1"><a>{contact.firstName || contact.name} {contact.lastName || ''}</a></h6>
                    <p className="mb-0 text-truncate">{contact.role?.name || contact.roleCode || 'Contact'}</p>
                </div>
            </div>
        </div>
    ))}
</div></div></div></div><div className="flex-fill chat-messages">`;

content = content.replace(regexUsers, replacementUsers);

// 4. Replace Chat Header Name
const regexHeader = /<h6 className="fs-14 fw-semibold mb-1">Mark Smith<\/h6>/;
content = content.replace(regexHeader, '<h6 className="fs-14 fw-semibold mb-1">{activeContact ? (activeContact.firstName || activeContact.name) : "Select a contact"}</h6>');

// 5. Replace Messages List
const regexMessages = /<div className="chat-body"[^>]*>([\s\S]*?)<\/div>\s*<div className="chat-footer">/;
const replacementMessages = `<div className="chat-body" data-simplebar style={{height: '60vh', overflowY: 'auto'}}>
    <div className="messages" style={{padding: '1rem'}}>
        {messages.map((msg, idx) => (
            <div key={msg.id || idx} className={"d-flex mb-3 " + (msg.senderId === currentUser?.id ? "justify-content-end" : "justify-content-start")}>
                <div className={"p-3 rounded " + (msg.senderId === currentUser?.id ? "bg-primary text-white" : "bg-light text-dark")} style={{maxWidth: '75%'}}>
                    <p className="mb-1">{msg.content}</p>
                    <small className={msg.senderId === currentUser?.id ? "text-white-50" : "text-muted"}>
                        {new Date(msg.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                    </small>
                </div>
            </div>
        ))}
        <div ref={messagesEndRef} />
    </div>
</div><div className="chat-footer">`;

content = content.replace(regexMessages, replacementMessages);

// 6. Replace Chat Form
const regexForm = /<form>([\s\S]*?)<\/form>/;
const replacementForm = `<form onSubmit={handleSend}>
    <div className="input-group chat-send-box p-3">
        <input type="text" className="form-control bg-transparent" placeholder="Type Something..." value={messageInput} onChange={e => setMessageInput(e.target.value)} />
        <div className="input-group-append d-flex align-items-center gap-2">
            <button className="btn btn-primary" type="submit"><i className="ti ti-send"></i></button>
        </div>
    </div>
</form>`;

content = content.replace(regexForm, replacementForm);

fs.writeFileSync('src/pages/Chat.jsx', content);
console.log('Chat.jsx refactored successfully.');
