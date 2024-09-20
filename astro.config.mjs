import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import sitemap from "@inox-tools/sitemap-ext";

// Check if node is running in production mode
// const prodBuild = process.env.NODE_ENV === "production";
const prodBuild = true;

const site = prodBuild ? "https://aluu.xyz" : "http://localhost:3000";

export default defineConfig({
  site: site,
  integrations: [
		sitemap({
			includeByDefault: true,
		}),
  ],
  output: "server",
  adapter: node({
    mode: "middleware",
  }),
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
});
