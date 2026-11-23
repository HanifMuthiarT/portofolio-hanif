import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    watch: {
      // Folder CV berisi PDF dan file lock sementara (mis. mso*.tmp dari Word)
      // yang sering terkunci. Mengabaikan seluruh folder mencegah Vite crash
      // dengan EBUSY saat file dibuka di aplikasi lain.
      ignored: ['**/public/resume/**', '**/*.pdf', '**/*.tmp'],
    },
  },
})
