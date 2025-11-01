// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    optimizeDeps: {
      include: ['leaflet'],
    },
    plugins: [tailwindcss()]
  }
});

export default defineConfig({
  site: 'https://apothekenluft.github.io',
  base: '/apothekenluft.de-website',
})
