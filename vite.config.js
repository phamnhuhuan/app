import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import mkcert from'vite-plugin-mkcert'
// https://vitejs.dev/config/
export default defineConfig({
  server: {
host: true,
// port: 8080,
cors: false,
https: true,
  },
  plugins: [vue(),mkcert()],
  base:'/app/'
})
