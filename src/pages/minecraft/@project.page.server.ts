export async function onBeforeRender(pageContext) {
  const {project} = pageContext.routeParams;
  const pageProps = {project};

  return {
    pageContext: {
      pageProps,
    },
  };
}

export const passToClient = ["pageProps"];
