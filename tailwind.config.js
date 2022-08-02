/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        
        "background": "url('https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=1200,format=auto,quality=60/https://cdn.doordash.com/media/consumer/home/landing/hero/food/desktop_food.png')",
      },
      colors: {
        'btnred' : '#f22411',
        'footer' : '#191919',
        'playstore' : '#333232'
      }
    },
  },
  plugins: [],
};
