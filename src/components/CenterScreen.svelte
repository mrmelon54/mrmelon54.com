<div class="center-screen-wrapper">
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

    > .center-screen {
      max-width: min(100%, 1280px);
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
      box-sizing: border-box;
      width: 100%;
    }
  }
</style>
