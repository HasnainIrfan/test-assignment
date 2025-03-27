/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        white: "var(--white)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        gray: "var(--gray)",
        lightGray: "var(--light-gray)",
        black: "var(--black)",
      },
      boxShadow: {
        custom: "0 8px 15px rgba(20,20,20,0.12), 0 0px 4px rgba(20,20,20,0.1)",
      },
    },
  },
  plugins: [],
};
