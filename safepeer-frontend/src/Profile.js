import React, { useState } from "react";
import { Link } from "react-router-dom";
import avatarPlaceholder from "./assets/icons/default-avatar.png";
import NavBar from "./components/NavBar";

const Profile = () => {
    const [formData, setFormData] = useState({
        name: "",
        about: "",
        mentalHealthJourney: "",
    });

    const [avatar, setAvatar] = useState(avatarPlaceholder);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setAvatar(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-background px-6 pb-16">
            {/* Avatar Upload */}
            <label htmlFor="avatar-upload" className="cursor-pointer">
                <img src={avatar} alt="Avatar" className="w-24 h-24 rounded-full border border-gray-300 mb-4" />
            </label>
            <input type="file" id="avatar-upload" accept="image/*" className="hidden" onChange={handleAvatarChange} />
            <p className="text-textSecondary font-semibold font-poppins text-sm">Choose Photo/Avatar</p>

            {/* Form */}
            <form className="w-full max-w-xs space-y-4 mt-4">
                <div>
                    <label className="text-textPrimary font-semibold font-poppins text-sm">Name/Alias</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name or an alias"
                        className="w-full p-3 mt-1 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="text-textPrimary font-semibold font-poppins text-sm">About Me</label>
                    <textarea
                        name="about"
                        placeholder="Tell us a bit about yourself"
                        className="w-full p-3 mt-1 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                        value={formData.about}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="text-textPrimary font-semibold font-poppins text-sm">My Mental Health Journey</label>
                    <textarea
                        name="mentalHealthJourney"
                        placeholder="What brought you to SafePeer?"
                        className="w-full p-3 mt-1 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                        value={formData.mentalHealthJourney}
                        onChange={handleChange}
                    />
                </div>
            </form>

            {/* Ready to Match Button */}
            <Link to="/matching">
                <button className="w-full max-w-xs mt-6 py-3 text-lg bg-accent text-white rounded-full font-bold font-poppins shadow-md hover:bg-secondary transition">
                    Ready to Match?
                </button>
            </Link>

            {/* Bottom NavBar */}
            <NavBar />
        </div>
    );
};

export default Profile;
