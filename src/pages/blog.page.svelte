<script lang="ts">
  import MetaTags from "~/components/MetaTags.svelte";
  import Layout from "~/pages/__layout.svelte";

  export let __;

  const posts = __.posts;
</script>

<MetaTags url="/blog" title="Melon Blog" description="Blog by Melon" keywords="mrmelon54,melon,blog" />

<Layout>
  <div class="posts">
    {#each posts as post}
      <a href="/blog/{post.year}/{post.month}/{post.day}/{post.key}">{post.title} ({post.year}/{post.month}/{post.day})</a>
    {/each}
  </div>
</Layout>

<style lang="scss">
  .posts {
    display: flex;
    flex-direction: column;
  }
</style>
