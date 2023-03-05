<script lang="ts">
  import {onMount} from "svelte";
  import Layout from "../__layout.svelte";

  const craftWidth = 124;
  const craftHeight = 62;

  let craftingBg;
  let craftingCanvas;

  onMount(() => {
    craftingBg = new Image(124, 62);
    craftingBg.src = "assets/crafting_table.png";
    craftingBg.onload = () => render();
  });

  function render() {
    let craftingCtx = craftingCanvas.getContext("2d");
    craftingCtx.fillStyle = "#ff0000";
    craftingCtx.fillRect(0, 0, craftWidth, craftHeight);

    craftingCtx.drawImage(craftingBg, 0, 0);
  }
</script>

<Layout>
  <canvas bind:this={craftingCanvas} on:load={() => render()} width={craftWidth} height={craftHeight} />

  <input type="file" id="actual-btn" hidden />
  <label for="upload">Choose file</label>
</Layout>

<style lang="scss">
  label {
    background-color: indigo;
    color: white;
    padding: 0.5rem;
    font-family: sans-serif;
    border-radius: 0.3rem;
    cursor: pointer;
    margin-top: 1rem;
  }
</style>
