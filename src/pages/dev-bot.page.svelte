<script lang="ts">
  import MagicLink from "~/components/MagicLink.svelte";
  import MetaTags from "~/components/MetaTags.svelte";
  import Layout from "~/pages/__layout.svelte";

  export let __;
</script>

<MetaTags url={__.urlOriginal} title="Dev Bot | MrMelon54.com" description="MrMelon54.com Dev Bot" keywords="dev bot,melondevbot,melon dev bot,github,commit,auto commit" />

<Layout>
  <h1 class="title-text">Melon Dev Bot</h1>
  <ul>
    <li><a href="https://github.com/MelonDevBot" target="_blank" rel="noreferrer">Github</a></li>
  </ul>
</Layout>

<style lang="scss">
  .title-text {
    margin: 0 0 24px 0;
    font-size: 3.2em;
    line-height: 1.1;
  }
</style>
