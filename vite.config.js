import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' makes asset paths relative, so the site works at
// https://<username>.github.io/<repo-name>/ without extra config.
export default defineConfig({
  plugins: [react()],
  base: './',
})
