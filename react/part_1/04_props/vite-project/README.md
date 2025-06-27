first make a vite+react project

then run
npm install tailwindcss @tailwindcss/vite

then make the vite.config.js like this

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})


then add 
@import "tailwindcss";
to index.css

every tag should be closing in jsx