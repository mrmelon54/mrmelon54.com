<script lang="ts">
  import CodeBacking from "~/components/CodeBacking.svelte";
  import MetaTags from "~/components/MetaTags.svelte";
  import "~/styles/app.scss";

  export let __;
  export let pageProps;
</script>

<MetaTags url={__.urlOriginal} title="MrMelon54" description="MrMelon54.com Home Page" keywords="" />

<svelte:head>
  <link href="https://techhub.social/@melon" rel="me" />
</svelte:head>

<div>
  <div class="code-backing">
    <CodeBacking />
  </div>

  <div class="index-align">
    <div class="central-box">
      <div class="title-logo">
        <a href="https://mrmelon54.com">
          <img src="/melon.svg" class="logo" alt="Melon Logo" />
        </a>
      </div>
      <h1 class="title-text">MrMelon54</h1>
      <div class="buttons">
        <a href="/blog">Blog</a>
        <a href="/minecraft">Minecraft</a>
        <a href="/ktane">KTaNE</a>
      </div>
    </div>
  </div>

  <div class="corner-buttons">
    <a href="https://status.mrmelon54.com">Status</a>
    <a href="https://1f349.com">1f349.com</a>
  </div>
</div>

<style lang="scss">
  $logoSize: 10em;
  $logoPadding: 1.5em;
  $logoArea: calc($logoSize + $logoPadding * 2);

  .code-backing {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }

  .index-align {
    margin: 0;
    box-sizing: border-box;
    min-height: 100vh;

    display: grid;
    grid-template-columns: 1fr auto 1.618fr;
    grid-template-rows: 1fr auto 1.618fr;
  }

  .central-box {
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(17, 25, 40, 0.75);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);

    grid-column: 2;
    grid-row: 2;
    display: grid;
    grid-template-areas:
      "logo title"
      "logo buttons";
    grid-template-columns: $logoArea auto;
    grid-template-rows: 1fr 1fr;
    row-gap: 1em;
    width: fit-content;
    padding: 2em;
  }

  .title-logo {
    grid-area: logo;

    .logo {
      height: $logoSize;
      padding: $logoPadding;
      will-change: filter;

      &:hover {
        filter: drop-shadow(0 0 2em #469b4caa);
      }
    }
  }

  .title-text {
    grid-area: title;
    margin: auto 0.5em 0 0.5em;
    font-size: 3.2em;
    line-height: 1.1;
  }

  .buttons {
    grid-area: buttons;
    display: flex;

    > a {
      font-size: 2em;
      font-weight: 500;
      font-family: inherit;
      cursor: pointer;
      box-sizing: border-box;
      margin: 0.5em;
      border: 0;
    }
  }

  .corner-buttons {
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(17, 25, 40, 0.75);
    border-radius: 12px 0 0 0;
    border: 1px solid rgba(255, 255, 255, 0.125);
    border-width: 1px 0 0 1px;

    position: fixed;
    right: 0;
    bottom: 0;
    display: flex;

    > a {
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      cursor: pointer;
      box-sizing: border-box;
      margin: 0.5em;
      border: 0;
    }
  }
</style>
