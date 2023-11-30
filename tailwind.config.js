/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
    },
    extend: {
      colors: {
        primaryLight: '#FFF',
        secondaryLight: '#EAE4C8',
        primaryDark: '#121212',
        secondaryDark: '#686868',
        primaryAccent: '#88E8F0',
        secondaryAccent: '#EB633F',
        tertiaryAccent: 'rgba(192, 100, 45, 0.7)',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        secondary: ['var(--font-ibm-plex-sans)'],
        foo: ['IBM Plex Sans', 'sans-serif'],
      },
      listStyleImage: {
        ringsPrimaryAccent: "url('/images/mark-teal2.svg')",
        ringsSecondaryAccent: "url('/images/mark-orange.svg')",
        ringsPrimaryDark: "url('/images/mark-black.svg')"
      },
    },
  },
  plugins: [

  ],
}
