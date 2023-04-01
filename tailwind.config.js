/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./public/*.html"],
  theme: {
  
    extend: {
      colors: {
        gry : '#e4eddb',
        purp: '#5b446a',
        yelwsh : '#e6f18c',
        cyandark : '#faffb8',
        orang:'#ff5722',
        yelwsh1:'#fec100',
        unk:'#ff9de2'


     },
    },
  },
  plugins: [ ],
}
