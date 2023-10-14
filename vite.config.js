import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/hiking-concept-girl-landing-page/",
  plugins: [react()],
})
