<script lang="ts">
  import type {ModData} from "~/api/modrinth";
  import LazyComponent from "~/lib/LazyComponent.svelte";
  import ModrinthLogo from "~/icons/ModrinthLogo.svelte";
  import CurseforgeLogo from "~/icons/CurseforgeLogo.svelte";
  import GithubLogo from "~/icons/GithubLogo.svelte";
  import {modStore} from "~/stores/minecraft-cache";
  import MetaTags from "~/components/MetaTags.svelte";
  import Layout from "~/pages/__layout.svelte";
  import type {McUploadItem} from "~/api/mc-upload";

  export const props = ["project"];
  export let __;

  let modData: ModData;
  let buttonData: McUploadItem | null;

  modStore.subscribe(x => {
    if (x instanceof Error) {
      modData = null;
      buttonData = null;
    } else if (x) {
      modData = x.projectsSlugMap[__.routeParams.project];
      buttonData = x.modAlias[__.routeParams.project];
    } else {
      modData = null;
      buttonData = null;
    }
  });
</script>

<MetaTags
  url={__.urlOriginal}
  title={(modData ? `${modData.title} | ` : "") + "Minecraft | MrMelon54"}
  description=""
  keywords="minecraft,minecraft mod,{__.routeParams.project}"
/>

<Layout>
  {#if modData}
    <div class="mod-meta">
      <img class="title-img" src={modData.icon_url} alt={modData.title} />
      <h1 class="title-text">{modData.title}</h1>
      {#if buttonData}
        <div class="link-buttons">
          <a href={buttonData.github} class="brand-button-wrapper" rel="noreferrer" target="_blank">
            <div class="brand-button button-github">
              <GithubLogo />
              <span>Source Code</span>
            </div>
          </a>
          {#if buttonData.modrinth}
            <a href={buttonData.modrinth.url} class="brand-button-wrapper" rel="noreferrer" target="_blank">
              <div class="brand-button button-modrinth">
                <ModrinthLogo />
                <span>Modrinth</span>
              </div>
            </a>
          {/if}
          {#if buttonData.curseforge}
            <a href={buttonData.curseforge.url} class="brand-button-wrapper" rel="noreferrer" target="_blank">
              <div class="brand-button button-curseforge">
                <CurseforgeLogo />
                <span>CurseForge</span>
              </div>
            </a>
          {/if}
        </div>
      {:else}
        <div class="buttons-loading" />
      {/if}
    </div>
    <div class="body-tabs">
      <a href="/minecraft/{__.routeParams.project}">Description</a>
      <a href="/minecraft/{__.routeParams.project}/versions">Versions</a>
      <a href="/minecraft/{__.routeParams.project}/about" class="selected">About</a>
    </div>
    <div class="mod-meta">
      {#if buttonData}
        <div class="platform-text">
          <div>Modrinth ID: {buttonData.modrinth.id}</div>
          <div>CurseForge ID: {buttonData.curseforge.id}</div>
        </div>
      {/if}
    </div>
  {:else}
    <div class="projects-loading" />
  {/if}
</Layout>

<style lang="scss">
  @import "../../../styles/link-buttons.scss";

  .mod-meta {
    .title-img {
      width: max(25%, 100px);
      aspect-ratio: 1/1;
      border-radius: calc(100% / 16);
      margin-bottom: 32px;
      -webkit-box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5);
      -moz-box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5);
      box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5);
    }

    .title-text {
      margin: 0 0 16px 0;
      font-size: 3.2em;
      line-height: 1.1;
    }

    .platform-text {
      margin: 0 0 16px 0;
    }
  }

  .body-tabs {
    display: flex;
    margin-bottom: 32px;

    > a {
      padding: 16px;

      &.selected {
        border-bottom: 3px solid var(--primary-main);
      }
    }
  }

  .body-text {
    text-align: left;
    background: var(--bg-panel);
    border-radius: 16px;
    -webkit-box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5);
    padding: 16px;

    :global(.markdown-body) :global(h1:first-child) {
      display: none;
    }
  }
</style>
