<script lang="ts">
  import type {ModData, VersionData} from "~/api/modrinth";
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
  let versionData: Promise<VersionData[]> = new Promise((res, rej) => {});

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
      versionData = new Promise((res, rej) => {
        fetch(`https://api.modrinth.com/v2/versions?ids=${JSON.stringify(modData.versions)}`)
          .then(resp => res(resp.json()))
          .catch(err => rej(err));
      });
    } else {
      modData = null;
      buttonData = null;
    }
  });

  type Version = {type: "version"; value: number[]};

  type Range = {type: "range"; min: number[]; max: number[]};

  function parseVersion(a: string): Version {
    let v = a.split(".").map(x => parseInt(x));
    if (v.length == 2) v.push(0);
    return {type: "version", value: v};
  }

  function mergeVersions(a: Version | Range, b: Version): Range {
    if (a.type === "version") {
      let z = [...a.value];
      z[z.length - 1]++;
      if (arrayEquals(z, b.value)) return {type: "range", min: a.value, max: b.value};
    } else if (a.type === "range") {
      let z = [...a.max];
      z[z.length - 1]++;
      if (arrayEquals(z, b.value)) return {type: "range", min: a.min, max: b.value};
    }
    return null;
  }

  function squashVersions(a: Version[]): Array<Version | Range> {
    if (a.length == 0) return [];
    let out: Array<Version | Range> = [];
    let z: Version | Range = a[0];
    for (let i = 1; i < a.length; i++) {
      let m = mergeVersions(z, a[i]);
      if (m == null) {
        out.push(z);
        z = a[i];
      } else {
        z = m;
      }
    }
    out.push(z);
    return out;
  }

  function renderGameVersions(a: string[]) {
    let b = a.map(x => parseVersion(x));
    if (b.length == 0) return "";
    let squash = squashVersions(b);
    return squash.map(x => renderVersion(x)).join(", ");
  }

  function renderVersion(a: Version | Range): string {
    if (a.type === "version") {
      if (a.value[a.value.length - 1] === 0) a.value.splice(a.value.length - 1, 1);
      return a.value.map(x => x.toString()).join(".");
    } else if (a.type === "range") {
      return renderVersion({type: "version", value: a.min}) + " - " + renderVersion({type: "version", value: a.max});
    }
    return "unknown";
  }

  function arrayEquals(a, b) {
    return Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((val, index) => val === b[index]);
  }
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
      <div class="platform-text">
        <div>Modrinth ID: {buttonData.id}</div>
        <div>CurseForge ID: {buttonData.cfId}</div>
      </div>
      {#if buttonData}
        <div class="link-buttons">
          <a href={buttonData.github} class="brand-button-wrapper" rel="noreferrer" target="_blank">
            <div class="brand-button button-github">
              <GithubLogo />
              <span>Source Code</span>
            </div>
          </a>
          <a href={buttonData.modrinth} class="brand-button-wrapper" rel="noreferrer" target="_blank">
            <div class="brand-button button-modrinth">
              <ModrinthLogo />
              <span>Modrinth</span>
            </div>
          </a>
          <a href={buttonData.curseforge} class="brand-button-wrapper" rel="noreferrer" target="_blank">
            <div class="brand-button button-curseforge">
              <CurseforgeLogo />
              <span>CurseForge</span>
            </div>
          </a>
        </div>
      {:else}
        <div class="buttons-loading" />
      {/if}
      <div class="game-versions">
        {#await versionData then w}
          {#each w as v, i}
            <a class="version-pill" rel="noreferrer" target="_blank" href="https://modrinth.com/mod/{modData.slug}/version/{v.id}">
              <span>{renderGameVersions(v.game_versions)}</span>
            </a>
          {/each}
        {:catch}
          <div data-text="No version data" />
        {/await}
      </div>
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
      {:catch}
        <div data-text="No update data" />
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
  @import "../../styles/link-buttons-socials.scss";

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
      margin: 0 0 16px 0;
      font-size: 3.2em;
      line-height: 1.1;
    }

    .platform-text {
      margin: 0 0 16px 0;
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

  .game-versions {
    display: flex;
    justify-content: center;
    gap: 16px;
    margin-bottom: 32px;

    .version-pill {
      background: var(--primary-main);
      padding: 6px 12px;
      border-radius: 0.5rem;
      color: var(--primary-text);
    }
  }
</style>
