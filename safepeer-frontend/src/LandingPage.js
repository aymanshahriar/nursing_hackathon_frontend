import React, { useState } from "react";

const LandingPage = () => {
    // State to control mobile menu visibility
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="min-h-screen flex flex-col lg:flex-row bg-background text-textPrimary">
            {/* Sidebar (Hidden on mobile, visible on larger screens) */}
            <aside className="w-60 h-screen bg-card p-6 flex-col justify-between fixed hidden lg:flex">
                <nav>
                    <h2 className="text-primary text-2xl font-fredoka mb-6">Safe Peer</h2>
                    <ul className="space-y-4">
                        <li>
                            <a href="#" className="text-primary font-poppins font-semibold">
                                <i className="fas fa-home mr-2"></i> Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-textSecondary font-poppins">
                                <i className="fas fa-calendar mr-2"></i> Calendar
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-textSecondary font-poppins">
                                <i className="fas fa-comments mr-2"></i> Messages
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-textSecondary font-poppins">
                                <i className="fas fa-book mr-2"></i> Resources
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-textSecondary font-poppins">
                                <i className="fas fa-user mr-2"></i> Profile
                            </a>
                        </li>
                    </ul>
                </nav>
                <button className="text-red-600 font-poppins">
                    <i className="fas fa-sign-out-alt mr-2"></i> Logout
                </button>
            </aside>

            {/* Mobile Navbar */}
            <header className="lg:hidden w-full bg-card p-4 flex justify-between items-center fixed top-0 z-50 shadow-md">
                <h2 className="text-primary text-xl font-fredoka">Safe Peer</h2>
                <button
                    className="text-primary text-lg"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <i className="fas fa-bars"></i>
                </button>
            </header>

            {/* Mobile Navigation Menu (Only visible when toggled) */}
            {isMenuOpen && (
                <div className="lg:hidden fixed top-14 left-0 w-full bg-card p-4 shadow-md z-50">
                    <ul className="space-y-4 text-center">
                        <li>
                            <a href="#" className="text-primary font-poppins font-semibold">
                                <i className="fas fa-home mr-2"></i> Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-textSecondary font-poppins">
                                <i className="fas fa-calendar mr-2"></i> Calendar
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-textSecondary font-poppins">
                                <i className="fas fa-comments mr-2"></i> Messages
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-textSecondary font-poppins">
                                <i className="fas fa-book mr-2"></i> Resources
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-textSecondary font-poppins">
                                <i className="fas fa-user mr-2"></i> Profile
                            </a>
                        </li>
                    </ul>
                </div>
            )}

            {/* Main Content */}
            <main className="lg:ml-60 flex flex-col items-center justify-center flex-grow p-6 lg:p-10 text-center pt-20">
            <h1 className="text-primary text-4xl md:text-6xl font-fredoka">Safe Peer</h1>
                <p className="mt-4 text-lg md:text-xl font-montserrat max-w-xl">
                    A secure, AI-powered peer support platform designed to reduce loneliness
                    and foster connection for adolescents in psychiatric care.
                </p>
                <button className="mt-6 bg-secondary px-6 py-3 text-white font-bold font-fredoka rounded-lg shadow-lg hover:bg-primary transition">
                    Get Started
                </button>

                {/* Feature Cards (Stacked on small screens) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
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
