import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
    plugins: [vue()],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
              @import "./src/assets/scss/global.scss";
              @import "./src/assets/scss/variables.scss";
              @import "./src/assets/scss/transitions.scss";
            `
            }
        }
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    }
})


