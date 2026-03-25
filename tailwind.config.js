/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_layouts/**/*.html',
    './_includes/**/*.html',
    './_data/**/*.yml',
    './*.html',
    './*.md',
    './services/**/*.html',
    './services/**/*.md',
    './about.html',
    './contact.html',
    './insights/**/*.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'ml-charcoal':   '#212529',
        'ml-slate-grey': '#495057',
        'ml-gold':       '#a98c5a',
        'ml-gold-dark':  '#8a7048',
        'ml-slate-blue': '#4a6572',
        'ml-light-bg':   '#f8f9fa',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
}
