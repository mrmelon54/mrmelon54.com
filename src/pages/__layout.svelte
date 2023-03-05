<script lang="ts">
  import CenterScreen from "~/components/CenterScreen.svelte";
  import Header from "~/components/Header.svelte";
  import "~/styles/app.scss";

  export let isHome: boolean = false;
</script>

<div id="app-router">
  <Header {isHome} />
  <main>
    <CenterScreen>
      <slot />
    </CenterScreen>
  </main>
</div>

<style lang="scss">
  :root {
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;

    color-scheme: light dark;
    color: var(--primary-text);
    background-color: var(--bg);

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;

    --small-curve: 0.5rem;
    --large-curve: 0.9375rem;
  }

  :global(body) {
    margin: 0;
  }
</style>
