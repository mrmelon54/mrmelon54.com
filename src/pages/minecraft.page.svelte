<script lang="ts">
  import MetaTags from "~/components/MetaTags.svelte";
  import Layout from "~/pages/__layout.svelte";
  import {modStore} from "~/stores/minecraft-cache";

  export let __;
</script>

<MetaTags
  url={__.urlOriginal}
  title="MrMelon54 Minecraft Projects"
  description="Projects made by MrMelon54 for Minecraft"
  keywords="minecraft,minecraft mod,mrmelon54,modrinth,curseforge,github"
/>

<Layout>
  <h1 class="title-text">Minecraft Projects</h1>
  {#if $modStore instanceof Error}
    <div class="projects-loading">{$modStore.message}</div>
  {:else if $modStore}
    <div class="projects">
      {#each $modStore.projects as y}
        <a href="/minecraft/{y.slug}" class="project-item">
          <div class="project-item-icon">
            <img src={y.icon_url} alt={y.title} />
          </div>
          <div class="project-item-details">
            <span class="project-item-title">{y.title}</span>
            <span class="project-item-id">{y.slug}</span>
            <span class="project-item-id">{y.id} - {y.game_versions[y.game_versions.length - 1]}</span>
          </div>
        </a>
      {/each}
    </div>
  {:else}
    <div class="projects-loading" />
  {/if}
</Layout>

<style lang="scss">
  .title-text {
    margin: 0 0 24px 0;
    font-size: 3.2em;
    line-height: 1.1;
  }

  .projects {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
    position: relative;

    .project-item {
      width: calc((800px - 4rem - 16px) * 0.5);
      align-self: stretch;

      @media (max-width: 800px) {
        & {
          width: 100%;
        }
      }

      display: flex;
      flex-direction: row;
      background: var(--bg-panel);
      border-radius: 14px;
      -webkit-box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5);
      -moz-box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5);
      box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5);

      .project-item-icon {
        width: 96px;
        height: 96px;
        margin: 8px;

        img {
          aspect-ratio: 1/1;
          width: 100%;
          border-radius: calc(100% / 16);
        }
      }

      .project-item-details {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        text-align: left;

        > .project-item-id {
          font-size: 90%;
          padding: 0 8px 4px 8px;
          color: gray;
        }

        > .project-item-title {
          padding: 16px 16px 4px 8px;
          color: var(--primary-text);
        }

        > .flex-gap {
          flex-grow: 1;
        }
      }
    }
  }
</style>
