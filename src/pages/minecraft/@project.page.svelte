<script lang="ts">
  import type {ModData} from "~/api/modrinth";
  import {modStore} from "~/stores/minecraft-cache";
  import MetaTags from "~/components/MetaTags.svelte";
  import Layout from "~/pages/__layout.svelte";
  import type {McUploadItem, McUploadVersion} from "~/api/mc-upload";
  import Github from "~/icons/brands/Github.svelte";
  import Modrinth from "~/icons/brands/Modrinth.svelte";
  import Curseforge from "~/icons/brands/Curseforge.svelte";
  import Background from "~/components/Background.svelte";

  export const props = ["project"];
  export let __;

  let modData: ModData;
  let buttonData: McUploadItem | null;
  let versionData: Promise<McUploadVersion[]> = new Promise(() => {});

  modStore.subscribe(x => {
    if (x instanceof Error) {
      modData = null;
      buttonData = null;
    } else if (x) {
      modData = x.projectsSlugMap[__.routeParams.project];
      buttonData = x.modAlias[__.routeParams.project];
      versionData = new Promise((res, rej) => {
        fetch(`https://api.mrmelon54.com/v1/mc-upload/mod/${__.routeParams.project}/versions`)
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
    b = b.sort((a, b) => {
      if (a.value[0] != b.value[0]) return a.value[0] - b.value[0];
      if (a.value[1] != b.value[1]) return a.value[1] - b.value[1];
      if (a.value[2] != b.value[2]) return a.value[2] - b.value[2];
      return 0;
    });
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
  title={(modData ? `${modData.title} Versions | ` : "") + "Minecraft | MrMelon54"}
  description=""
  keywords="minecraft,minecraft mod,{__.routeParams.project}"
/>

<Background src="/bg.png" />

<Layout>
  {#if modData}
    <section class="max-w-7xl mx-auto p-12 flex flex-col lg:flex-row gap-8">
      <div class="flex flex-col sm:flex-row gap-8">
        <img class="w-48" src={modData.icon_url} alt={modData.title} />
        <div class="flex flex-col gap-4">
          <h1 class="text-4xl">{modData.title}</h1>
          <div class="platform-text">
            <div>Modrinth ID: {buttonData.modrinth.id}</div>
            <div>CurseForge ID: {buttonData.curseforge.id}</div>
          </div>
        </div>
      </div>
      <span class="flex-grow" />
      {#if buttonData}
        <div class="flex flex-col gap-4">
          <a href={buttonData.github} class="brand-button btn btn-green !px-16" rel="noreferrer" target="_blank">
            <Github size={32} fill="currentColor" />
            <span class="text-lg">Source Code</span>
          </a>
          {#if buttonData.modrinth}
            <a href={buttonData.modrinth.url} class="brand-button btn btn-green !px-16" rel="noreferrer" target="_blank">
              <Modrinth size={32} fill="currentColor" />
              <span class="text-lg">Modrinth</span>
            </a>
          {/if}
          {#if buttonData.curseforge}
            <a href={buttonData.curseforge.url} class="brand-button btn btn-green !px-16" rel="noreferrer" target="_blank">
              <Curseforge size={32} fill="currentColor" />
              <span class="text-lg">Curseforge</span>
            </a>
          {/if}
        </div>
      {:else}
        <div class="buttons-loading" />
      {/if}
    </section>
    <section class="max-w-7xl mx-auto p-0 py-12 md:p-12 flex flex-col gap-8">
      <div class="overflow-x-auto">
        {#await versionData then w}
          <table class="table-default">
            <thead>
              <tr class="table-header">
                <th>Mod Version</th>
                <th>Minecraft Version</th>
                <th />
                <th />
              </tr>
            </thead>
            <tbody>
              {#each w.filter(x => x.modrinth_id != "" || x.curseforge_id != "").reverse() as v}
                <tr>
                  <th>{v.meta.version}</th>
                  <td>{renderGameVersions(v.meta.game_versions)}</td>
                  <td>
                    {#if v.modrinth_id != ""}
                      <a class="version-pill mr-dl plain" rel="noreferrer" target="_blank" href="{buttonData.modrinth.url}/version/{v.modrinth_id}">
                        <span>Modrinth</span>
                      </a>
                    {/if}
                  </td>
                  <td>
                    {#if v.curseforge_id != ""}
                      <a class="version-pill cf-dl plain" rel="noreferrer" target="_blank" href="{buttonData.curseforge.url}/files/{v.curseforge_id}">
                        <span>Curseforge</span>
                      </a>
                    {/if}
                  </td>
                </tr>
              {/each}
            </tbody>
          </table>
        {:catch}
          <div data-text="No version data" />
        {/await}
      </div>
    </section>
  {:else}
    <div class="projects-loading" />
  {/if}
</Layout>

<style lang="postcss">
  .platform-text {
    margin-bottom: 32px;
  }

  .version-pill {
    padding: 6px 12px;
    border-radius: 0.5rem;
    color: var(--primary-text);

    &.mr-dl {
      background: #00af5c;
    }

    &.cf-dl {
      background: #f16436;
    }
  }

  .brand-button {
    @apply text-white flex flex-row items-center justify-center gap-4;
  }
</style>
