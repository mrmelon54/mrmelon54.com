<script lang="ts">
  import CenterScreen from "~/components/CenterScreen.svelte";
  import Header from "~/components/Header.svelte";
  import "~/styles/app.scss";

  export let narrow: boolean = false;
</script>

<div id="app-router">
  <Header />
  <main>
    <CenterScreen {narrow}>
      <slot />
    </CenterScreen>
  </main>
</div>
