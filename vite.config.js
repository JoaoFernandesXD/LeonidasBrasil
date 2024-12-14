import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  build: {
    target: 'esnext', // ou 'es6' para maior compatibilidade com navegadores modernos
  },
  resolve: {
    alias: {
      buffer: 'buffer-es6',
      stream: 'stream-browserify',
      crypto: 'crypto-browserify',
      url: 'url',
      http: 'stream-http',
      https: 'stream-http',
    }
  }
  plugins: [react()],
});
