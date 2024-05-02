import {defineConfig} from "vite";
import {svelte} from "@sveltejs/vite-plugin-svelte";

import {resolve as pathResolve} from "path";
import ssr from "vite-plugin-ssr/plugin";
import svelteConfig from "./svelte.config";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: true,
  },
  server: {
    port: 5173,
  },
  plugins: [
    svelte(svelteConfig),
    ssr({
      prerender: true,
    }),
  ],
  optimizeDeps: {exclude: ["svelte-navigator"]},
  resolve: {
    alias: {
      "~": pathResolve(__dirname, "src"),
    },
  },
});
