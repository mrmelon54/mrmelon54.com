<script lang="ts">
  export let isHome: boolean = false;
</script>

<header>
  <div class="central-header">
    {#if isHome}
      <span />
    {:else}
      <a class="home-link" href="/">
        <img src="/melon.svg" alt="Melon Logo" />
        <h1>MrMelon54</h1>
      </a>
    {/if}

    <nav>
      <a class="nav-link" href={import.meta.env.VITE_URL_ID} rel="noreferrer" target="_blank">ID</a>
      <a class="nav-link" href="/minecraft">Minecraft</a>
      <a class="nav-link" href="/ktane">KTaNE</a>
    </nav>
  </div>
</header>

<style lang="scss">
  @import "../styles/app.scss";

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    min-height: 50px;
    max-height: 50px;
    background-color: var(--primary-main);
    border-radius: 0 0 var(--large-curve) var(--large-curve);

    > .central-header {
      padding: 0 32px;
      height: 50px;
      min-height: 50px;
      max-height: 50px;
      align-items: center;
      justify-content: space-between;
      display: flex;
      width: min(100%, 1000px);
      max-width: min(100%, 1000px);
      margin: auto;

      nav {
        display: flex;
      }
    }
  }

  a.nav-link {
    display: block;
    color: #eeeeee;
    padding: 0 0.9em;
    line-height: 50px;
    height: 50px;
    position:relative;
    transition: background-color 0.25s ease-out;

    &:after {
      content: '';
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: #eeeeee;
      transform-origin: bottom right;
      transition: transform 0.25s ease-out, background-color 0.25s ease-out;
    }

    &:hover {
      color: #ffffff;
    }

    &:hover:after {
      transform: scaleX(1);
      transform-origin: bottom left;
      background-color: #ffffff;
    }

    &.home-link {
      display: flex;
      align-items: center;

      > h1 {
        font-size: 26px;
        margin: 0;
      }

      > img {
        width: 32px;
        height: 32px;
        margin-right: 16px;
        -webkit-filter: drop-shadow(1px 0 0 #ddd) drop-shadow(0 1px 0 #ddd) drop-shadow(-1px 0 0 #ddd) drop-shadow(0 -1px 0 #ddd);
        filter: drop-shadow(1px 0 0 #ddd) drop-shadow(0 1px 0 #ddd) drop-shadow(-1px 0 0 #ddd) drop-shadow(0 -1px 0 #ddd);
      }
    }
  }
</style>
