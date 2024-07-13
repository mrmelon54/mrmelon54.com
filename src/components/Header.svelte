<script lang="ts">
  let y = 0;

  let openNav: boolean = false;
</script>

<svelte:window bind:scrollY={y} />

<header class:isTop={y == 0} class:openNav>
  <div class="mobile-top-row">
    <a class="px-4 h-16 flex-none flex overflow-hidden md:w-auto items-center font-bold text-2xl" href="/">
      <img src="/melon.svg" alt="Melon Logo" class="text-white w-auto h-8" />
      <span class="ml-4">MrMelon54</span>
    </a>
    <button id="mobile-hamburger" on:click={() => (openNav = !openNav)} aria-label="mobile navigation" aria-expanded="false">
      <span class="line top" />
      <span class="line middle" />
      <span class="line bottom" />
    </button>
  </div>
  <nav>
    <a href="https://status.mrmelon54.com" target="_blank" rel="noreferrer">Status</a>
    <a href="https://login.mrmelon54.com" target="_blank" rel="noreferrer">Login</a>
    <a href="/blog">Blog</a>
    <a href="/minecraft">Minecraft</a>
    <a href="/ktane">KTaNE</a>
  </nav>
</header>
<div class="h-16" />

<style lang="postcss">
  header {
    @apply sticky top-0 z-40 w-full flex justify-between items-stretch;
    @apply bg-transparent text-gray-200 lg:border-b lg:border-transparent;
    transition: backdrop-filter cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
    @apply backdrop-blur backdrop-opacity-100;
    @apply lg:border-slate-900/10 border-slate-50/[0.06];
    @apply flex-col md:flex-row;
    @apply fixed top-0 left-0 right-0 w-svw;
    @apply md:h-16;

    .mobile-top-row {
      @apply flex flex-row justify-between;
    }

    &.isTop {
      @apply backdrop-opacity-0 border-transparent;

      &.openNav {
        @apply backdrop-blur backdrop-opacity-100;
        @apply md:backdrop-opacity-0 md:border-transparent;
      }
    }

    nav {
      @apply text-left leading-6 font-semibold flex items-stretch;
      @apply md:static;
      @apply top-16;
      @apply w-svw md:w-auto flex-col md:flex-row;

      @apply transition-all;
      @apply md:transition-none;
      @apply opacity-100;

      @apply translate-y-[-100%] md:translate-y-0;
      @apply h-0;
      @apply overflow-hidden md:overflow-visible;

      a {
        @apply px-4 flex items-center text-gray-200 h-16;
      }
    }

    &.openNav nav {
      height: calc(100svh - 64px);
      @apply md:h-16;
      @apply translate-y-0;
    }

    #mobile-hamburger {
      @apply flex md:hidden flex-col gap-2 align-middle justify-center;
      @apply w-16 h-16;

      .line {
        height: 2px;
        border-radius: 1px;
        @apply bg-gray-200;
      }
    }
  }
</style>
