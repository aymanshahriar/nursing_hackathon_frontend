import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/safepeer-logo-full.png";

const LandingPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-background text-textPrimary px-6">

            {/* Logo */}
            <img src={logo} alt="SafePeer Logo" style={{ width: "15rem", height: "auto" }} className="mb-6" />

            {/* Welcome Message */}
            <h1 className="text-3xl font-fredoka text-[#9FD1D3] text-center">
                Welcome to SafePeer!
            </h1>


            {/* Buttons */}
            <div className="w-full flex flex-col items-center mt-8 space-y-6">
                <Link to="/signup" className="w-10/12 md:w-80">
                    <button className="w-full py-4 text-lg bg-accent text-white rounded-full font-medium font-poppins shadow-md hover:bg-secondary transition">
                        Sign Up
                    </button>
                </Link>
                <Link to="/login" className="w-10/12 md:w-80">
                    <button className="w-full py-4 text-lg bg-accent text-white rounded-full font-medium font-poppins shadow-md hover:bg-secondary transition">
                        Log In
                    </button>
                </Link>
            </div>

        </div>
    );
};

export default LandingPage;
