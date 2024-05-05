import {posts, postsRaw} from "../../../../../post/posts";

export async function prerender() {
  return posts.flatMap(x => [`/blog/${x.year}/${x.month}/${x.day}/${x.key}`]);
}

export async function onBeforeRender(pageContext) {
  const {routeParams, urlOriginal} = pageContext;
  const meta = postsRaw[routeParams.year][routeParams.month][routeParams.day];
  return {
    pageContext: {
      __: {
        routeParams,
        urlOriginal,
        meta,
      },
    },
  };
}
