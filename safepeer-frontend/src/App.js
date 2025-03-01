import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./LandingPage";
import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";
import Matching from "./Matching";
import Calendar from "./Calendar";
import Messages from "./Messages";
import MessagingPage from "./MessagingPage";
import Journal from "./Journal";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(
        localStorage.getItem("authenticated") === "true"
    );

    const handleLogin = () => {
        localStorage.setItem("authenticated", "true");
        setIsAuthenticated(true);
    };

    const handleLogout = () => {
        localStorage.removeItem("authenticated");
        setIsAuthenticated(false);
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login onLogin={handleLogin} />} />
                <Route path="/signup" element={<Signup onSignup={handleLogin} />} />
                <Route
                    path="/profile"
                    element={isAuthenticated ? <Profile onLogout={handleLogout} /> : <Navigate to="/login" />}
                />
                <Route
                    path="/matching"
                    element={isAuthenticated ? <Matching /> : <Navigate to="/login" />}
                />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/messagingpage" element={<MessagingPage />} />
                <Route path="/journal" element={<Journal />} />
            </Routes>
        </Router>
    );
}

export default App;
