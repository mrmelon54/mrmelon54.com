<script lang="ts">
  import type {ModData} from "~/api/modrinth";
  import type {Project} from "~/api/timeline";
  import type {ButtonData} from "~/api/button";
  import LazyComponent from "~/lib/LazyComponent.svelte";
  import ModrinthLogo from "~/icons/ModrinthLogo.svelte";
  import CurseforgeLogo from "~/icons/CurseforgeLogo.svelte";
  import GithubLogo from "~/icons/GithubLogo.svelte";
  import {modStore} from "~/stores/minecraft-cache";
  import MetaTags from "~/components/MetaTags.svelte";
  import Layout from "../__layout.svelte";
  import {onMount} from "svelte";

  export const props = ["project"];
  export let __;

  let modData: ModData;
  let buttonData: ButtonData;
  let updateData: Promise<Project> = new Promise((res, rej) => {});

  onMount(() => {
    updateData = new Promise((res, rej) => {
      fetch(`${import.meta.env.VITE_TIMELINE_API}/project/minecraft/${__.routeParams.project}`)
        .then(resp => res(resp.json()))
        .catch(err => rej(err));
    });
  });

  modStore.subscribe(x => {
    if (x instanceof Error) {
      modData = null;
      buttonData = null;
    } else if (x) {
      modData = x.projectsSlugMap[__.routeParams.project];
      buttonData = modData ? x.modAlias[modData.id] : null;
    } else {
      modData = null;
      buttonData = null;
    }
  });
</script>

<MetaTags
  url={__.urlOriginal}
  title={(modData ? `${modData.title} | ` : "") + "Minecraft | MrMelon54.com"}
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
          <a class="brand-button button-github" rel="noreferrer" target="_blank" href={buttonData.github} data-text="Github">
            <GithubLogo />
          </a>
          <a class="brand-button button-modrinth" rel="noreferrer" target="_blank" href={buttonData.modrinth} data-text="Modrinth">
            <ModrinthLogo />
          </a>
          <a class="brand-button button-curseforge" rel="noreferrer" target="_blank" href={buttonData.curseforge} data-text="CurseForge">
            <CurseforgeLogo />
          </a>
        </div>
      {:else}
        <div class="buttons-loading" />
      {/if}
      {#await updateData}
        <div class="progress">
          <div class="progress-bar progress-infinite" />
        </div>
      {:then w}
        <div class="progress">
          <div class="progress-title"><h2>Progress: {w.activity.title} (<span class="progress-status">{w.activity.status}</span>)</h2></div>
          <div class="progress-details">
            <p class="progress-text">{w.activity.description}</p>
          </div>
          <div class="progress-bar">
            <div class="progress-bar-done" style="width: {w.activity.value}%;">
              <span class="progress-bar-text">{w.activity.value + "%"}</span>
            </div>
          </div>
        </div>
      {/await}
    </div>
    <div class="body-text">
      <LazyComponent component={() => import("~/components/Markdown.svelte")} delayMs={500} source={modData.body}>Loading...</LazyComponent>
    </div>
  {:else}
    <div class="projects-loading" />
  {/if}
</Layout>

<style lang="scss">
  @import "../../styles/link-buttons.scss";

  .mod-meta {
    .title-img {
      width: max(25%, 100px);
      aspect-ratio: 1/1;
      border-radius: 32px;
      margin-bottom: 32px;
      -webkit-box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5);
      -moz-box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5);
      box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5);
    }

    .title-text {
      margin: 0 0 24px 0;
      font-size: 3.2em;
      line-height: 1.1;
    }

    .progress {
      margin-bottom: 32px;

      > .progress-bar {
        width: 100%;
        height: 32px;
        border-radius: 24px;
        background-color: var(--bg-panel);
        overflow: hidden;
        position: relative;
        -webkit-box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5);
        -moz-box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5);
        box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5);

        > .progress-bar-done {
          transform: translateX(-100%);
          -webkit-animation: loadBar 1s forwards;
          animation: loadBar 1s forwards;
          height: 100%;
          background-color: var(--primary-main);

          @keyframes loadBar {
            100% {
              transform: translateX(0);
            }
          }

          > .progress-bar-text {
            position: absolute;
            top: 50%;
            right: 10px;
            transform: translateY(-50%);
            font-family: monospace;
          }
        }
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
