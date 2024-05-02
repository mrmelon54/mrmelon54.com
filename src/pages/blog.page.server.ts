import {posts} from "../post/posts";

export async function onBeforeRender(pageContext) {
  const {routeParams, urlOriginal} = pageContext;
  return {
    pageContext: {
      __: {
        routeParams,
        urlOriginal,
        posts,
      },
    },
  };
}
