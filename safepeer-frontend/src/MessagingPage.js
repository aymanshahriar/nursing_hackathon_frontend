import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import NavBar from "./components/NavBar";

const chats = {
    1: { name: "Joe", messages: ["Hi! I'm Joe, I'm here when you are ready to chat.", "No problem! How can I support you today?"] },
    2: { name: "Jane", messages: ["Hey there!", "How's your day going?"] },
    3: { name: "Sam", messages: ["Hi, I understand what you're going through.", "Let's talk whenever you're ready."] },
};

const MessagingPage = () => {
    const { id } = useParams();
    const chat = chats[id] || { name: "Unknown", messages: [] };

    const [messages, setMessages] = useState(chat.messages.map((msg) => ({ text: msg, isUser: false })));
    const [newMessage, setNewMessage] = useState("");

    const sendMessage = () => {
        if (newMessage.trim()) {
            setMessages([...messages, { text: newMessage, isUser: true }]);
            setNewMessage("");
        }
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-background px-6 pb-16">

            {/* Page Title */}
            <h2 className="text-2xl font-fredoka text-primary mt-6">Messages</h2>

            {/* Chat Container */}
            <div className="mt-4 w-full max-w-md bg-card p-6 rounded-lg shadow-md border border-gray-300">
                <h3 className="text-lg font-bold font-poppins text-center text-textPrimary">{chat.name}</h3>

                {/* Chat Messages */}
                <div className="h-72 overflow-y-auto p-4 space-y-3">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}>
                            <p className={`px-4 py-2 rounded-lg max-w-xs text-sm font-montserrat shadow-md ${
                                msg.isUser ? "bg-blue-200 text-black" : "bg-yellow-200 text-black"
                            }`}>
                                {msg.text}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Chat Input */}
                <div className="flex mt-4 items-center">
                    <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type a message..."
                        className="flex-grow p-3 border rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <button
                        onClick={sendMessage}
                        className="ml-2 bg-accent text-white px-4 py-3 rounded-full font-bold font-poppins shadow-md hover:bg-secondary transition"
                    >
                        Send
                    </button>
                </div>
            </div>

            {/* Back to Messages Link */}
            <Link to="/messages" className="mt-6 text-primary text-lg font-semibold">
                ← Back to Messages
            </Link>

            {/* Bottom Navigation */}
            <NavBar />
        </div>
    );
};

export default MessagingPage;
