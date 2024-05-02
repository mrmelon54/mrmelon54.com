<script lang="ts">
  export let narrow: boolean = false;
</script>

<div class="center-screen-wrapper">
  <div class="center-screen" class:narrow>
    <slot />
  </div>
</div>

<style lang="scss">
  .center-screen-wrapper {
    margin: 0;
    display: flex;
    place-items: start;
    min-width: 320px;
    min-height: calc(100vh - 50px);
    box-sizing: border-box;

    > .center-screen {
      max-width: min(100%, 2560px);
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
      box-sizing: border-box;
      width: 100%;

      &.narrow {
        max-width: min(100%, 1000px);
      }
    }
  }
</style>
