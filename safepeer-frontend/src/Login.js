import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/safepeer-logo-full.png";

const Login = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Logging in with:", formData);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-background px-6">

            {/* Logo */}
            <img src={logo} alt="SafePeer Logo" className="w-20 mb-6" />

            {/* Title */}
            <h2 className="text-2xl font-fredoka text-primary mb-6">Log In</h2>

            {/* Form */}
            <form onSubmit={handleSubmit} className="w-full max-w-xs space-y-4">
                <div>
                    <label className="text-textPrimary font-semibold font-poppins text-sm">Username</label>
                    <input
                        type="text"
                        name="username"
                        placeholder="Enter your username"
                        className="w-full p-3 mt-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="text-textPrimary font-semibold font-poppins text-sm">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        className="w-full p-3 mt-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full py-3 text-lg bg-accent text-white rounded-full font-bold font-poppins shadow-md hover:bg-secondary transition"
                >
                    Log In
                </button>
            </form>

            {/* Sign Up Link */}
            <p className="text-textSecondary text-sm mt-4">
                New to SafePeer?{" "}
                <Link to="/signup" className="text-primary font-semibold">
                    Sign Up
                </Link>
            </p>

        </div>
    );
};

export default Login;
