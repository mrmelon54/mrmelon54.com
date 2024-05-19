<script lang="ts">
  export let url: string;
  export let title: string;
  export let description: string;
  export let keywords: string;
</script>

<svelte:head>
  <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
  <title>{title}</title>

  <meta name="theme-color" content="#469b4c" />
  <meta name="default-theme" content="auto" />
  <meta name="author" content="MrMelon54" />
  <meta name="description" content={description} />
  <meta name="keywords" content="mrmelon54.com,mrmelon54,{keywords}" />
  <meta name="referrer" content="no-referrer" />

  <meta property="og:title" content={title} />
  <meta property="og:url" content={url.indexOf("https://") == 0 ? url : "https://mrmelon54.com" + (url[0] == "/" ? url : "/" + url)} />
  <meta property="og:type" content="object" />
  <meta property="og:image" content="https://mrmelon54.com/melon.png" />
  <meta property="og:site_name" content="MrMelon54" />

  <link rel="icon" type="image/svg+xml" href="/melon.svg" />
  <link rel="icon" type="image/png" href="/melon.png" />
</svelte:head>
