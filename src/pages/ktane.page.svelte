<script lang="ts">
  import MetaTags from "~/components/MetaTags.svelte";
  import Layout from "~/pages/__layout.svelte";

  export let pageProps;
  let _ = pageProps;
</script>

<MetaTags title="KTaNE | MrMelon54.com" description="MrMelon54.com KTaNE Projects" />

<Layout isHome={true}>
  <h1 class="title-text">MrMelon54 KTaNE Projects</h1>
  <ul>
    <li>
      <a href="https://ktane-ideas.mrmelon54.com">KTaNE Mod Ideas</a>
    </li>
    <li>
      <a href="https://ktane.mrmelon54.com/iconic-string-generator">Iconic String Generator</a>
    </li>
    <li>
      <a href="https://ktane.mrmelon54.com/live-manual-editor">Live Manual Editor</a>
    </li>
  </ul>
</Layout>

<style lang="scss">
  .title-text {
    margin: 0 0 24px 0;
    font-size: 3.2em;
    line-height: 1.1;
  }
</style>
