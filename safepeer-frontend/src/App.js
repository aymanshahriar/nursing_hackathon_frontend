import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";
import Matching from "./Matching";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/matching" element={<Matching />} />
            </Routes>
        </Router>
    );
}

export default App;
