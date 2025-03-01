import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./assets/safepeer-logo-full.png"; // Ensure the logo exists in this path

const Signup = ({ onSignup }) => {
    const [formData, setFormData] = useState({
        email: "",
        username: "",
        password: "",
        dateOfBirth: "",
        condition: "",
        hobbies: "",
        about: "",
        role: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Fake authentication logic
        if (formData.email && formData.username && formData.password) {
            onSignup(); // Calls the function from App.js
            navigate("/profile"); // Redirect to profile page
        } else {
            alert("Please fill out all required fields.");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-background px-6">

            {/* Logo */}
            <Link to="/">
                <img src={logo} alt="SafePeer Logo" className="w-20 mb-6 cursor-pointer" />
            </Link>

            {/* Title */}
            <h2 className="text-2xl font-fredoka text-primary mb-6">Create an Account</h2>

            {/* Form */}
            <form onSubmit={handleSubmit} className="w-full max-w-xs space-y-4">
                <div>
                    <label className="text-textPrimary font-semibold font-poppins text-sm">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className="w-full p-3 mt-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label className="text-textPrimary font-semibold font-poppins text-sm">Username</label>
                    <input
                        type="text"
                        name="username"
                        placeholder="Choose a username"
                        className="w-full p-3 mt-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                        value={formData.username}
                        onChange={handleChange}
                        required
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
                        required
                    />
                </div>
                <div>
                    <label className="text-textPrimary font-semibold font-poppins text-sm">Date of Birth</label>
                    <input
                        type="date"
                        name="dateOfBirth"
                        className="w-full p-3 mt-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="text-textPrimary font-semibold font-poppins text-sm">Condition</label>
                    <input
                        type="text"
                        name="condition"
                        placeholder="Enter your condition(s)"
                        className="w-full p-3 mt-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                        value={formData.condition}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="text-textPrimary font-semibold font-poppins text-sm">Hobbies</label>
                    <input
                        type="text"
                        name="hobbies"
                        placeholder="List your hobbies"
                        className="w-full p-3 mt-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                        value={formData.hobbies}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="text-textPrimary font-semibold font-poppins text-sm">About Me</label>
                    <textarea
                        name="about"
                        placeholder="Tell us a bit about yourself"
                        className="w-full p-3 mt-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                        value={formData.about}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="text-textPrimary font-semibold font-poppins text-sm">Roles</label>
                    <select
                        name="role"
                        className="w-full p-3 mt-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                        value={formData.role}
                        onChange={handleChange}
                    >
                        <option value="">Patient or Peer Supporter</option>
                        <option value="patient">Patient</option>
                        <option value="peer_supporter">Peer Supporter</option>
                    </select>
                </div>

                {/* Submit Button */}
                <button type="submit" className="w-full py-3 text-lg bg-accent text-white rounded-full font-bold font-poppins shadow-md hover:bg-secondary transition">
                    Sign Up
                </button>
            </form>

            <p className="text-textSecondary text-sm mt-4">
                Already have an account?{" "}
                <Link to="/login" className="text-primary font-semibold">Log In</Link>
            </p>

        </div>
    );
};

export default Signup;
