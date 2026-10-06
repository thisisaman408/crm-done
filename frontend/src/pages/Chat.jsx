import React, { useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import api from '../lib/api';

const Chat = () => {
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

    return (
<div className="content">

                
                <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                    <div>
                        <h4 className="mb-1">Chat</h4>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li className="breadcrumb-item"><a href="javascript:void(0);">Applications</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Chat</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="gap-2 d-flex align-items-center flex-wrap">
                        <a href="javascript:void(0);" className="btn btn-icon btn-outline-light shadow"
                            data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Refresh"
                            data-bs-original-title="Refresh"><i className="ti ti-refresh"></i></a>
                        <a href="javascript:void(0);" className="btn btn-icon btn-outline-light shadow"
                            data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Collapse"
                            data-bs-original-title="Collapse" id="collapse-header"><i
                                className="ti ti-transition-top"></i></a>
                    </div>
                </div>
                

                <div className="chat-wrapper">

                    <div className="card shadow-none mb-0">
                        <div className="card-body p-0">

                            <div className="d-lg-flex">
                                <div className="chat-user-nav">
                                    <div>
                                        <div
                                            className="d-flex align-items-center justify-content-between border-bottom p-3">
                                            <div className="d-flex align-items-center">
                                                <span className="avatar me-2 flex-shrink-0"><img
                                                        src="assets/img/users/avatar-2.jpg" className="rounded-circle"
                                                        alt="user" /></span>
                                                <div>
                                                    <h6 className="fs-14 mb-1">James Hong </h6>
                                                    <p className="mb-0">Admin</p>
                                                </div>
                                            </div>
                                            <a href="chat.html#" className="btn btn-icon btn-primary" data-bs-toggle="tooltip"
                                                data-bs-placement="top" data-bs-title="New Chat"><i
                                                    className="ti ti-plus"></i></a>
                                        </div>
                                        <div>
                                            <div className="input-group w-auto input-group-flat p-4 pb-0">
                                                <span className="input-group-text border-end-0"><i
                                                        className="ti ti-search"></i></span>
                                                <input type="text" className="form-control" placeholder="Search Keyword" />
                                            </div>
                                            <div className="chat-users p-4" data-simplebar>
                                                <h6 className="mb-3">All Messages</h6>
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
</div></div></div></div><div className="flex-fill chat-messages">
                                    
                                    <div className="card border-0 mb-0">

                                        <div
                                            className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3 p-3">
                                            <div className="d-flex align-items-center">
                                                <span className="avatar me-2 flex-shrink-0"><img
                                                        src="assets/img/users/avatar-5.jpg" alt="user"
                                                        className="rounded-circle" /></span>
                                                <div>
                                                    <h6 className="fs-14 fw-semibold mb-1">{activeContact ? (activeContact.firstName || activeContact.name) : "Select a contact"}</h6>
                                                    <p className="mb-0 d-inline-flex align-items-center custom-dot"><i
                                                            className="ti ti-point-filled text-success"></i>Online</p>
                                                </div>
                                            </div>
                                            <div className="gap-2 d-flex align-items-center flex-wrap">
                                                <a href="audio-call.html" className="btn btn-icon btn-light"
                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                    aria-label="Refresh" data-bs-original-title="Voice Call"><i
                                                        className="ti ti-phone"></i></a>
                                                <a href="video-call.html" className="btn btn-icon btn-light"
                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                    aria-label="Refresh" data-bs-original-title="Video Call"><i
                                                        className="ti ti-video"></i></a>
                                                <a href="javascript:void(0);" className="btn btn-icon btn-light"
                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                    aria-label="Refresh" data-bs-original-title="Info"><i
                                                        className="ti ti-info-circle"></i></a>
                                                <a href="javascript:void(0);"
                                                    className="btn btn-icon btn-light close-chat d-md-none"><i
                                                        className="ti ti-x"></i></a>
                                            </div>
                                        </div>

                                        <div className="card-body p-0">
                                            <div className="message-body p-4" data-simplebar>
        {messages.length === 0 ? (
            <div className="text-center text-muted mt-5">No messages in this conversation yet.</div>
        ) : messages.map((msg, idx) => {
            const isMe = currentUser?.id === msg.senderId;
            return (
                <div key={msg.id || idx} className={`chat-list mb-3 ${isMe ? 'ms-auto' : ''}`}>
                    <div className={`d-flex align-items-start ${isMe ? 'justify-content-end' : ''}`}>
                        {!isMe && (
                            <span className="avatar online me-2 flex-shrink-0">
                                <div className="avatar avatar-md flex-shrink-0 bg-primary rounded-circle text-white d-flex align-items-center justify-content-center fs-16">
                                    {activeContact?.firstName?.[0] || 'U'}
                                </div>
                            </span>
                        )}
                        <div>
                            <div className={`d-flex align-items-center mb-1 ${isMe ? 'justify-content-end' : ''}`}>
                                {isMe && <p className="mb-0 d-inline-flex align-items-center"><i className="ti ti-checks text-success me-1"></i>{new Date(msg.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}<i className="ti ti-point-filled mx-2"></i></p>}
                                <h6 className="fs-14 mb-0 fw-semibold">{isMe ? 'You' : (activeContact?.firstName || 'Contact')}</h6>
                                {!isMe && <p className="mb-0 d-inline-flex align-items-center"><i className="ti ti-point-filled mx-2"></i>{new Date(msg.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>}
                            </div>
                            <div className="d-flex align-items-center">
                                <div className={`message-box p-3 ${isMe ? 'send-message bg-primary text-white' : 'receive-message'}`}>
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
</div>
                                        </div>

                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
    );
};

export default Chat;