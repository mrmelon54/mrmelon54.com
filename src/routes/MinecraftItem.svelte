<script lang="ts">
  import {useParams} from "svelte-navigator";
  import CenterScreen from "~/components/CenterScreen.svelte";
  import {getEnv} from "~/utils/env";
  import type {ModData} from "~/utils/api/modrinth";
  import type {Project} from "~/utils/api/timeline";

  const params = useParams();
  const modData: Promise<ModData> = new Promise((res, rej) => {
    fetch(`https://api.modrinth.com/v2/project/${$params.id}`)
      .then(resp => res(resp.json()))
      .catch(err => rej(err));
  });
  const updateData: Promise<Project> = new Promise((res, rej) => {
    fetch(`${getEnv("TIMELINE_API")}/p/minecraft/${$params.id}`)
      .then(resp => res(resp.json()))
      .catch(err => rej(err));
  });
</script>

<CenterScreen>
  {#await modData}
    <div class="projects-loading" />
  {:then y}
    <img class="title-img" src={y.icon_url} alt={y.title} />
    <h1 class="title-text">{y.title}</h1>
    <h2 class="id-text">{y.id}</h2>
    {#await updateData}
      <div class="progress">
        <div class="progress-bar progress-infinite" />
      </div>
    {:then w}
      <div class="progress">
        <div class="progress-bar">
          <div class="progress-bar-done" style="--progress-value: {w.activity.value}%;" />
        </div>
        <div class="progress-details">
          <span class="progress-main">{w.activity.status}</span>
          <span class="progress-text">{w.activity.description}</span>
        </div>
      </div>
    {/await}
  {/await}
</CenterScreen>

<style lang="scss">
  .title-img {
    width: 50%;
    aspect-ratio: 1/1;
    border-radius: 32px;
    margin-bottom: 64px;
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
    height: 48px;

    > .progress-bar {
      width: 100%;
      height: 100%;
      border-radius: 24px;
      background: var(--bg-panel);
      overflow: hidden;

      > .progress-bar-done {
        width: var(--progress-value);
        height: 100%;
        background: -webkit-linear-gradient(top, #6db245 25%, #05873f 25%, #05873f 50%, #165f31 50%, #165f31 75%, #05873f 75%, #05873f 100%);
        background: linear-gradient(top, #6db245 25%, #05873f 25%, #05873f 50%, #165f31 50%, #165f31 75%, #05873f 75%, #05873f 100%);
      }
    }
  }
</style>
