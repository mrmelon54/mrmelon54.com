<script lang="ts">
  let y = 0;
</script>

<svelte:window bind:scrollY={y} />

<header class:isTop={y == 0}>
  <a class="px-4 flex-none flex overflow-hidden md:w-auto items-center font-bold text-2xl" href="/">
    <img src="/melon.svg" alt="Melon Logo" class="text-white w-auto h-8" />
    <span class="ml-4">MrMelon54</span>
  </a>
  <nav class="text-l leading-6 font-semibold relative hidden lg:flex items-stretch ml-auto">
    <a href="https://status.mrmelon54.com" target="_blank" rel="noreferrer">Status</a>
    <a href="https://login.mrmelon54.com" target="_blank" rel="noreferrer">Login</a>
    <a href="/blog">Blog</a>
    <a href="/minecraft">Minecraft</a>
    <a href="/ktane">KTaNE</a>
  </nav>
</header>

<style lang="postcss">
  header {
    @apply sticky top-0 z-40 h-16 px-4 lg:px-8 w-full flex items-stretch;
    @apply bg-transparent text-gray-200 lg:border-b lg:border-transparent;
    transition: backdrop-filter 0.2s;
    @apply backdrop-blur backdrop-opacity-100;
    @apply lg:border-slate-900/10 border-slate-50/[0.06];

    &.isTop {
      @apply backdrop-opacity-0 border-transparent;
    }

    nav a {
      @apply px-4 flex items-center text-gray-200;
    }
  }
</style>
