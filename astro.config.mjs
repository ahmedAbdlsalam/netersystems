import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://example.com', // Replace with your Cloudflare domain before launch.
  vite: { plugins: [tailwindcss()] },
});
