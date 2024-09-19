/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { max: "400px" },
      },
      colors: {
        emerald: "#2ecc71",
        "emerald-dark": "#27ae60",
      },
    },
  },
  plugins: [],
};
