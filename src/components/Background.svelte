<script lang="ts">
  export let src: string;
</script>

<div class="bg" style="--img: url('{src}');" />

<style lang="postcss">
  .bg {
    @apply absolute top-0 right-0 w-full h-full -z-10 bg-no-repeat;
    background-image: var(--img);
    background-position: 100% 0;
  }
</style>
