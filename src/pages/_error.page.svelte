<script lang="ts">
  import {navigate} from "vite-plugin-ssr/client/router";
  import Layout from "./__layout.svelte";

  export let pageProps;
</script>

<Layout>
  <div id="missing-page">
    {#if pageProps.is404}
      <div class="title-logo">
        <div class="settings-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>
      </div>
      <h1 class="title-text">404 Not Found</h1>
      <p class="coming-soon">You have lost your way, please return to valid paths.</p>
      <p><button on:click={() => navigate("/")} class="refresh-btn">Back to homepage</button></p>
      <div class="card-wrapper">
        <div class="card">
          <h3>What can I do?</h3>
          <p class="sub-text">If you're a site visitor</p>
          <p class="small-text">Maybe you followed a broken link? Try returning to the homepage or press the back button.</p>
          <p class="small-text">If you need immediate assistance, please send us an email instead. We apologize for any inconvenience.</p>
        </div>
      </div>
    {:else}{/if}
  </div>
</Layout>

<style>
  #missing-page {
    font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif,
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  }

  .center-screen-wrapper {
    margin: 0;
    display: flex;
    place-items: center;
    min-width: 320px;
    /* min-height: calc(100vh); */
    box-sizing: border-box;
  }

  .center-screen {
    max-width: min(100%, 1280px);
    margin: 0 auto;
    padding: 2rem 0;
    text-align: center;
    box-sizing: border-box;
    width: 100%;
  }

  .title-logo {
    display: inline-flex;
    color: rgb(35, 148, 253);
  }

  .title-text {
    margin: 0 0 24px;
    font-size: 3.2em;
    line-height: 1.1;
  }

  .title-logo {
    padding: 0;
    position: relative;
    height: 100px;
    aspect-ratio: 1/1;
  }

  .title-logo .settings-icon {
    aspect-ratio: 1/1;
    width: 80px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .coming-soon {
    text-align: center;
    font-size: 1.25rem;
    font-weight: 300;
  }

  .refresh-btn {
    color: rgb(117, 230, 178);
    background-color: unset;
    border: 1px solid rgb(32, 175, 109);
    border-radius: 0.3rem;
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
  }

  .card-wrapper {
    padding: 0 1rem;
  }

  .card {
    border: 1px solid rgba(140, 130, 115, 0.13);
    border-radius: 0.3rem;
    padding: 2rem;
    margin: 2rem auto;
    width: 50%;
    word-wrap: break-word;
    box-sizing: border-box;
  }

  @media screen and (max-width: 900px) {
    .card {
      margin: 2rem 0;
      width: 100%;
      padding: 1rem;
    }
  }

  .card h3 {
    font-size: 1.75rem;
    text-align: left;
  }

  .card p.sub-text {
    font-size: 1.5rem;
    text-align: left;
  }

  .card p.small-text {
    font-size: 1.25rem;
    text-align: left;
  }
</style>
