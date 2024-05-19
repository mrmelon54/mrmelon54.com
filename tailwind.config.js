/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
"./src/pages/**/*.svelte",
"./src/components/**/*.svelte",
],
  plugins: [
    require("@tailwindcss/typography")
  ]
};
