<script lang="ts">
  export let noCenter = true;
</script>

<div class="center-screen-wrapper" class:no-center={noCenter}>
  <div class="center-screen">
    <slot />
  </div>
</div>

<style lang="scss">
  .center-screen-wrapper {
    margin: 0;
    display: flex;
    place-items: center;
    min-width: 320px;
    min-height: calc(100vh - 50px);
    box-sizing: border-box;

    &.no-center {
      place-items: start;
    }

    > .center-screen {
      max-width: min(100%, 2560px);
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
      box-sizing: border-box;
      width: 100%;
    }
  }
</style>
