<script lang="ts">
  import MetaTags from "~/components/MetaTags.svelte";
  import Layout from "./__layout.svelte";
  import Card from "~/components/card/Card.svelte";
  import CardTitle from "~/components/card/CardTitle.svelte";
  import CardContent from "~/components/card/CardContent.svelte";
  import CardDetails from "~/components/card/CardDetails.svelte";
  import Background from "~/components/Background.svelte";

  export let __;
  export let pageProps;

  interface cardObj {
    title: string;
    desc: string;
    url: string;
    remote?: boolean;
    commits: string;
    language: {name: string; color: string};
  }

  const cardsMc: cardObj[] = [
    {
      title: "Armored Elytra",
      desc: "Show the armor and elytra when using the armored elytra datapack.",
      url: "/minecraft/armored-elytra",
      commits: "30",
      language: {name: "Java", color: "bg-[#b07219]"},
    },
    {
      title: "Draggable Lists",
      desc: "Draggable resource packs, datapacks, servers and worlds.",
      url: "/minecraft/draggable-lists",
      commits: "26",
      language: {name: "Java", color: "bg-[#b07219]"},
    },
    {
      title: "Melon Wireless Redstone",
      desc: "Wireless Redstone, what more can I say?",
      url: "/minecraft/wireless-redstone",
      commits: "17",
      language: {name: "Java", color: "bg-[#b07219]"},
    },
  ];

  const cardsKtane: cardObj[] = [
    {
      title: "Remote Math",
      desc: "You're telling me bombs now connect to the internet?",
      url: "https://github.com/mrmelon54/ktanemod-remote-math",
      remote: true,
      commits: "35",
      language: {name: "C#", color: "bg-[#178600]"},
    },
    {
      title: "Planets",
      desc: "Why do people do this... The Milky Way shouldn't be on a bomb!",
      url: "https://github.com/mrmelon54/ktanemod-planets",
      remote: true,
      commits: "61",
      language: {name: "C#", color: "bg-[#178600]"},
    },
    {
      title: "KTaNE Iconic Editor",
      desc: "Editor to generate module configuration for Iconic",
      url: "https://github.com/mrmelon54/ktane-iconic-editor",
      remote: true,
      commits: "51",
      language: {name: "Svelte", color: "bg-[#ff3e00]"},
    },
  ];
</script>

<MetaTags url={__.urlOriginal} title="MrMelon54" description="MrMelon54.com Home Page" keywords="" />

<svelte:head>
  <link href="https://techhub.social/@melon" rel="me" />
</svelte:head>

<Background src="/bg.png" />

<Layout>
  <section class="max-w-7xl mx-auto h-96 p-24 flex flex-col justify-end gap-8">
    <h1 class="text-6xl">MrMelon54</h1>
    <p>British man. Coming to an internet server near you.</p>
  </section>

  <section class="max-w-7xl mx-auto p-12 flex flex-col gap-8">
    <h2 class="text-4xl">Minecraft Projects</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {#each cardsMc as card}
        <Card href={card.url} {...card.remote || false ? {target: "_blank", rel: "noreferrer"} : {}}>
          <CardTitle>{card.title}</CardTitle>
          <CardContent>{card.desc}</CardContent>
          <span class="flex-grow" />
          <CardDetails>
            <div>{card.commits} commits on GitHub</div>
            <div class="card-lang">
              {card.language.name}
              <div class="rounded-full w-4 h-4 {card.language.color} inline-block" />
            </div>
          </CardDetails>
        </Card>
      {/each}
    </div>
  </section>

  <section class="max-w-7xl mx-auto p-12 flex flex-col gap-8">
    <h2 class="text-4xl">KTaNE Projects</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {#each cardsKtane as card}
        <Card href={card.url} {...card.remote || false ? {target: "_blank", rel: "noreferrer"} : {}}>
          <CardTitle>{card.title}</CardTitle>
          <CardContent>{card.desc}</CardContent>
          <span class="flex-grow" />
          <CardDetails>
            <div>{card.commits} commits on GitHub</div>
            <div class="card-lang">
              {card.language.name}
              <div class="rounded-full w-4 h-4 {card.language.color} inline-block" />
            </div>
          </CardDetails>
        </Card>
      {/each}
    </div>
  </section>
</Layout>

<style lang="postcss">
  .card-lang {
    @apply flex flex-row items-center gap-2;
  }
</style>
