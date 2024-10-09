import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
  ],

  optimizeDeps: {
    include: ['esm-dep > cjs-dep'],
  },

  server: {
    proxy: {
      '/api': {
        target:
          'http://ec2-43-200-221-178.ap-northeast-2.compute.amazonaws.com',
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
  },
})
