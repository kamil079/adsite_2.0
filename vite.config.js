// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist' // You can customize this
  },
  server: {
    port: 3000,    // Example: set server to run on port 3000
    host: '0.0.0.0' // Set host to 0.0.0.0 for Railway or other cloud platforms
  }
});
