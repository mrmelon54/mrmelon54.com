<script lang="ts">
  import CraftingTable from "~/assets/crafting_table.png";

  const craftWidth = 124;
  const craftHeight = 62;

  let craftingBg = new Image(124, 62);
  craftingBg.src = CraftingTable;
  craftingBg.onload = () => render();
  let craftingCanvas;

  function render() {
    let craftingCtx = craftingCanvas.getContext("2d");
    craftingCtx.fillStyle = "#ff0000";
    craftingCtx.fillRect(0, 0, craftWidth, craftHeight);

    craftingCtx.drawImage(craftingBg, 0, 0);
  }
</script>

<canvas bind:this={craftingCanvas} on:load={() => render()} width={craftWidth} height={craftHeight} />

<input type="file" id="actual-btn" hidden />
<label for="upload">Choose file</label>

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
