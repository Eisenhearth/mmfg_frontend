/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "admin-bg": "url('/admin-bg.png')",
      },
      colors: {
        'mm-dark': '#121212',
        'mm-black': '#000000',
        'mm-orange': '#E07006',
        'mm-sage': '#3991B0',
        'mm-white': '#FFFFFF',
        'mm-smoke': "#1F1F1F",
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        anton: ['var(--font-anton)'],
      },
    },
  },
  plugins: [],
};
