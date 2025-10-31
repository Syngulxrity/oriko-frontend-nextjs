/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'oriko-primary': '#1e40af', // Exemplo de cor primária
        'oriko-secondary': '#60a5fa', // Exemplo de cor secundária
      },
    },
  },
  plugins: [],
}
