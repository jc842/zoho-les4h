import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://zoho.les4h.fr",
  trailingSlash: "always",
  build: { format: "directory" },
  devToolbar: { enabled: false },
  vite: { plugins: [tailwindcss()] },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "fr",
        locales: { fr: "fr-FR" },
      },
    }),
  ],
});

