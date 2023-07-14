import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import rome from "astro-rome";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), rome()],
  experimental: {
    assets: true
  }
});