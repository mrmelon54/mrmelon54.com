<script lang="ts">
  import {link} from "svelte-navigator";
  import CenterScreen from "~/components/CenterScreen.svelte";

  type ModData = {
    id: string;
    slug: string;
    project_type: string;
    team: string;
    title: string;
    description: string;
    body: string;
    published: Date;
    updated: Date;
    approved: Date;
    status: string;
    client_side: "required" | "optional" | "unsupported";
    server_side: "required" | "optional" | "unsupported";
    downloads: number;
    followers: number;
    categories: Array<string>;
    additional_categories: Array<string>;
    versions: Array<string>;
    icon_url: string;
    issues_url: string;
    source_url: string;
    wiki_url: string;
    discord_url: string;
    donation_urls: Array<DonationItem>;
    gallery: Array<GalleryItem>;
  };

  type DonationItem = {
    id: string;
    platform: string;
    url: string;
  };

  type GalleryItem = {
    url: string;
    featured: boolean;
    title: string;
    description: string;
    created: Date;
  };

  const modList: Promise<Array<ModData>> = new Promise((res, rej) => {
    fetch("https://api.modrinth.com/v2/user/mrmelon54/projects")
      .then(resp => res(resp.json()))
      .catch(err => rej(err));
  });
</script>

<svelte:head>
  <title>KTaNE | MrMelon54.com</title>
</svelte:head>

<CenterScreen>
  <h1 class="title-text">MrMelon54 Minecraft Projects</h1>
  <ul>
    <li>
      <span><a href="/minecraft/updates" use:link>Updates</a></span>
    </li>
    <li>
      <span>Coming soon</span>
    </li>
  </ul>
  {#await modList}
    <div class="projects-loading" />
  {:then x}
    <div class="projects">
      {#each x as y}
        <div class="project-item">
          <img src={y.icon_url} />
          <span class="project-item-id">{y.id}</span>
          <span class="project-item-id">{y.title}</span>
        </div>
      {/each}
    </div>
  {/await}
</CenterScreen>

<style lang="scss">
  .title-text {
    margin: 0 0 24px 0;
    font-size: 3.2em;
    line-height: 1.1;
  }

  .projects {
    display: flex;
    flex-wrap: wrap;

    > .project-item {
      flex: 25%;
      max-width: 25%;
      display: flex;
      flex-direction: column;
      background: var(--bg-panel);
      border-radius: 16px;

      @media (max-width: 800px) {
        & {
          flex: 50%;
          max-width: 50%;
        }
      }

      @media (max-width: 600px) {
        & {
          flex: 100%;
          max-width: 100%;
        }
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
