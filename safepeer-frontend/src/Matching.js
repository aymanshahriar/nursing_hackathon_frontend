import React from "react";
import NavBar from "./components/NavBar";

const matches = [
    { id: 1, name: "Joe", experience: "Experience with Anxiety/Depression" },
    { id: 2, name: "Jane", experience: "Experience with ADHD" },
    { id: 3, name: "Sam", experience: "Experience with PTSD" },
    { id: 4, name: "Emily", experience: "Experience with Bipolar Disorder" },
];

const Matching = () => {
    return (
        <div className="flex flex-col items-center min-h-screen bg-background px-6 pb-16">
            {/* Page Title */}
            <h2 className="text-2xl font-fredoka text-primary mt-6">My Peer Support Matches</h2>

            {/* Matches List */}
            <div className="w-full max-w-md mt-6 space-y-4">
                {matches.map((match) => (
                    <div key={match.id} className="flex items-center bg-card p-4 rounded-lg shadow-md">
                        <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                        <div className="flex-grow">
                            <h3 className="font-bold font-poppins">{match.name}</h3>
                            <p className="text-sm text-textSecondary">{match.experience}</p>
                        </div>
                        <button className="bg-accent text-white px-4 py-2 rounded-full font-bold font-poppins hover:bg-secondary transition">
                            Match
                        </button>
                    </div>
                ))}
            </div>

            {/* Bottom NavBar */}
            <NavBar />
        </div>
    );
};

export default Matching;
