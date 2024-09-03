// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist' // Output directory for the build
  },
  server: {
    port: 3000,      // Development server port
    host: '0.0.0.0'  // Host for cloud platforms like Railway
  },
  base: 'adsite_2.0' // Add this line with your actual GitHub repository name
});
