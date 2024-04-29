<script lang="ts">
  import MetaTags from "~/components/MetaTags.svelte";
  import Layout from "~/pages/__layout.svelte";
  import Steam from "~/icons/brands/Steam.svelte";
  import CodeIcon from "~/icons/Code.svelte";

  export let __;

  interface KtaneMod {
    key: string;
    name: string;
    steam: number;
  }

  const ktaneMods: KtaneMod[] = [
    {
      key: "planets",
      name: "Planets",
      steam: 1678785096,
    },
    {
      key: "colourcode",
      name: "Colour Code",
      steam: 1707736483,
    },
    {
      key: "snakes-and-ladders",
      name: "Snakes and Ladders",
      steam: 1816951648,
    },
    {
      key: "remote-math",
      name: "Remote Math",
      steam: 2100176840,
    },
  ];

  interface KtaneProject {
    name: string;
    href: string;
    description: string;
    deprecated: boolean;
  }

  const ktaneProjects: KtaneProject[] = [
    {
      name: "KTaNE Mirror",
      href: "https://ktane-mirror.mrmelon54.com",
      description: "A cached version of the KTaNE Repository of Manual Pages for faster loading times.",
      deprecated: false,
    },
    {
      name: "KTaNE Mod Ideas",
      href: "https://ktane-ideas.mrmelon54.com",
      description: "Displays mod ideas from the mod idea spreadsheet.",
      deprecated: false,
    },
    {
      name: "KTaNE Iconic Editor",
      href: "https://ktane-iconic-editor.mrmelon54.com",
      description: "New fancy editor for Iconic mod development.",
      deprecated: false,
    },
    {
      name: "KTaNE Manual Editor",
      href: "https://ktane-manual-editor.mrmelon54.com",
      description: "New fancy editor for KTaNE manuals",
      deprecated: false,
    },
    {
      name: "Iconic String Generator",
      href: "https://ktane-old.mrmelon54.com/iconic-string-generator",
      description: "Old editor for Iconic mod development.",
      deprecated: true,
    },
  ];
</script>

<MetaTags
  url={__.urlOriginal}
  title="MrMelon54 KTaNE Projects"
  description="Projects made by MrMelon54 for Keep Talking and Nobody Explodes"
  keywords="ktane,keep talking and nobody explodes,mrmelon54"
/>

<Layout>
  <h1 class="title-text">KTaNE Mods</h1>
  <div class="projects">
    {#each ktaneMods as y}
      <div class="project-item">
        <img src="/ktane/{y.key}.png" alt="{y.name} Module Icon" />
        <div class="project-label">
          <div class="project-name">{y.name}</div>
          <div class="flex-gap" />
          <a class="icon-button icon-steam" href="https://steamcommunity.com/sharedfiles/filedetails/?id={y.steam}" target="_blank">
            <Steam />
          </a>
          <a class="icon-button icon-github" href="https://github.com/mrmelon54/ktanemod-{y.key}" target="_blank">
            <CodeIcon size={28} />
          </a>
        </div>
      </div>
    {/each}
  </div>

  <h1 class="title-text">KTaNE Projects</h1>
  <div class="projects">
    {#each ktaneProjects as y}
      <a href={y.href} class="project-item">
        <span class="project-item-name">{y.name}</span>
        <span class="flex-gap" />
        {#if y.deprecated}
          <span class="project-item-deprecated">Deprecated</span>
        {/if}
        <span class="project-item-description">{y.description}</span>
      </a>
    {/each}
  </div>
</Layout>

<style lang="scss">
  .title-text {
    margin: 0;
    font-size: 3.2em;
    line-height: 1.1;
  }

  .projects {
    display: flex;
    padding: 24px;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;

    .project-item {
      width: calc((600px - 4rem - 16px) * 0.5);
      align-self: stretch;

      @media (max-width: 600px) {
        & {
          width: 100%;
        }
      }

      display: flex;
      flex-direction: column;
      background: var(--bg-panel);
      border-radius: 16px;
      -webkit-box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5);
      -moz-box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5);
      box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5);

      overflow: hidden;

      > .project-item-name {
        padding: 16px 16px 8px 16px;
        color: var(--primary-text);
      }

      > .project-item-deprecated {
        color: tomato;
      }

      > .project-item-description {
        font-size: 90%;
        padding: 0 8px 8px 8px;
        color: gray;
      }

      > .flex-gap {
        flex-grow: 1;
      }

      > .project-label {
        display: flex;
        flex-direction: row;

        > .project-name {
          margin: auto 16px auto 16px;
        }

        > .icon-button {
          display: flex;
          margin: 6px;
          cursor: pointer;
          border-radius: 50%;

          > :global(svg) {
            margin: auto;
          }

          &.icon-github {
            color: #ddd;
            background-color: #469b4c;
          }

          $iconSize: 32px;
          width: $iconSize;
          height: $iconSize;

          -webkit-box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5);
          -moz-box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5);
          box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5);
        }
      }
    }
  }
</style>
