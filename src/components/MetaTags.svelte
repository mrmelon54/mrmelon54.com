<script>
  import appStyles from "~/assets/app.scss";

  export let title;
  export let description;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <link rel="stylesheet" href={appStyles} />
  <link rel="stylesheet" href="{import.meta.env.VITE_CSS_VAR}.light.css" media="screen" />
  <link rel="stylesheet" href="{import.meta.env.VITE_CSS_VAR}.dark.css" media="screen and (prefers-color-scheme: dark)" />
</svelte:head>
