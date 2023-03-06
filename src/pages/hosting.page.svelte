<script lang="ts">
  import MetaTags from "~/components/MetaTags.svelte";
  import Layout from "~/pages/__layout.svelte";

  export let __;
</script>

<MetaTags url={__.urlOriginal} title="Hosting | MrMelon54.com" description="MrMelon54.com Hosting" keywords="hosting" />

<Layout>
  <h1 class="title-text">MrMelon54 Hosting</h1>
  <ul>
    <li><a href="https://discord-plays.xyz" target="_blank" rel="noreferrer">Discord Plays</a></li>
    <li><a href="https://redstonecompendium.com" target="_blank" rel="noreferrer">Redstone Compendium</a></li>
  </ul>
</Layout>

<style lang="scss">
  .title-text {
    margin: 0 0 24px 0;
    font-size: 3.2em;
    line-height: 1.1;
  }
</style>
