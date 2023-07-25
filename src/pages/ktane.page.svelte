<script lang="ts">
  import MetaTags from "~/components/MetaTags.svelte";
  import Layout from "~/pages/__layout.svelte";

  export let __;
</script>

<MetaTags
  url={__.urlOriginal}
  title="KTaNE | MrMelon54"
  description="MrMelon54 KTaNE Projects"
  keywords="ktane,keep talking and nobody explodes"
/>

<Layout>
  <h1 class="title-text">MrMelon54 KTaNE Projects</h1>
  <ul>
    <li>
      <a href="https://ktane-mirror.mrmelon54.com" target="_blank" rel="noreferrer">KTaNE Mirror</a> - a cached version of the KTaNE Repository of Manual
      Pages for faster loading times.
    </li>
    <li>
      <a href="https://ktane-ideas.mrmelon54.com" target="_blank" rel="noreferrer">KTaNE Mod Ideas</a> - displays mod ideas from the mod idea spreadsheet.
    </li>
    <li>
      <a href="https://ktane-iconic-editor.mrmelon54.com" target="_blank" rel="noreferrer">KTaNE Iconic Editor</a> - new fancy editor for Iconic mod development.
    </li>
    <li>
      <a href="https://ktane.mrmelon54.com/iconic-string-generator" target="_blank" rel="noreferrer">Iconic String Generator (Deprecated)</a>
    </li>
    <li>
      <a href="https://ktane.mrmelon54.com/live-manual-editor" target="_blank" rel="noreferrer">Live Manual Editor</a>
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
