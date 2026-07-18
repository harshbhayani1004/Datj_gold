/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C2AA78",
        secondary: "#13293D",
        accent: "#506C63",
        "primary-light": "#EBE5D8",
        "secondary-dark": "#0B1B2A",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Times New Roman", "serif"],
        sans: ["Manrope", "Arial", "sans-serif"],
      },
      container: {
        center: true,
        padding: '2rem',
        screens: {
          '2xl': '1400px',
        },
      },
      keyframes: {
        "scroll-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "scroll-right": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        }
      },
      animation: {
        "scroll-left": "scroll-left 15s linear infinite",
        "scroll-right": "scroll-right 15s linear infinite",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
}
