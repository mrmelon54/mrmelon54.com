<script lang="ts">
  import melonLogo from "~/assets/melon.svg";
</script>

<div class="center-screen-wrapper">
  <div class="center-screen">
    <div class="title-logo">
      <a href="https://mrmelon54.com">
        <img src={melonLogo} class="logo" alt="Melon Logo" />
      </a>
    </div>
    <h1 class="title-text">MrMelon54.com</h1>

    <p class="coming-soon">Coming soon to an internet server near you.</p>
  </div>
</div>

<style lang="scss">
  .center-screen-wrapper {
    margin: 0;
    display: flex;
    place-items: center;
    min-width: 320px;
    min-height: calc(100vh - 50px);

    > .center-screen {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;

      > .title-logo .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;

        &:hover {
          filter: drop-shadow(0 0 2em #469b4caa);
        }
      }

      > .title-text {
        margin: 0 0 24px 0;
        font-size: 3.2em;
        line-height: 1.1;
      }
    }
  }
</style>
