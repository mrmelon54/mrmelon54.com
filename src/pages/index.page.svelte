<script lang="ts">
  import MetaTags from "~/components/MetaTags.svelte";
  import Layout from "~/pages/__layout.svelte";

  export let __;
</script>

<MetaTags url={__.urlOriginal} title="MrMelon54.com" description="MrMelon54.com Home Page" keywords="" />

<Layout isHome={true}>
  <div class="title-logo">
    <a href="https://mrmelon54.com">
      <img src="/melon.svg" class="logo" alt="Melon Logo" />
    </a>
  </div>
  <h1 class="title-text">MrMelon54.com</h1>

  <p class="coming-soon">Coming soon to an internet server near you.</p>
</Layout>

<style lang="scss">
  .title-logo .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;

    &:hover {
      filter: drop-shadow(0 0 2em #469b4caa);
    }
  }

  .title-text {
    margin: 0 0 24px 0;
    font-size: 3.2em;
    line-height: 1.1;
  }
</style>
