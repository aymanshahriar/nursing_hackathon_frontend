import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./assets/safepeer-logo-full.png";

const Login = ({ onLogin }) => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Fake authentication logic (ignoring actual username/password)
        if (formData.username && formData.password) {
            onLogin(); // Calls the function from App.js
            navigate("/profile"); // Redirect to profile page after login
        } else {
            alert("Please enter a username and password.");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-background px-6">

            {/* Logo */}
            <Link to="/">
                <img src={logo} alt="SafePeer Logo" className="w-20 mb-6 cursor-pointer" />
            </Link>


            {/* Title */}
            <h2 className="text-3xl font-fredoka text-primary mb-6">Log In</h2>

            {/* Form */}
            <form onSubmit={handleSubmit} className="w-full max-w-xs space-y-4">
                <div>
                    <label className="text-[#9FD1D3] font-bold font-fredoka text-x1">
                        Username
                    </label>
                    <input
                        type="text"
                        name="username"
                        placeholder="Enter your username"
                        className="h-14 w-full p-3 mt-1 rounded-2xl border border-borderGray focus:outline-none focus:ring-2 focus:ring-primary bg-white placeholder-borderGray placeholder:font-poppins"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label className="text-[#9FD1D3] font-bold font-fredoka text-x1">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        className="h-14 w-full p-3 mt-1 rounded-2xl border border-borderGray focus:outline-none focus:ring-2 focus:ring-primary bg-white placeholder-borderGray placeholder:font-poppins"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Submit Button */}
                <div>
                    <button
                        type="submit"
                        className="w-full py-3 text-lg bg-accent text-white rounded-full font-medium font-poppins shadow-md hover:bg-secondary transition mt-6"
                    >
                        Log In
                    </button>
                </div>
            </form>

            {/* Sign Up Link */}
            <p className="text-borderGray font-medium text-sm mt-4">
                New to SafePeer?{" "}
                <Link to="/signup" className="text-primary font-bold">
                    Sign Up
                </Link>
            </p>

        </div>
    );
};

export default Login;
