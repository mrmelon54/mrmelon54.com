<script lang="ts">
  import MetaTags from "~/components/MetaTags.svelte";
  import Layout from "~/pages/__layout.svelte";

  export let __;

  interface ktaneProject {
    name: string;
    href: string;
    description: string;
    deprecated: boolean;
  }

  const ktaneProjects: ktaneProject[] = [
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
      name: "Iconic String Generator",
      href: "https://ktane.mrmelon54.com/iconic-string-generator",
      description: "Old editor for Iconic mod development.",
      deprecated: true,
    },
    {
      name: "Live Manual Editor",
      href: "https://ktane.mrmelon54.com/live-manual-editor",
      description: "",
      deprecated: true,
    },
  ];

  let showDeprecated: boolean = false;
</script>

<MetaTags url={__.urlOriginal} title="KTaNE | MrMelon54" description="MrMelon54 KTaNE Projects" keywords="ktane,keep talking and nobody explodes" />

<Layout>
  <h1 class="title-text">MrMelon54 KTaNE Projects</h1>
  <div class="projects-toggle">
    <input type="checkbox" name="deprecated" bind:checked={showDeprecated} />
    <label for="deprecated">Show deprecated projects</label>
  </div>
  <div class="projects">
    {#each ktaneProjects as y}
      {#if !y.deprecated || showDeprecated}
        <a href={y.href} class="project-item">
          <span class="project-item-name">{y.name}</span>
          <span class="flex-gap" />
          {#if y.deprecated}
            <span class="project-item-deprecated">Deprecated</span>
          {/if}
          <span class="project-item-description">{y.description}</span>
        </a>
      {/if}
    {/each}
  </div>
</Layout>

<style lang="scss">
  .title-text {
    margin: 0 0 24px 0;
    font-size: 3.2em;
    line-height: 1.1;
  }

  .projects-toggle {
    margin: 0 0 24px 0;
  }

  .projects {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;

    .project-item {
      width: calc((600px - 4rem - 16px) * 0.5);
      align-self: stretch;

      display: flex;
      flex-direction: column;
      background: var(--bg-panel);
      border-radius: 16px;
      -webkit-box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5);
      -moz-box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5);
      box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5);

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
    }

    @media (max-width: 600px) {
      .project-item {
        width: 100%;
      }
    }
  }
</style>
