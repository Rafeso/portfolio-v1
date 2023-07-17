import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";
import vercel from '@astrojs/vercel/edge';

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: 'https://rafael-feitosa.vercel.app',
  output: 'server',
  adapter: vercel({
    analytics: true,
  }),
  integrations: [tailwind(), react(), compress(), sitemap(), prefetch(), robotsTxt()],
  experimental: {
    assets: true
  }
});