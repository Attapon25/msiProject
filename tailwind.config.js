/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js",

    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Add your TailwindCSS colors
        primary: "#A40003",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderRadius: {
        "3xl": "3.5rem",
        "4xl": "4rem",
        "5xl": "2.5rem",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
