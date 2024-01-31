/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1280px",
      },
    },
    boxShadow: {
      primary: "0px 4px 20px 0px rgba(21, 116, 195, 0.50)",
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      backgroundColor: {
        primary: "#050520",
        secondary: "#1574C3",
        button: "#0A3A62",
      },
      colors: {
        primary: "#0A3A62",
        primaryDark: "#050520",
        secondary: "#1574C3",
        "accent-green": "#43CB81",
        "accent-red": "#CB4343",
        paragraph: "#E2E2E2",
        "accent-gray": "#A7A7A7",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
