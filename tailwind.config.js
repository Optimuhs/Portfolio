/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "641px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1538px",
    },
    extend: {},
  },
  plugins: [],
}
