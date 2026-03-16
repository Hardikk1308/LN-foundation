import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['ln-foundation-2.onrender.com']
  },
  preview: {
    allowedHosts: ['ln-foundation-2.onrender.com']
  }
})
