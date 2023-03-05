<script lang="ts">
  export let secondary: boolean = false;
</script>

<button class:secondary on:click><slot /></button>

<style lang="scss">
  button {
    border-radius: var(--small-curve);
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: var(--primary-main);
    cursor: pointer;
    transition: background-color 0.25s;

    &:hover {
      background-color: var(--primary-hover);
    }

    &:focus,
    &:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }

    &.secondary {
      background-color: var(--secondary-main);

      &:hover {
        background-color: var(--secondary-hover);
      }
    }
  }
</style>
