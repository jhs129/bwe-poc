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
      xl: '1280px',
    },
    extend: {
      colors: {
        primaryLight: '#FFF',
        secondaryLight: '#FFF',
        primaryDark: '#003655',
        secondaryDark: '#242323',
        tertiaryDark: '#004976',
        nav1: 'rgba(0,73,118)',
        bgs: '#126298',
        primaryAccent: '#3FC599',
        secondaryAccent: '#3D9BE9',
        tertiaryAccent: 'rgba(192, 100, 45, 0.7)',
      },
      lineHeight: {
        '44': '44px',
      },
      fontFamily: {
        primary: ['var(--font-primary)'],
        secondary: ['var(--font-secondary)'],
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
