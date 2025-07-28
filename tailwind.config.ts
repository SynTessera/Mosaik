console.log("TAILWIND CONFIG");

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./src/**/*.{css}"],
  safelist: [
    {
      pattern: /^h-\[\d+px\]$/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
