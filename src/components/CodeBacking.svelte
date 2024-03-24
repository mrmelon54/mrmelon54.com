<script lang="ts">
  const allowedLanguages = ["Java", "Kotlin", "JavaScript", "TypeScript", "HTML", "Python", "Go", "C++", "GDScript", "SCSS", "C#", "Svelte", "Shell"];

  async function fetchJson(url: string): Promise<any> {
    return (await fetch(url)).json();
  }

  function choose(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
  }

  async function getRepo() {
    let sourceResp = await fetchJson("https://api.mrmelon54.com/v1/random-source");
    return sourceResp;
  }

  let repo = getRepo();
</script>

<div class="code-wrapper">
  {#await repo}
    <span>Loading...</span>
  {:then x}
    <pre>{JSON.stringify(x, null, "  ")}</pre>
  {/await}
</div>

<style>
</style>
