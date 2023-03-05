<script lang="ts">
  export let href: string;
  export let secondary: boolean = false;
  export let target = "";
  export let rel = "";
</script>

<a class:secondary {href} {target} {rel}><slot /></a>

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
