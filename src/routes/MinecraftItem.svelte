<script lang="ts">
  import {useParams} from "svelte-navigator";
  import CenterScreen from "~/components/CenterScreen.svelte";
  import type {ModData} from "~/api/modrinth";
  import type {Project} from "~/api/timeline";
  import type {ButtonData} from "~/api/button";
  import LazyComponent from "~/lib/LazyComponent.svelte";
  import ModrinthLogo from "~/icons/ModrinthLogo.svelte";
  import CurseforgeLogo from "~/icons/CurseforgeLogo.svelte";
  import GithubLogo from "~/icons/GithubLogo.svelte";

  const params = useParams();
  const modData: Promise<ModData> = new Promise((res, rej) => {
    fetch(`https://api.modrinth.com/v2/project/${$params.id}`)
      .then(resp => res(resp.json()))
      .catch(err => rej(err));
  });
  const updateData: Promise<Project> = new Promise((res, rej) => {
    fetch(`${import.meta.env.VITE_TIMELINE_API}/project/minecraft/${$params.id}`)
      .then(resp => res(resp.json()))
      .catch(err => rej(err));
  });
  const buttonData: Promise<ButtonData> = new Promise((res, rej) => {
    fetch(`https://cdn.mrmelon54.com/assets/minecraft-translate/${$params.id}.json`)
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
      {#await buttonData}
        <div class="buttons-loading" />
      {:then w}
        <div class="link-buttons">
          <a class="brand-button button-modrinth" rel="noreferrer" target="_blank" href={w.modrinth}>
            <ModrinthLogo />
          </a>
          <a class="brand-button button-curseforge" rel="noreferrer" target="_blank" href={w.curseforge}>
            <CurseforgeLogo />
          </a>
          <a class="brand-button button-github" rel="noreferrer" target="_blank" href={w.github}>
            <GithubLogo/>
          </a>
        </div>
      {/await}
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
      <LazyComponent component={() => import("~/markdown/Markdown.svelte")} delayMs={500} source={y.body}>Loading...</LazyComponent>
    </div>
  {/await}
</CenterScreen>

<style lang="scss">
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

    .link-buttons {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 16px;
      margin-bottom: 32px;

      > .brand-button {
        border-radius: 0.75rem;
        padding: 6px;
        min-width: 32px;
        height: 32px;
        -webkit-box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5);
        -moz-box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5);
        box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5);
        cursor: pointer;
        color: #dddddd;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 6px;
        font-size: 115%;
        font-family: sans-serif;

        @media (max-width: 600px) {
          & {
            width: 48px;
            height: 48px;
          }
        }

        :global(svg) {
          display: inline-block;
          vertical-align: middle;
          aspect-ratio: 1/1;
          height: 100%;
        }

        &::after {
          display: inline-block;
          height: 32px;
          line-height: 32px;
          margin-right: 2px;

          @media (max-width: 600px) {
            & {
              display: none;
            }
          }
        }
      }

      > .button-modrinth {
        color: #1bd96a;
        background: #353535;

        &::after {
          color: #dddddd;
          content: "Modrinth";
        }
      }

      > .button-curseforge {
        background: #d34037;

        &::after {
          content: "CurseForge";
        }
      }

      > .button-github {
        background: #6e40c9;

        &::after {
          content: "Github";
        }
      }
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
