/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'white-border': '#eaeaea',
        'tech-blue': '#358aca',
      },
      boxShadow: {
        'card-shadow': '4px 4px 2px 1px tech-blue;',
      },
    },
  },
  plugins: [],
}

