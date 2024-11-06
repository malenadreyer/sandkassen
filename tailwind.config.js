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
        'gradient-custom': 'linear-gradient(294deg, #C8DCE5 0%, #B6CCDA 100%)',
      },
      lineHeight: {
        'custom': '4rem',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkGray60: 'rgba(67, 69, 88, 0.6)',
        lightTeal: 'rgba(106, 221, 204, 0.6)',  
        ocean: 'rgb(196,216,226)',
      },
    },
  },
  plugins: [],
};
