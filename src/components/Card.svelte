<script lang="ts">
  export let title: string;
  export let paragraph: string;
</script>

<div class="card">
  <h3>{title}</h3>
  <p>{paragraph}</p>
  <div class="card-details">
    <slot />
  </div>
</div>

<style lang="postcss">
  .card {
    @apply bg-teal-900 rounded-lg w-96 p-8;
    @apply border border-gray-500;

    h3 {
      @apply text-2xl;
    }

    p {
      @apply my-4;
    }
  }

  .card-details {
    @apply flex flex-row justify-between text-sm text-gray-400;
  }
</style>
