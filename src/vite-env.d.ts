/// <reference types="svelte" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_CSS_VAR: string;
  readonly VITE_URL_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
