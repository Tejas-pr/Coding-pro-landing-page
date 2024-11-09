/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../src/icons/binary.svg')",
        'section8bg': "url('../src/icons/floating.svg')",
        'section9bg': "url('../src/icons/section9bg.svg')",
      }
    },
  },
  plugins: [],
}

// ../src/icons/binary.svg