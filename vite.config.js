import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/my-portfolio/',
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // increases warning threshold to 1000 kB
  },
});
