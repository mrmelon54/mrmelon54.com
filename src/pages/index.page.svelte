<script lang="ts">
  import GlassBacking from "~/components/GlassBacking.svelte";
  import MetaTags from "~/components/MetaTags.svelte";
  import Layout from "~/pages/__layout.svelte";

  export let __;
  export let pageProps;
</script>

<MetaTags url={__.urlOriginal} title="MrMelon54" description="MrMelon54.com Home Page" keywords="" />

<svelte:head>
  <link href="https://techhub.social/@melon" rel="me" />
</svelte:head>

<Layout isHome={true}>
  <GlassBacking />

  <svg width="0" height="0">
    <defs>
      <clipPath id="myClip">
        <circle cx="5" cy="5" r="5" />
        <circle cx="calc(100% - 5)" cy="60" r="40" />
      </clipPath>
    </defs>
  </svg>

  <div class="central-box">
    <div class="central-title">
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
</Layout>

<style lang="scss">
  $logoSize: 10em;
  $logoPadding: 1.5em;
  $logoArea: calc($logoSize + $logoPadding * 2);
  $titleBackdrop: 200px;

  .central-box {
    border: 10px solid;
    border-image-slice: 1;
    border-width: 5px;
    border-image-source: linear-gradient(black, black), radial-gradient(circle at bottom, #141414 0%, #5f5f5f 100%);
    margin-inline: auto;
    width: fit-content;
    border-radius: 4em;
    box-sizing: border-box;
    overflow: hidden;
  }

  .central-title {
    display: grid;
    grid-template-areas:
      "logo title"
      "logo buttons";
    grid-template-columns: $logoArea auto;
    grid-template-rows: 1fr 1fr;
    row-gap: 1em;
    width: fit-content;
    margin-inline: auto;
    padding: 2em;
    backdrop-filter: blur($titleBackdrop);
    -webkit-backdrop-filter: blur($titleBackdrop);
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
    margin: auto 0 0 0;
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
    position: fixed;
    right: 0;
    bottom: 0;
    display: flex;
    backdrop-filter: blur(1000px);

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
