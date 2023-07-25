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
