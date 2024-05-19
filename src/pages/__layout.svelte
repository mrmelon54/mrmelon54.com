<script lang="ts">
  import Footer from "~/components/Footer.svelte";
  import Header from "~/components/Header.svelte";
  import "~/styles/app.pcss";
</script>

<Header />
<main class="flex-grow">
  <slot />
</main>
<Footer/>
