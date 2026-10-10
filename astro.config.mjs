import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
    site: "https://portfolio.edugemen.es",
    integrations: [
        react(),
        sitemap({
            lastmod: new Date(),
            // Las canonicals no llevan barra final
            serialize(item) {
                item.url = item.url.replace(/([^/])\/$/, "$1");
                item.links?.forEach((l) => (l.url = l.url.replace(/([^/])\/$/, "$1")));
                return item;
            },
            i18n: { defaultLocale: "es", locales: { es: "es-ES", en: "en-US" } },
        }),
    ],
    output: "static",
    build: { inlineStylesheets: "always" },
    vite: { build: { assetsInlineLimit: 0 } },
    adapter: vercel(),
});
