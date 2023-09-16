/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "body-primary": "var(--bg-body)",
        "body-secondary": "var(--bg-secondary)"
      },
      colors: {
        "color-primary": "var(--color-primary)",
        "color-secondary": "var(--color-secondary)",
        "color-tertiary": "var(--color-tertiary)",
      },
      fontFamily: {
        'anton': ['var(--font-anton)']
      }
    },
  },
  plugins: [],
}

