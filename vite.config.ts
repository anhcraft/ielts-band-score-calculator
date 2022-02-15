import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://anhcraft.dev/ielts-band-score-calculator/",
  plugins: [vue()]
})
