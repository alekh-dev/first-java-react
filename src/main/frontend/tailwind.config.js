/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#edf5ef',
          100: '#dcece1',
          500: '#4b8668',
          600: '#397456',
          700: '#285d43',
          900: '#17372c',
        },
        ink: '#152235',
        mist: '#f4f7f5',
        mint: '#a9e6c5',
      },
      boxShadow: {
        soft: '0 12px 32px rgba(21, 34, 53, 0.07)',
        lift: '0 20px 48px rgba(5, 15, 24, 0.2)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
