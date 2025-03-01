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
            <img src={logo} alt="SafePeer Logo" className="w-20 mb-6 mt-6" />

            {/* Title */}
            <h2 className="text-3xl font-fredoka text-primary mb-6">Create an Account</h2>

            {/* Form */}
            <form onSubmit={handleSubmit} className="w-full max-w-xs space-y-4">
                <div>
                    <label className="text-[#9FD1D3] font-bold font-fredoka text-x1">
                        Email
                    </label>  
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className="h-14 w-full p-3 mt-1 rounded-2xl border border-borderGray focus:outline-none focus:ring-2 focus:ring-primary bg-white placeholder-borderGray placeholder:font-poppins"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label className="text-[#9FD1D3] font-bold font-fredoka text-x1">
                        Username
                    </label><input
                        type="text"
                        name="username"
                        placeholder="Choose a username"
                        className="h-14 w-full p-3 mt-1 rounded-2xl border border-borderGray focus:outline-none focus:ring-2 focus:ring-primary bg-white placeholder-borderGray placeholder:font-poppins"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label className="text-[#9FD1D3] font-bold font-fredoka text-x1">
                        Password
                    </label><input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        className="h-14 w-full p-3 mt-1 rounded-2xl border border-borderGray focus:outline-none focus:ring-2 focus:ring-primary bg-white placeholder-borderGray placeholder:font-poppins"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label className="text-[#9FD1D3] font-bold font-fredoka text-x1">
                        Date of Birth
                    </label>
                    <input
                        type="date"
                        name="dateOfBirth"
                        className="h-14 w-full p-3 mt-1 rounded-2xl border border-borderGray focus:outline-none focus:ring-2 focus:ring-primary bg-white font-poppins text-borderGray placeholder-borderGray placeholder:font-poppins"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="text-[#9FD1D3] font-bold font-fredoka text-x1">
                        Condition
                    </label>
                    <input
                        type="text"
                        name="condition"
                        placeholder="Enter your condition(s)"
                        className="h-14 w-full p-3 mt-1 rounded-2xl border border-borderGray focus:outline-none focus:ring-2 focus:ring-primary bg-white placeholder-borderGray placeholder:font-poppins"
                        value={formData.condition}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="text-[#9FD1D3] font-bold font-fredoka text-x1">
                        Hobbies
                    </label>
                    <input
                        type="text"
                        name="hobbies"
                        placeholder="List your hobbies"
                        className="h-14 w-full p-3 mt-1 rounded-2xl border border-borderGray focus:outline-none focus:ring-2 focus:ring-primary bg-white placeholder-borderGray placeholder:font-poppins"
                        value={formData.hobbies}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="text-[#9FD1D3] font-bold font-fredoka text-x1">
                        About Me
                    </label>
                    <textarea
                        name="about"
                        placeholder="Tell us a bit about yourself"
                        className="h-20 w-full p-3 mt-1 rounded-2xl border border-borderGray focus:outline-none focus:ring-2 focus:ring-primary bg-white placeholder-borderGray placeholder:font-poppins"
                        value={formData.about}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="text-[#9FD1D3] font-bold font-fredoka text-x1">
                        Roles
                    </label>
                    <select
                        name="role"
                        className="h-14 w-full p-3 mt-1 rounded-2xl border border-borderGray focus:outline-none focus:ring-2 focus:ring-primary bg-white font-poppins text-borderGray placeholder-borderGray placeholder:font-poppins"
                        value={formData.role}
                        onChange={handleChange}
                    >
                        <option value="" className="text-borderGray font-poppins">
                            Patient or Peer Supporter
                        </option>
                        <option value="patient" className="text-black font-poppins">Patient</option>
                        <option value="peer_supporter" className="text-black font-poppins">Peer Supporter</option>
                    </select>
                </div>

                {/* Submit Button */}
                <div>  
                    <button
                        type="submit"
                        className="w-full py-3 text-lg bg-accent text-white rounded-full font-medium font-poppins shadow-md hover:bg-secondary transition mt-6"
                    >
                        Sign Up
                    </button>
                </div>
            </form>

            <p className="text-borderGray font-medium text-sm mt-4">
                Already have an account?{" "}
                <Link to="/login" className="text-primary font-bold">Log In</Link>
            </p>

        </div>
    );
};

export default Signup;
