import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./LandingPage";
import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";
import Matching from "./Matching";

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
                <Route path="/signup" element={<Signup />} />
                <Route
                    path="/profile"
                    element={isAuthenticated ? <Profile onLogout={handleLogout} /> : <Navigate to="/login" />}
                />
                <Route
                    path="/matching"
                    element={isAuthenticated ? <Matching /> : <Navigate to="/login" />}
                />
            </Routes>
        </Router>
    );
}

export default App;
