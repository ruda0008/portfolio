/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        page: 'rgb(var(--c-page) / <alpha-value>)',
        surface: 'rgb(var(--c-surface) / <alpha-value>)',
        card: 'rgb(var(--c-card) / <alpha-value>)',
        ink: 'rgb(var(--c-ink) / <alpha-value>)',
        muted: 'rgb(var(--c-muted) / <alpha-value>)',
        accent: 'rgb(var(--c-accent) / <alpha-value>)',
        'accent-hover': 'rgb(var(--c-accent-hover) / <alpha-value>)',
        line: 'var(--c-line)',
        'accent-soft': 'var(--c-accent-soft)',
        // Futuristic Cyber Accents
        cyber: {
          cyan: '#00f0ff',
          emerald: '#10b981',
          purple: '#a855f7',
          pink: '#ec4899',
          amber: '#f59e0b',
          blue: '#38bdf8',
          void: '#05070f',
          panel: '#090d1a',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        heading: ['Syne', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Fraunces', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(0,0,0,0.05), 0 8px 24px rgba(0,0,0,0.12)',
        lift: '0 2px 4px rgba(0,0,0,0.1), 0 18px 44px rgba(0,240,255,0.12)',
        'cyber-cyan': '0 0 25px -4px rgba(0, 240, 255, 0.35)',
        'cyber-emerald': '0 0 25px -4px rgba(16, 185, 129, 0.35)',
        'cyber-purple': '0 0 25px -4px rgba(168, 85, 247, 0.35)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float-slow': {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'radar-sweep': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        'shimmer-beam': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
        'float-slow': 'float-slow 9s ease-in-out infinite',
        'radar-sweep': 'radar-sweep 8s linear infinite',
        'pulse-subtle': 'pulse-subtle 2.5s ease-in-out infinite',
        'shimmer-beam': 'shimmer-beam 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
