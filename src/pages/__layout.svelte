<script lang="ts">
  import CenterScreen from "~/components/CenterScreen.svelte";
  import Header from "~/components/Header.svelte";
  import "~/styles/app.scss";
</script>

<div id="app-router">
  <Header />
  <main>
    <CenterScreen>
      <slot />
    </CenterScreen>
  </main>
</div>
