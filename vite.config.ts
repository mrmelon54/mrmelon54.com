import {defineConfig} from "vite";
import {svelte} from "@sveltejs/vite-plugin-svelte";
import sveltePreprocess from "svelte-preprocess";
import {resolve as pathResolve} from "path";
import ssr from "vite-plugin-ssr/plugin";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: true,
  },
  server: {
    port: 5173,
  },
  plugins: [
    svelte({
      preprocess: sveltePreprocess({
        preserve: ["ld+json"],
        scss: {
          includePaths: ["src/"],
          quietDeps: true,
        },
      }),
      compilerOptions: {
        hydratable: true,
      },
    }),
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
