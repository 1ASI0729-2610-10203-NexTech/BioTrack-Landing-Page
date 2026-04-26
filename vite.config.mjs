import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';

const rootDir = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  root: 'docs',
  base: '/Landing-Page/',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(rootDir, 'docs/index.html'),
        login: resolve(rootDir, 'docs/pages/login.html'),
        signup: resolve(rootDir, 'docs/pages/signup.html')
      }
    }
  }
});
