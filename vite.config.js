import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Output directory
    sourcemap: true, // Helpful for debugging in production
  },
  resolve: {
    alias: {
      '@components': '/src/components', // Optional alias for easier imports
    },
  },
  server: {
    port: 3000, // Specify the port for development server
  },
});