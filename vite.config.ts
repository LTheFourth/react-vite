import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

/** @type {import('vite').UserConfig} */
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  envDir: './src/environments/',
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: [path.resolve(__dirname, './src/assets/shared/styles/')],
      },
    },
  },
  resolve: {
    alias: {
      'src': path.resolve(__dirname, './src'),
      '@shared': path.resolve(__dirname, './src/shared/'),
      '@assets': path.resolve(__dirname, './src/assets/'),
      '@components': path.resolve(__dirname, './src/components/'),
      '@pages': path.resolve(__dirname, './src/pages/'),
    },
  },
});
