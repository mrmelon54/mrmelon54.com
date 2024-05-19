<script lang="ts">
  import MetaTags from "~/components/MetaTags.svelte";
  import Layout from "./__layout.svelte";

  export let __;
  export let pageProps;
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

  <section>
    <h2>Minecraft Projects</h2>
  </section>

  <section>
    <h2>KTaNE Projects</h2>
  </section>
</Layout>
