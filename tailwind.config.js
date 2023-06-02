/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      colors: {
        deepGreen: '#046c4e',
        darkBlue: '#1a1a2e',
        mustard: '#ffc857',
        darkGrey: '#252525',
        beige: '#F8F8F8'
      },
    },
    screens: {
      sm: "640px",
      md: "641px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1538px",
    },

  },
  plugins: [],
}
