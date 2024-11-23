/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "olive-green": "#06011a",
        "lime-nav": "#39f505",
        "lime-hover": "#34e203",
      },
    },
  },
  plugins: [],
};
