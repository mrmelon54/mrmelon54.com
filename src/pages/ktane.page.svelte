<script lang="ts">
  import MetaTags from "~/components/MetaTags.svelte";
  import Layout from "~/pages/__layout.svelte";
  import CodeIcon from "~/icons/Code.svelte";
  import GamepadIcon from "~/icons/Gamepad2.svelte";
  import Card from "~/components/Card.svelte";

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
      name: "Snakes & Ladders",
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
      name: "Remote Math Interface",
      href: "https://github.com/mrmelon54/ktanemod-remote-math-interface",
      description: "The interface to connect Remote Math to Remote Math Server using secure websockets.",
      deprecated: false,
    },
    {
      name: "Remote Math Server",
      href: "https://github.com/mrmelon54/ktanemod-remote-math-server",
      description: "The server allowing communication between Remote Math modules and the manual.",
      deprecated: false,
    },
    {
      name: "KTaNE Mirror",
      href: "https://ktane-mirror.mrmelon54.com",
      description: "A cached version of the KTaNE Repository of Manual Pages for faster loading times.",
      deprecated: false,
    },
    {
      name: "KTaNE Mod Ideas",
      href: "https://ktane-ideas.mrmelon54.com",
      description: "A website to display mod ideas from the mod idea spreadsheet.",
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
  <section class="max-w-7xl mx-auto p-12 flex flex-col gap-8">
    <h1 class="text-4xl">KTaNE Mods</h1>
    <div class="flex flex-wrap gap-4">
      {#each ktaneMods as y}
        <Card title={y.name} inlineDetails={true} image={{src: `/ktane/${y.key}.png`, alt: `${y.name} Module Icon`}} addClass="w-80">
          <svelte:fragment slot="details">
            <span class="flex-grow" />
            <a class="p-1 text-gray-200" href="https://steamcommunity.com/sharedfiles/filedetails/?id={y.steam}" target="_blank" rel="noreferrer">
              <GamepadIcon size={28} />
            </a>
            <a class="p-1 text-gray-200" href="https://github.com/mrmelon54/ktanemod-{y.key}" target="_blank" rel="noreferrer">
              <CodeIcon size={28} />
            </a>
          </svelte:fragment>
        </Card>
      {/each}
    </div>
  </section>

  <section class="max-w-7xl mx-auto p-12 flex flex-col gap-8">
    <h1 class="text-4xl">KTaNE Projects</h1>
    <div class="flex flex-wrap gap-4">
      {#each ktaneProjects as y}
        <a href={y.href} class="project-item w-80" target="_blank" rel="noreferrer">
          {#if y.deprecated}
            <Card title={y.name} paragraph={y.description}>
              <div slot="details" class="text-rose-500">Deprecated</div>
            </Card>
          {:else}
            <Card title={y.name} paragraph={y.description} />
          {/if}
        </a>
      {/each}
    </div>
  </section>
</Layout>

<style lang="scss">
</style>
