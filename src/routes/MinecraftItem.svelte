<script lang="ts">
  import {useParams} from "svelte-navigator";
  import CenterScreen from "~/components/CenterScreen.svelte";
  import {getEnv} from "~/utils/env";
  import type {ModData} from "~/utils/api/modrinth";
  import type {Project} from "~/utils/api/timeline";
  import Markdown from "~/markdown/Markdown.svelte";

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
    <div class="mod-meta">
      <img class="title-img" src={y.icon_url} alt={y.title} />
      <h1 class="title-text">{y.title}</h1>
      <h2 class="id-text">{y.id}</h2>
      {#await updateData}
        <div class="progress">
          <div class="progress-bar progress-infinite" />
        </div>
      {:then w}
        <div class="progress">
          <div class="progress-title">{w.activity.title}</div>
          <div class="progress-bar">
            <div class="progress-bar-done" style="width: {w.activity.value}%;" />
            <span class="progress-bar-text">{w.activity.value + "%"}</span>
          </div>
          <div class="progress-details">
            <span class="progress-main">{w.activity.status}</span>
            <span class="progress-text">{w.activity.description}</span>
          </div>
        </div>
      {/await}
    </div>
    <div class="body-text">
      <Markdown source={y.body} />
    </div>
  {/await}
</CenterScreen>

<style lang="scss">
  .mod-meta {
    .title-img {
      width: 25%;
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
      padding: 32px;

      > .progress-bar {
        width: 100%;
        height: 32px;
        border-radius: 24px;
        background: var(--bg-panel);
        overflow: hidden;
        position: relative;

        > .progress-bar-done {
          transform: translateX(-100%);
          -webkit-animation: loadBar 1s forwards;
          animation: loadBar 1s forwards;
          height: 100%;
          background: -webkit-linear-gradient(top, #6db245 25%, #05873f 25%, #05873f 50%, #165f31 50%, #165f31 75%, #05873f 75%, #05873f 100%);
          background: linear-gradient(top, #6db245 25%, #05873f 25%, #05873f 50%, #165f31 50%, #165f31 75%, #05873f 75%, #05873f 100%);

          @keyframes loadBar {
            100% {
              transform: translateX(0);
            }
          }
        }

        > .progress-bar-text {
          position: absolute;
          top: 50%;
          right: 16px;
          transform: translateY(-50%);
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
  }
</style>
