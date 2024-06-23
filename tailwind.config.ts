import type { Config } from "tailwindcss"

const config = {
  darkMode: ['selector', '[data-mode="dark"]'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    extend: {
      colors: {
        "background": '#121212',
        'ice-white': '#eae3e3'
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config