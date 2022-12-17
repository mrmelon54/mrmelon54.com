<script lang="ts">
  import {link} from "svelte-navigator";

  const locationHost = window.location.host;

  export let domain: string;
</script>

{#if domain == locationHost}
  <a href="//{domain}" use:link><slot /></a>
{:else}
  <a href="//{domain}"><slot /></a>
{/if}
