/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    extend: {
        colors: {
          primaryPurple: "#BF2C7D",
          secondaryPurple: "#73204E",
          primaryBlue: "#0388A6",
          secondaryBlue: "#024873",
        }
    },
  },
  plugins: [],
};
