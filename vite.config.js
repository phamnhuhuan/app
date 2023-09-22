import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    proxy: {
      'huanapi.000webhostapp.com': 'huanapi.000webhostapp.com'
    },
    https: true,
    port: 3306
  },
  plugins: [vue()],
  base:'/app/'
})