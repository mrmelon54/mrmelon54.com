<script lang="ts">
  import MetaTags from "~/components/MetaTags.svelte";
  import Layout from "./__layout.svelte";
  import Card from "~/components/Card.svelte";

  export let __;
  export let pageProps;

  const cardsMc = [
    {
      title: "",
    },
  ];
</script>

<MetaTags url={__.urlOriginal} title="MrMelon54" description="MrMelon54.com Home Page" keywords="" />

<svelte:head>
  <link href="https://techhub.social/@melon" rel="me" />
</svelte:head>

<div class="absolute top-0 right-0 w-full h-full -z-10 bg-no-repeat" style="background-image: url('bg.png'); background-position: 100% 0;" />

<Layout>
  <section class="max-w-7xl mx-auto h-96 p-16 flex flex-col justify-end gap-8">
    <h1 class="text-6xl">MrMelon54</h1>
    <p>British man. Coming to an internet server near you.</p>
  </section>

  <section class="max-w-7xl mx-auto p-12">
    <h2 class="text-4xl">Minecraft Projects</h2>
    <div class="flex flex-row pt-8">
      <Card title="Some Title" paragraph="This is some content" addClass="w-96">
        <svelte:fragment slot="details">
          <div>1,000 commits on GitHub</div>
          <div class="card-lang">
            Golang <div class="rounded-full w-4 h-4 bg-[#5ec9e3] inline-block" />
          </div>
        </svelte:fragment>
      </Card>
    </div>
  </section>

  <section class="max-w-7xl mx-auto p-12">
    <h2 class="text-4xl">KTaNE Projects</h2>
  </section>
</Layout>

<style lang="postcss">
  .card-lang {
    @apply flex flex-row items-center gap-2;
  }
</style>
