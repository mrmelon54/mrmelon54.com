export {render};

export const clientRouting = true;

export const prefetchStaticAssets = {when: "HOVER"};

async function render(pageContext) {
  const app_el = document.getElementById("app");
  new pageContext.Page({
    target: app_el,
    hydrate: true,
    props: {
      pageProps: pageContext.pageProps,
    },
  });
}
