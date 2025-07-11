import { build } from 'vite';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function buildForVercel() {
  console.log('Building for Vercel deployment...');
  
  // Build the frontend
  await build({
    root: join(__dirname, 'client'),
    base: '/',
    build: {
      outDir: join(__dirname, 'dist/public'),
      emptyOutDir: true,
    },
  });
  
  console.log('Build completed successfully!');
}

buildForVercel().catch(console.error);