import React, { useState } from "react";
import NavBar from "./components/NavBar";

const Journal = () => {
    const [entry, setEntry] = useState("");
    const [isShared, setIsShared] = useState(false);

    // ✅ Get today's date
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const handleSave = () => {
        alert(`Journal saved! ${isShared ? "Shared with peer supporter." : "Kept private."}`);
        setEntry(""); // Clears the journal after saving
        setIsShared(false);
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-background px-6 pb-16">

            {/* Page Title */}
            <h2 className="text-4xl font-fredoka text-primary mt-6">Journal</h2>
            <p className="text-center text-base text-gray-500 font-montserrat mt-2 max-w-md">
                Write your thoughts, feelings, or reflections. Choose to keep them private or share with your peer supporter.
            </p>

            {/* ✅ Display Date */}
            <p className="mt-4 text-lg font-semibold text-gray-600">{formattedDate}</p>

            {/* Journal Entry Box */}
            <div className="mt-2 w-full max-w-md bg-card p-6 rounded-lg shadow-md">
                <textarea
                    className="w-full h-48 p-3 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Write your journal entry here..."
                    value={entry}
                    onChange={(e) => setEntry(e.target.value)}
                ></textarea>

                {/* Share Toggle */}
                <div className="flex items-center justify-between mt-4">
                    <label className="text-textPrimary font-poppins">Share with peer supporter?</label>
                    <input
                        type="checkbox"
                        checked={isShared}
                        onChange={() => setIsShared(!isShared)}
                        className="h-6 w-6 rounded-md border-gray-300 bg-white focus:ring-primary cursor-pointer"
                    />
                </div>
            </div>

            {/* Save Journal Button */}
            <button
                onClick={handleSave}
                className="mt-6 w-full max-w-xs py-4 text-lg bg-accent text-white font-bold font-poppins shadow-md hover:bg-secondary transition rounded-full"
            >
                Save Journal
            </button>

            {/* Bottom Navigation */}
            <NavBar />
        </div>
    );
};

export default Journal;
