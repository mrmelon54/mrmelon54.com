import {escapeInject, dangerouslySkipEscape} from "vite-plugin-ssr/server";
const base = import.meta.env.BASE_URL;

// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ["__", "pageProps", "routeParams", "urlOriginal"];

export async function onBeforeRender(pageContext) {
  const {routeParams, urlOriginal} = pageContext;

  return {
    pageContext: {
      __: {
        routeParams,
        urlOriginal,
      },
    },
  };
}

export async function render(pageContext) {
  const app = pageContext.Page.render(pageContext);
  const appHtml = app.html;
  const appCss = app.css.code;
  const appHead = app.head;

  // We are using Svelte's app.head variable rather than the Vite Plugin SSR
  // technique described here: https://vite-plugin-ssr.com/html-head This seems
  // easier for using data fetched from APIs and also allows us to input the
  // data using our custom MetaTags Svelte component.

  return escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${base}logo.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        ${dangerouslySkipEscape(appHead)}
        <style>${appCss}</style>
      </head>
      <body>
        <div id="app">${dangerouslySkipEscape(appHtml)}</div>
      </body>
    </html>`;
}
