import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react'; // Asegúrate de importar la integración de React

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()] // Asegúrate de incluir ambas integraciones
});
