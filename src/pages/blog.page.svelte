<script lang="ts">
  import Background from "~/components/Background.svelte";
  import MetaTags from "~/components/MetaTags.svelte";
  import Card from "~/components/card/Card.svelte";
  import CardContent from "~/components/card/CardContent.svelte";
  import CardTitle from "~/components/card/CardTitle.svelte";
  import Layout from "~/pages/__layout.svelte";
  import {sortPosts} from "~/post/posts";

  export let __;

  const posts = __.posts.sort((a, b) => sortPosts(a, b));
</script>

<MetaTags url="/blog" title="Melon Blog" description="Blog by Melon" keywords="mrmelon54,melon,blog" />

<Background src="/bg.png" />

<Layout>
  <section class="max-w-7xl mx-auto p-12 flex flex-col gap-8">
    <h1 class="text-4xl">Melon Blog</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {#each posts as post}
        <Card href="/blog/{post.year}/{post.month}/{post.day}/{post.key}">
          <CardTitle>{post.title}</CardTitle>
          <CardContent>{post.year}/{post.month}/{post.day}</CardContent>
        </Card>
      {/each}
    </div>
  </section>
</Layout>
