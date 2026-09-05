import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src/pages',
  base: './', // Ensures relative paths for file:// and subpath compatibility
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/pages/index.html'),
        showcase: resolve(__dirname, 'src/pages/showcase.html'),
        dashboard: resolve(__dirname, 'src/pages/dashboard.html'),
        dashboardNodes: resolve(__dirname, 'src/pages/dashboard-nodes.html')
      }
    }
  }
});
