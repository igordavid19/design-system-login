/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
    },

    colors: {
      transparent: 'transparent',

      'red-200': '#F67272',
      'red-500': '#DC2626',
      'white': '#FFFFFF',
      'black': '#000000',
      'black-100': '#121214',
      'gray-800': '#64748B',
      'gray-500': '#D9D9D9',
      'cyan-300': '#0284C7',

    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      },
    },
  },
  plugins: [],
}
