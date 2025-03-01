/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#02868B",  // Deep Teal (Primary CTA)
                secondary: "#FFD45F", // Soft Yellow (Buttons, Highlights)
                accent: "#FF8012", // Orange (Strong Emphasis)
                background: "#F9F7EE", // Light Beige (Main Background)
                card: "#FEF3D8", // Card Background
                textPrimary: "#1E293B", // Dark Gray for Text
                textSecondary: "#4B5563", // Lighter Gray for secondary text
                borderGray: "#B6B1A4",
            },
            fontFamily: {
                fredoka: ["Fredoka", "sans-serif"],
                poppins: ["Poppins", "sans-serif"],
                montserrat: ["Montserrat", "sans-serif"],
                nunito: ["Nunito", "sans-serif"],
            },
        },
    },
    plugins: [],
};
