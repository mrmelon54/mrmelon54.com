<script lang="ts">
  import Background from "~/components/Background.svelte";
  import MetaTags from "~/components/MetaTags.svelte";
  import Layout from "~/pages/__layout.svelte";

  export let __;

  async function importPostPath(__) {
    let p = __.routeParams;
    return await Promise.any([
      import(`../../../../../post/${p.year}/${p.month}/${p.day}/${p.name}.svx`),
      import(`../../../../../post/${p.year}/${p.month}/${p.day}/${p.name}.svelte`),
    ]);
  }
  let page = importPostPath(__);
</script>

<MetaTags url={__.urlOriginal} title={__.meta.title} description={__.meta.description} keywords={__.meta.keywords} />

<Background src="/bg.png" />

<Layout>
  <section class="max-w-7xl mx-auto p-0 py-12 md:p-12 flex flex-col gap-8">
    {#await page}
      <div>Loading...</div>
    {:then loadedPage}
      <div class="markdown-body p-8">
        <svelte:component this={loadedPage.default} />
      </div>
    {:catch err}
      <div>Error: {err}</div>
    {/await}
  </section>
</Layout>

<style lang="postcss">
  .markdown-body {
    @apply p-8 border-b md:border border-gray-500 md:rounded-lg;
    text-align: left;
  }
</style>
