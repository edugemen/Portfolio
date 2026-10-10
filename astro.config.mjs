import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
    site: "https://portfolio.edugemen.es",
    integrations: [react()],
    output: "static",
    adapter: vercel(),
});
