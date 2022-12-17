<script lang="ts">
  import {Router, Route} from "svelte-navigator";
  import Header from "~/components/Header.svelte";
  import LazyComponent from "~/lib/LazyComponent.svelte";

  // @ts-ignore
  const cssVar = window.VITE_CSS_VAR ?? import.meta.env.VITE_CSS_VAR;
</script>

<svelte:head>
  <link rel="stylesheet" href="{cssVar}.light.css" media="screen" />
  <link rel="stylesheet" href="{cssVar}.dark.css" media="screen and (prefers-color-scheme: dark)" />
</svelte:head>

<div id="app-router">
  <Router primary={false}>
    <Header />
    <main>
      <Route path="/">
        <LazyComponent component={() => import("~/routes/Index.svelte")} delayMs={500}>Loading...</LazyComponent>
      </Route>
      <Route path="/about">
        <LazyComponent component={() => import("~/routes/About.svelte")} delayMs={500}>Loading...</LazyComponent>
      </Route>
      <Route path="/minecraft">
        <LazyComponent component={() => import("~/routes/Minecraft.svelte")} delayMs={500}>Loading...</LazyComponent>
      </Route>
      <Route path="/ktane">
        <LazyComponent component={() => import("~/routes/Ktane.svelte")} delayMs={500}>Loading...</LazyComponent>
      </Route>
    </main>
  </Router>
</div>

<style lang="scss">
  #app-router {
    max-width: min(100%, 1000px);
    margin: auto;
  }
</style>
