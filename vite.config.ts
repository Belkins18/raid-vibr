import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'
import { nodeResolve } from '@rollup/plugin-node-resolve'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        autoprefixer({}), // add options if needed
      ],
    },
  },
  resolve: {
    alias: {
     "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      plugins: [nodeResolve()],
      output: {
        dir: 'dist',
        format: 'esm',
        manualChunks: (id) => {
          // if (id.includes('commonjsHelpers')) return 'commonjsHelpers'
          // if (id.includes('apexcharts')) return 'charts'
          if (id.includes('node_modules/lodash')) return 'lodash'
          if (id.includes('node_modules/swiper')) return 'swiper'
          if (id.includes('node_modules/@wagmi')) return '@wagmi'
          if (id.includes('node_modules/@walletconnect'))
            return '@walletconnect'
          if (id.includes('node_modules/@web3modal')) return '@web3modal'
        },
        minifyInternalExports: true
      },
    },
  },
})
