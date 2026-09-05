import { defineConfig } from 'vite';
import { resolve } from 'path';
import { readdirSync } from 'fs';

const srcDir = resolve(__dirname, 'src');
const htmlInputs = Object.fromEntries(
  readdirSync(srcDir)
    .filter((file) => file.endsWith('.html'))
    .map((file) => [file.replace(/\.html$/, ''), resolve(srcDir, file)])
);

export default defineConfig({
  root: 'src',
  base: './', // Ensures relative paths for file:// and subpath compatibility
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: htmlInputs
    }
  }
});
