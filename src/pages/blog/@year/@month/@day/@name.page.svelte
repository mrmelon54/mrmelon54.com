<script lang="ts">
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

<Layout narrow={true}>
  {#await page}
    <div>Loading...</div>
  {:then loadedPage}
    <div class="markdown-body">
      <svelte:component this={loadedPage.default} />
    </div>
  {:catch err}
    <div>Error: {err}</div>
  {/await}
</Layout>

<style lang="scss">
  .markdown-body {
    text-align: left;
  }
</style>
