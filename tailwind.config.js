/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        light: {
          background: '#f1f5f9',  
          card: '#fff',
          text: '#1f2937',        
          primary: '#3b82f6',     
          secondary: '#9ca3af',   
        },
        dark: {
          background: '#0f172a', 
          card: '#1e293b', 
          text: '#f9fafb',        
          primary: '#4338ca',     
          secondary: '#4b5563',   
        }
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}

