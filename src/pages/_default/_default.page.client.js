export const clientRouting = true;

export const prefetchStaticAssets = {when: "HOVER"};

export async function render(pageContext) {
  const app_el = document.getElementById("app");
  new pageContext.Page({
    target: app_el,
    hydrate: true,
    props: {
      __: pageContext.__,
      pageProps: pageContext.pageProps,
    },
  });
}

export function onPageTransitionStart(pageContext) {
  console.log("Page transition start");
  // `pageContext.isBackwardNavigation` is also set at `render(pageContext)`
  // and `onPageTransitionEnd(pageContext)`.
  console.log("Is backwards navigation?", pageContext.isBackwardNavigation);
  // For example:
  document.body.classList.add("page-transition");
}

export function onPageTransitionEnd(pageContext) {
  console.log("Page transition end");
  // For example:
  document.body.classList.remove("page-transition");
}
