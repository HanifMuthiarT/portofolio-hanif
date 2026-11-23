import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    watch: {
      // File PDF sering terkunci oleh pembaca PDF; mengabaikannya mencegah
      // Vite crash dengan EBUSY saat file dibuka di aplikasi lain.
      ignored: ['**/*.pdf'],
    },
  },
})
