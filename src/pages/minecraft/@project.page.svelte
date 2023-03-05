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
  export let pageProps;

  console.log("Props:", pageProps);

  let modData: ModData;
  let buttonData: ButtonData;
  let updateData: Promise<Project> = new Promise((res, rej) => {});

  onMount(() => {
    updateData = new Promise((res, rej) => {
      fetch(`${import.meta.env.VITE_TIMELINE_API}/project/minecraft/${pageProps.project}`)
        .then(resp => res(resp.json()))
        .catch(err => rej(err));
    });
  });

  modStore.subscribe(x => {
    if (x instanceof Error) {
      modData = null;
      buttonData = null;
    } else if (x) {
      modData = x.projectsSlugMap[pageProps.project];
      buttonData = modData ? x.modAlias[pageProps.project] : null;
    } else {
      modData = null;
      buttonData = null;
    }
  });
</script>

<MetaTags title={(modData ? `${modData.title} | ` : "") + "Minecraft | MrMelon54.com"} description="" />

<Layout>
  {#if modData}
    <div class="mod-meta">
      <img class="title-img" src={modData.icon_url} alt={modData.title} />
      <h1 class="title-text">{modData.title}</h1>
      {#if buttonData}
        <div class="link-buttons">
          <a class="brand-button button-modrinth" rel="noreferrer" target="_blank" href={buttonData.modrinth}>
            <ModrinthLogo />
          </a>
          <a class="brand-button button-curseforge" rel="noreferrer" target="_blank" href={buttonData.curseforge}>
            <CurseforgeLogo />
          </a>
          <a class="brand-button button-github" rel="noreferrer" target="_blank" href={buttonData.github}>
            <GithubLogo />
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
      <LazyComponent component={() => import("~/markdown/Markdown.svelte")} delayMs={500} source={modData.body}>Loading...</LazyComponent>
    </div>
  {:else}
    <div class="projects-loading" />
  {/if}
</Layout>
