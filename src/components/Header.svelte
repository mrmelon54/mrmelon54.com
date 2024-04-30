<header>
  <div class="central-header">
    <a class="home-link" href="/">
      <img src="/melon.svg" alt="Melon Logo" />
      <h1>MrMelon54</h1>
    </a>

    <nav>
      <a class="nav-link" href="https://status.mrmelon54.com" rel="noreferrer" target="_blank">Status</a>
      <a class="nav-link" href="https://blog.mrmelon54.com" rel="noreferrer" target="_blank">Blog</a>
      <a class="nav-link" href="https://id.mrmelon54.com" rel="noreferrer" target="_blank">ID</a>
      <a class="nav-link" href="/minecraft">Minecraft</a>
      <a class="nav-link" href="/ktane">KTaNE</a>
    </nav>
  </div>
</header>

<style lang="scss">
  @import "../styles/platform.scss";

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
      align-items: stretch;
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
    padding: 0 0.6em;
    line-height: 50px;
    font-size: 1.2em;
    height: 50px;
    position: relative;

    &:after {
      content: "";
      border-radius: 1px;
      position: absolute;
      transform: scaleX(0);
      height: 2px;
      bottom: 10px;
      left: 10px;
      right: 10px;
      background-color: #eeeeee;
      transform-origin: bottom middle;
      transition: transform 0.25s ease-out, background-color 0.25s ease-out;
    }

    &:hover {
      color: #ffffff;
    }

    &:hover:after {
      transform: scaleX(1);
      transform-origin: bottom middle;
      background-color: #ffffff;
    }
  }

  a.home-link {
    color: #eeeeee;
    display: flex;
    align-items: center;

    &:hover {
      color: #ffffff;
      @include platform(filter, drop-shadow(0 0 6em #469b4c));
    }

    > h1 {
      font-size: 26px;
      margin: 0;
    }

    > img {
      width: 32px;
      height: 32px;
      margin-right: 16px;
      @include platform(filter, drop-shadow(1px 0 0 #ddd) drop-shadow(0 1px 0 #ddd) drop-shadow(-1px 0 0 #ddd) drop-shadow(0 -1px 0 #ddd));
    }
  }
</style>
