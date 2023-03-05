<script lang="ts">
  import {link} from "svelte-navigator";

  const locationHost = window.location.host;

  export let domain: string;
  export let secondary: boolean = false;
</script>

{#if domain == locationHost}
  <a class:secondary href="//{domain}" use:link><slot /></a>
{:else}
  <a class:secondary href="//{domain}"><slot /></a>
{/if}

<style lang="scss">
  a {
    font-weight: 500;
    color: var(--primary-link);
    text-decoration: inherit;

    &:hover {
      color: var(--primary-hover);
    }

    &.secondary {
      color: var(--secondary-link);

      &:hover {
        color: var(--secondary-hover);
      }
    }
  }
</style>
