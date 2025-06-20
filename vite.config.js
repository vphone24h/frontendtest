import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // Căn cứ deploy trên root domain, đổi nếu deploy trong subfolder
  plugins: [react()],
  server: {
    port: 5174,
    open: true,
  },
  build: {
    outDir: 'dist',
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
