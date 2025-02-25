import { Outfit, Ovo } from 'next/font/google';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: "#fcf4ff",
        darkHover: "#2a0044a",
        darkTheme: "#11001f",
      },
      // fontFamily:{
      //   Outfit:["Outfit", "sans-serif"],
      //   Ovo:["Ovo", "serif"],
      // },
      fontFamily: {
        // Set default sans to Poppins
        sans: ["Poppins", "sans-serif"],
      },
      boxShadow:{
        'black':'4px 4px 0 #000',
        'white':'4px 4px 0 #fff'
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit, minmax(200px, 1fr))',
      },
      backgroundImage: {
        'footer-bg': "url('/footer-bg-color.png')",
      },
    },
  },
  darkMode: 'selector',
  plugins: [],
};
