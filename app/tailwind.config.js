/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
      minWidth: {
          '400' : '400px',
          '300' : '300px',
      },
      extend: {},
  },
  plugins: [
      require('flowbite/plugin')
  ],
}

