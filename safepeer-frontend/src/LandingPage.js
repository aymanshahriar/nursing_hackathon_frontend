import React from "react";

const LandingPage = () => {
    return (
        <div className="min-h-screen flex flex-col bg-background text-textPrimary">
            {/* Sidebar */}
            <aside className="w-60 h-screen bg-card p-6 flex flex-col justify-between fixed">
                <nav>
                    <h2 className="text-primary text-2xl font-fredoka mb-6">Safe Peer</h2>
                    <ul className="space-y-4">
                        <li className="text-primary font-poppins font-semibold">
                            <i className="fas fa-home mr-2"></i> Home
                        </li>
                        <li className="text-textSecondary font-poppins">
                            <i className="fas fa-calendar mr-2"></i> Calendar
                        </li>
                        <li className="text-textSecondary font-poppins">
                            <i className="fas fa-comments mr-2"></i> Messages
                        </li>
                        <li className="text-textSecondary font-poppins">
                            <i className="fas fa-book mr-2"></i> Resources
                        </li>
                        <li className="text-textSecondary font-poppins">
                            <i className="fas fa-user mr-2"></i> Profile
                        </li>
                    </ul>
                </nav>
                <button className="text-red-600 font-poppins">
                    <i className="fas fa-sign-out-alt mr-2"></i> Logout
                </button>
            </aside>

            {/* Main Content */}
            <main className="ml-60 flex flex-col items-center justify-center flex-grow p-10">
                <h1 className="text-primary text-6xl font-fredoka">Safe Peer</h1>
                <p className="text-center mt-4 text-xl font-montserrat max-w-2xl">
                    A secure, AI-powered peer support platform designed to reduce loneliness
                    and foster connection for adolescents in psychiatric care.
                </p>
                <button className="mt-6 bg-secondary px-6 py-3 text-white font-bold font-fredoka rounded-lg shadow-lg hover:bg-primary transition">
                    Get Started
                </button>

                {/* Feature Cards */}
                <div className="grid grid-cols-3 gap-6 mt-12">
                    <div className="bg-card p-6 rounded-lg shadow-md flex flex-col items-center">
                        <i className="fas fa-brain text-primary text-4xl mb-3"></i>
                        <h3 className="text-lg font-semibold font-poppins">AI-Powered Peer Matching</h3>
                        <p className="text-center text-textSecondary text-sm mt-2">
                            Find a peer with shared experiences for personalized, non-judgmental support.
                        </p>
                    </div>
                    <div className="bg-card p-6 rounded-lg shadow-md flex flex-col items-center">
                        <i className="fas fa-video text-primary text-4xl mb-3"></i>
                        <h3 className="text-lg font-semibold font-poppins">Live Video Support</h3>
                        <p className="text-center text-textSecondary text-sm mt-2">
                            Connect securely with your peer supporter through encrypted video calls.
                        </p>
                    </div>
                    <div className="bg-card p-6 rounded-lg shadow-md flex flex-col items-center">
                        <i className="fas fa-lock text-primary text-4xl mb-3"></i>
                        <h3 className="text-lg font-semibold font-poppins">Secure Journal & Resource Space</h3>
                        <p className="text-center text-textSecondary text-sm mt-2">
                            Reflect on your journey and access trusted mental health resources.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default LandingPage;
