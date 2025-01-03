<script lang="ts">
  import MetaTags from "~/components/MetaTags.svelte";
  import Layout from "~/pages/__layout.svelte";
  import {modStore} from "~/stores/minecraft-cache";
  import Card from "~/components/card/Card.svelte";
  import CardTitle from "~/components/card/CardTitle.svelte";
  import CardContent from "~/components/card/CardContent.svelte";
  import Background from "~/components/Background.svelte";

  export let __;
</script>

<MetaTags
  url={__.urlOriginal}
  title="MrMelon54 Minecraft Projects"
  description="Projects made by MrMelon54 for Minecraft"
  keywords="minecraft,minecraft mod,mrmelon54,modrinth,curseforge,github"
/>

<Background src="/bg.png" />

<Layout>
  <section class="max-w-7xl mx-auto p-12 flex flex-col gap-8">
    <h1 class="text-4xl">Minecraft Mods</h1>
    {#if $modStore instanceof Error}
      <div class="loading">{$modStore.message}</div>
    {:else if $modStore}
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {#each $modStore.projects as y}
          <Card
            href="/minecraft/{y.slug}"
            image={{src: y.icon_url, alt: y.title}}
            imgClass="size-24 aspect-square"
            horizontal
          >
            <CardTitle class="text-md text-gray-200">{y.title}</CardTitle>
            <CardContent>{y.slug}</CardContent>
            <CardContent>{y.id} - {y.game_versions[y.game_versions.length - 1]}</CardContent>
          </Card>
        {/each}
      </div>
    {:else}
      <div class="loading" />
    {/if}
  </section>
</Layout>
