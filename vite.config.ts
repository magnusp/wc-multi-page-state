import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: './', // Ensures relative paths for file:// compatibility
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        showcase: resolve(__dirname, 'showcase.html'),
        dashboard: resolve(__dirname, 'dashboard.html'),
        dashboardNodes: resolve(__dirname, 'dashboard-nodes.html')
      }
    }
  }
});
