import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  base: '/will-bb-be-my-valentine-page/',
  build: {
    minify: 'esbuild', // Change to 'esbuild'
    sourcemap: false,
  },
})
