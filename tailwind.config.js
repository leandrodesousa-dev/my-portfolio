// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  // CRUCIAL para o Dark Mode por botão
  darkMode: 'class', 
  
  content: [
    // Garante que o Tailwind analise todos os seus arquivos
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}', 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}