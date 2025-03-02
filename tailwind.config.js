 // /** @type {import('tailwindcss').Config} */
//export default {
  //content: [
   // "./index.html",
  //  "./src/**/*.{js,ts,jsx,tsx}",
 // ],
 // theme: {
  //  extend: {
     /// colors: {
       // "green" : "#39DB4A",
       // "red" : "#FF6868",
        //"secondary" : "#555",
      //  "primary" : "#FCFCFC"
     // },
    //  fontFamily: {
        //"primary" : ['Inter', 'sans-serif']
      //}
    //},
  //},
  //plugins: [require("daisyui")],
//}



/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "green": "#39DB4A",
        "red": "#FF6868",
        "secondary": "#555",
        "primary": "#FCFCFC",
      },
      fontFamily: {
        "primary": ['Inter', 'sans-serif'],
      },

      screens: {
        
        '3xl': '1920px', // For screens wider than 1920px
        '4xl': '2560px', // For ultra-wide screens
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#FCFCFC",  // White background
          "secondary": "#555",
          "accent": "#39DB4A",
          "neutral": "#FF6868",
          "base-100": "#FCFCFC",  // Base background color set to white
        },
      },
    ],
    darkTheme: false,  // Disable dark mode entirely
  },
};
