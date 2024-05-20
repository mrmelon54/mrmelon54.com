<script lang="ts">
  export let addClass: string = "";
  export let title: string;
  export let paragraph: string | null = null;
  export let image: {src: string; alt: string} | null = null;
  export let inlineDetails: boolean = false;
</script>

<div class="card {addClass}">
  {#if image}
    <img src={image.src} alt={image.alt} class="mx-auto" />
  {/if}
  {#if !inlineDetails}
    <h3>{title}</h3>
  {/if}
  {#if paragraph && !inlineDetails}
    <p>{paragraph}</p>
  {/if}
  {#if $$slots.details || inlineDetails}
    <div class="card-details">
      {#if inlineDetails}
        <h3>{title}</h3>
      {/if}
      {#if $$slots.details}
        <slot name="details" />
      {/if}
    </div>
  {/if}
  {#if paragraph && inlineDetails}
    <p>{paragraph}</p>
  {/if}
</div>

<style lang="postcss">
  .card {
    @apply bg-teal-900 rounded-lg p-4;
    @apply border border-gray-500;
    @apply flex flex-col gap-4;

    h3 {
      @apply text-2xl my-2 text-gray-200;
    }

    p {
      @apply text-gray-400;
    }
  }

  .card-details {
    @apply flex flex-row justify-between items-center text-sm text-gray-400;
  }
</style>
