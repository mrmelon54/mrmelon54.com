<script lang="ts">
  import MetaTags from "~/components/MetaTags.svelte";
  import Layout from "~/pages/__layout.svelte";
  import {sortPosts} from "~/post/posts";

  export let __;

  const posts = __.posts.sort((a, b) => sortPosts(a, b));
</script>

<MetaTags url="/blog" title="Melon Blog" description="Blog by Melon" keywords="mrmelon54,melon,blog" />

<Layout>
  <h1 class="title-text">Melon Blog</h1>
  <div class="posts">
    {#each posts as post}
      <a class="posts-item" href="/blog/{post.year}/{post.month}/{post.day}/{post.key}">
        <span class="posts-item-name">{post.title}</span>
        <span class="posts-item-description">{post.year}/{post.month}/{post.day}</span>
      </a>
    {/each}
  </div>
</Layout>

<style lang="scss">
  .title-text {
    margin: 0 0 24px 0;
    font-size: 3.2em;
    line-height: 1.1;
  }

  .posts {
    display: flex;
    padding: 24px;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;

    .posts-item {
      width: calc((600px - 4rem - 16px) * 0.5);
      align-self: stretch;
      display: flex;
      flex-direction: column;
      background: var(--bg-panel);
      border-radius: 16px;
      -webkit-box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5);
      -moz-box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5);
      box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5);
      overflow: hidden;

      > .posts-item-name {
        padding: 16px 16px 8px 16px;
        color: var(--primary-text);
      }

      > .posts-item-description {
        font-size: 90%;
        padding: 0 8px 8px 8px;
        color: gray;
        margin: auto;
      }
    }
  }
</style>
