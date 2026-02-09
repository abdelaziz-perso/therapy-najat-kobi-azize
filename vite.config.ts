import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Site is served at domain root (najatkobi-therapie.ma/), so base must be '/'
export default defineConfig({
  plugins: [react()],
  base: '/',
})
