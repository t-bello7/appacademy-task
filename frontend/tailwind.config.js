/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index/html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      // transparent: 'transparent',
      // white: 'hsl(0, 0%, 100%)',
      // 
    },
    fontFamily: {
      sans: ["DM Sans"],
      satoshi: ["Satoshi", "sans-seriff"],
    },
    extend: {},
  },
  plugins: [],
}

