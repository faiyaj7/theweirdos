/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sora: ["Sora", "sans-serif"],
        akaya: ["Akaya Telivigala", "system-ui"],
      },
      animation: {
        spin: "spin 4s linear infinite reverse",
      },
    },
  },
  plugins: [],
};
