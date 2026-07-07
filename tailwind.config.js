/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        trust: {
          DEFAULT: "#0B4F8C",
          dark: "#083A69",
          light: "#2E86C1",
        },
        aarogya: {
          DEFAULT: "#1E8F5E",
          light: "#E7F6EE",
        },
        warmth: "#F5A623",
        ink: "#0F2536",
        paper: "#F7FAFC",
      },
      fontFamily: {
        display: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 8px 30px -8px rgba(11, 79, 140, 0.18)",
        card: "0 4px 20px -4px rgba(15, 37, 54, 0.10)",
        glass: "0 8px 32px 0 rgba(11, 79, 140, 0.15)",
      },
      borderRadius: {
        "3xl": "1.75rem",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
