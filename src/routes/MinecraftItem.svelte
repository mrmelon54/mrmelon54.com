<script lang="ts">
  import {useParams} from "svelte-navigator";
  import CenterScreen from "~/components/CenterScreen.svelte";
  import {getEnv} from "~/utils/env";
  import type {ModData} from "~/utils/api/modrinth";
  import type {Project} from "~/utils/api/timeline";
  import Markdown from "~/markdown/Markdown.svelte";
  import type {ButtonData} from "~/utils/api/button";

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
          <a class="brand-button button-modrinth" target="_blank" href={w.modrinth}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 141.73 141.73">
              <path
                d="M159.07,89.29A70.94,70.94,0,1,0,20,63.52H32A58.78,58.78,0,0,1,145.23,49.93l-11.66,3.12a46.54,46.54,0,0,0-29-26.52l-2.15,12.13a34.31,34.31,0,0,1,2.77,63.26l3.19,11.9a46.52,46.52,0,0,0,28.33-49l11.62-3.1A57.94,57.94,0,0,1,147.27,85Z"
                transform="translate(-19.79)"
                fill="currentColor"
                fill-rule="evenodd"
              />
              <path
                d="M108.92,139.3A70.93,70.93,0,0,1,19.79,76h12a59.48,59.48,0,0,0,1.78,9.91,58.73,58.73,0,0,0,3.63,9.91l10.68-6.41a46.58,46.58,0,0,1,44.72-65L90.43,36.54A34.38,34.38,0,0,0,57.36,79.75C57.67,80.88,58,82,58.43,83l13.66-8.19L68,63.93l12.9-13.25,16.31-3.51L101.9,53l-7.52,7.61-6.55,2.06-4.69,4.82,2.3,6.38s4.64,4.94,4.65,4.94l6.57-1.74,4.67-5.13,10.2-3.24,3,6.84L104.05,88.43,86.41,94l-7.92-8.81L64.7,93.48a34.44,34.44,0,0,0,28.72,11.59L96.61,117A46.6,46.6,0,0,1,54.13,99.83l-10.64,6.38a58.81,58.81,0,0,0,99.6-9.77l11.8,4.29A70.77,70.77,0,0,1,108.92,139.3Z"
                transform="translate(-19.79)"
                fill="currentColor"
              />
            </svg>
          </a>
          <a class="brand-button button-curseforge" target="_blank" href={w.curseforge}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 30">
              <path
                d="M15.2419 0L16.186 3.91304C11.4651 3.91304 0 3.91304 0 3.91304C0 3.91304 0.269767 5.08696 0.404651 5.21739C0.809302 5.86957 1.21395 6.65217 1.75349 7.17391C4.31628 10.0435 8.76744 11.2174 12.4093 11.8696C14.9721 12.3913 17.5349 12.5217 20.0977 12.6522L23.0651 20.3478H24.6837L25.6279 22.8261H24.2791L21.986 30H44.5116L42.2186 22.8261H40.8698L41.814 20.3478H43.4326C43.4326 20.3478 44.7814 12.3913 48.9628 8.73913C53.0093 5.08696 58 4.56522 58 4.56522V0H15.2419ZM37.9023 19.6957C36.8233 20.3478 35.6093 20.3478 34.8 20.8696C34.2605 21.1304 33.9907 21.913 33.9907 21.913C33.4512 20.7391 32.7767 20.3478 31.9674 20.087C31.1581 19.8261 29.6744 19.9565 27.6512 18.2609C26.3023 17.087 26.1674 15.5217 26.3023 14.7391V14.6087C26.3023 14.4783 26.3023 14.4783 26.3023 14.3478C26.3023 14.2174 26.3023 14.087 26.4372 13.9565C26.707 13.1739 27.3814 12.3913 28.7302 11.8696C28.7302 11.8696 27.786 13.1739 28.7302 14.4783C29.2698 15.2609 30.3488 15.6522 31.293 15.1304C31.6977 14.8696 31.9674 14.3478 32.1023 13.9565C32.3721 13.0435 32.3721 12.1304 31.5628 11.4783C30.3488 10.4348 30.0791 9 30.8884 8.08696C30.8884 8.08696 31.1581 9.26087 32.3721 9.13043C33.1814 9.13043 33.1814 8.86957 32.9116 8.6087C32.7767 8.21739 31.0233 5.73913 33.586 3.91304C33.586 3.91304 35.2047 2.86957 37.093 3C36.014 3.13043 34.8 3.78261 34.3954 4.82609C34.3954 4.82609 34.3954 4.82609 34.3954 4.95652C33.9907 6 34.2605 7.17391 35.0698 8.21739C35.6093 9 36.2837 9.65217 36.5535 10.6957C36.1488 10.5652 35.8791 10.6957 35.6093 10.9565C35.3395 11.2174 35.2047 11.7391 35.3395 12.1304C35.4744 12.3913 35.7442 12.6522 36.014 12.6522C36.1488 12.6522 36.1488 12.6522 36.2837 12.6522H36.4186C36.8233 12.5217 37.093 12 36.9581 11.6087C37.2279 11.8696 37.3628 12.5217 37.2279 12.913C37.2279 13.3043 36.9581 13.6957 36.8233 13.9565C36.6884 14.2174 36.4186 14.4783 36.2837 14.7391C36.1488 15 36.014 15.2609 36.014 15.5217C36.014 15.7826 36.014 16.1739 36.1488 16.4348C36.6884 17.2174 37.7674 16.4348 38.0372 15.7826C38.4419 15 38.307 14.087 37.7674 13.3043C37.7674 13.3043 38.7116 13.8261 39.386 15.6522C39.9256 17.2174 38.9814 19.0435 37.9023 19.6957Z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a class="brand-button button-github" target="_blank" href={w.github}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" version="1.1">
              <path
                fill-rule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                fill="currentColor"
              />
            </svg>
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
      <Markdown source={y.body} />
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

        > svg {
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
