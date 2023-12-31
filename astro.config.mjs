import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";
import robotsTxt from "astro-robots-txt";

import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  site: "https://rafaelfeitosa.vercel.app",
  output: "static",
  adapter: vercel({
    analytics: true,
  }),
  integrations: [tailwind(), react(), sitemap(), prefetch(), robotsTxt()],
});
