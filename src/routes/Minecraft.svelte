<script lang="ts">
  import {link} from "svelte-navigator";
  import CenterScreen from "~/components/CenterScreen.svelte";
  import type {ModData} from "~/api/modrinth";
  import {modStore} from "~/stores/minecraft-cache";
</script>

<svelte:head>
  <title>Minecraft | MrMelon54.com</title>
</svelte:head>

<CenterScreen>
  <h1 class="title-text">MrMelon54 Minecraft Projects</h1>
  {#if $modStore instanceof Error}
    <div class="projects-loading">{$modStore.message}</div>
  {:else if $modStore}
    <div class="projects">
      {#each $modStore.projects as y}
        <a href="/minecraft/{y.slug}" use:link class="project-item">
          <img src={y.icon_url} alt={y.title} />
          <span class="project-item-title">{y.title}</span>
          <span class="flex-gap" />
          <span class="project-item-id">{y.slug}</span>
          <span class="project-item-id">{y.id}</span>
        </a>
      {/each}
    </div>
  {:else}
    <div class="projects-loading" />
  {/if}
</CenterScreen>

<style lang="scss">
  .title-text {
    margin: 0 0 24px 0;
    font-size: 3.2em;
    line-height: 1.1;
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;

    @media (max-width: 800px) {
      & {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    @media (max-width: 600px) {
      & {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    > .project-item {
      display: flex;
      flex-direction: column;
      background: var(--bg-panel);
      border-radius: 16px;
      -webkit-box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5);
      -moz-box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5);
      box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5);

      > .project-item-id {
        font-size: 90%;
        padding: 0 8px 8px 8px;
        color: gray;
      }

      > .project-item-title {
        padding: 16px 16px 8px 16px;
        color: var(--primary-text);
      }

      > .flex-gap {
        flex-grow: 1;
      }

      > img {
        aspect-ratio: 1/1;
        width: 100%;
        margin: auto;
        border-radius: 16px;
      }
    }
  }
</style>
