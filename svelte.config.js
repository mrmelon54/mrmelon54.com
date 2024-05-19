import sveltePreprocess from "svelte-preprocess";
import {mdsvex} from "mdsvex";

export default {
  extensions: [".svelte", ".svx", ".md"],
  preprocess: [
    sveltePreprocess({
      preserve: ["ld+json"],
      postcss: {
        includePaths: ["src/"],
        quietDeps: true,
      },
    }),
    mdsvex({
      extensions: [".svx", ".md"],
    }),
  ],
  compilerOptions: {
    hydratable: true,
  },
};
