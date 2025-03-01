import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import avatarPlaceholder from "./assets/icons/default-avatar.png"; // Placeholder avatar

const Messages = () => {
    const navigate = useNavigate();

    const chats = [
        { id: 1, name: "Alice", lastMessage: "Hey, how are you?" },
        { id: 2, name: "Bob", lastMessage: "See you tomorrow at the meeting." },
        { id: 3, name: "Charlie", lastMessage: "Thanks for the support!" },
    ];

    return (
        <div className="flex flex-col items-center min-h-screen bg-background px-6 pb-16">

            {/* Page Title */}
            <h2 className="text-4xl font-fredoka text-primary mt-6">Messages</h2>
            <p className="text-center text-base text-gray-400 font-montserrat mt-2 max-w-md">
                Connect with your peer supporters and friends through secure messaging.
            </p>

            {/* Messages List */}
            <div className="mt-6 w-full max-w-md bg-card p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold font-poppins text-textPrimary mb-4 text-center">Recent Chats</h3>

                <div className="divide-y divide-gray-300">
                    {chats.map((chat) => (
                        <div key={chat.id} className="py-4 flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <img src={avatarPlaceholder} alt="User Avatar" className="w-12 h-12 rounded-full" />
                                <div>
                                    <h3 className="text-lg font-semibold">{chat.name}</h3>
                                    <p className="text-sm text-textSecondary">{chat.lastMessage}</p>
                                </div>
                            </div>
                            <button className="bg-accent text-white px-4 py-2 rounded-full font-bold font-poppins hover:bg-secondary transition">
                                Open
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Start New Chat Button */}
            <button
                onClick={() => navigate("/messagingpage")}
                className="mt-6 w-full max-w-xs py-4 text-lg bg-accent text-white font-bold font-poppins shadow-md hover:bg-secondary transition rounded-full"
            >
                Start New Chat
            </button>

            {/* Bottom Navigation */}
            <NavBar />
        </div>
    );
};

export default Messages;
