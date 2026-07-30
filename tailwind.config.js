/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: '#0D1B2A',      // Darkest Twilight Navy
        bgSecondary: '#1B263B',    // Deep Twilight Blue
        bgTertiary: '#415A77',     // Slate Twilight Blue
        accentLight: '#778DA9',    // Light Twilight Muted Blue
        textPrimary: '#E0E1DD',    // Soft Off-White
        accentIndigo: '#415A77',   // Theme primary accent
        accentViolet: '#778DA9',   // Theme secondary accent
        accentCyan: '#778DA9',     // Theme highlight
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 25s linear infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.08)' },
        },
      },
    },
  },
  plugins: [],
};
