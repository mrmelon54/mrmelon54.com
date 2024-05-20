<script lang="ts" context="module">
  export enum CardView {
    NoImage,
    ViewImageTopDetailsInline,
    ViewImageLeftDetailsInline,
  }
</script>

<script lang="ts">
  let clazz = undefined;
  export {clazz as class};
  export let imgClass = undefined;
  export let image: {src: string; alt: string} | null = null;
  export let horizontal: boolean = false;
  export let reverse: boolean = false;

  function getFlexDirection(horizontal: boolean, reverse: boolean): string {
    if (reverse) return horizontal ? "flex-row-reverse" : "flex-col-reverse";
    else return horizontal ? "flex-row" : "flex-col";
  }
</script>

<svelte:element this={$$restProps.href ? "a" : "div"} class="card {getFlexDirection(horizontal, reverse)} {clazz || ''}" {...$$restProps}>
  {#if image}
    <img src={image.src} alt={image.alt} class="{horizontal ? 'my-auto' : 'mx-auto'} {imgClass || ''}" />
  {/if}
  <div class="flex flex-col flex-grow p-2">
    <slot />
  </div>
</svelte:element>

<style lang="postcss">
  .card {
    @apply bg-teal-900 rounded-lg;
    @apply border border-gray-500;
    @apply flex gap-2;
    @apply overflow-hidden;
  }
</style>
