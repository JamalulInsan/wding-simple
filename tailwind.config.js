/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "pengantin-background": "url('/assets/pexels-enes-cihanger-610993519-19867153.jpg')"
      },
      fontFamily: {
        'great-vibes': ['"Great Vibes"', 'cursive'],  // Ensure the font name matches exactly
        'dancing-script': ['"Dancing Script"', 'cursive']  // Ensure the font name matches exactly

      }
    },
  },
  plugins: [],
};
