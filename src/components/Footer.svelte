<script lang="ts">
  import CurseforgeLogo from "~/icons/brands/Curseforge.svelte";
  import DiscordLogo from "~/icons/brands/Discord.svelte";
  import GithubLogo from "~/icons/brands/Github.svelte";
  import KoFiLogo from "~/icons/brands/Kofi.svelte";
  import MastodonLogo from "~/icons/brands/Mastodon.svelte";
  import ModrinthLogo from "~/icons/brands/Modrinth.svelte";
  import PatreonLogo from "~/icons/brands/Patreon.svelte";
  import PaypalLogo from "~/icons/brands/Paypal.svelte";
  import SteamLogo from "~/icons/brands/Steam.svelte";
  import TwitchLogo from "~/icons/brands/Twitch.svelte";
  import TwitterLogo from "~/icons/brands/Twitter.svelte";
  import YouTubeLogo from "~/icons/brands/Youtube.svelte";

  const socials = [
    {name: "Discord", url: "https://discord.gg/wKr9eBF", logo: DiscordLogo},
    {name: "GitHub", url: "https://github.com/mrmelon54", logo: GithubLogo},
    {name: "Patreon", url: "https://patreon.com/mrmelon54", logo: PatreonLogo},
    {name: "Ko-fi", url: "https://ko-fi.com/mrmelon54", logo: KoFiLogo},
    {name: "Paypal", url: "https://www.paypal.me/mrmelon54", logo: PaypalLogo},
    {name: "Twitter", url: "https://twitter.com/@mrmelon54", logo: TwitterLogo},
    {name: "Mastodon", url: "https://techhub.social/@melon", logo: MastodonLogo},
    {name: "Modrinth", url: "https://modrinth.com/user/mrmelon54", logo: ModrinthLogo},
    {name: "CurseForge", url: "https://curseforge.com/members/mrmelon54/projects", logo: CurseforgeLogo},
    {name: "Twitch", url: "https://twitch.tv/mrmelon54", logo: TwitchLogo},
    {name: "YouTube", url: "https://youtube.com/@mrmelon54", logo: YouTubeLogo},
    {name: "Steam", url: "https://steamcommunity.com/id/melon54", logo: SteamLogo},
  ];

  const friends = [
    {name: "CaptainALM", id: "captainalm", url: "https://captainalm.com", logo: "/friends/captainalm.png"},
    {name: "Index57", id: "index57", url: null, logo: "/friends/index57.png"},
    {name: "ShxdedRaichu", id: "removeDirectory", url: "https://remove.directory", logo: "/friends/raichu.png"},
    {name: "Kikicat123", id: "kikicat123", url: "https://kikicat123.ca", logo: "/friends/kikicat123.png"},
    {name: "CarbonGhost", id: "carbonghost", url: "https://prosperitymc.net", logo: "/friends/carbonghost.png"},
    {name: "Pieman", id: "pieman", url: "https://pieman.dev", logo: "/friends/pieman.svg"},
    {name: "Qkrisi", id: "qkrisi", url: null, logo: "/friends/qkrisi.png"},
  ];

  const navigation = [
    {name: "Melon Status", url: "https://status.mrmelon54.com"},
    {name: "Melon Login", url: "https://login.mrmelon54.com"},
    {name: "1f349.com", url: "https://1f349.com"},
  ];
</script>

<footer>
  <nav>
    <div class="nav-half">
      <div class="nav-quarter wide">
        <h2>Social</h2>
        <ul class="wide">
          {#each socials as social}
            <li><a href={social.url}>{social.name}</a></li>
          {/each}
        </ul>
      </div>
    </div>
    <div class="nav-half">
      <div class="nav-quarter">
        <h2>Friends</h2>
        <ul>
          {#each friends as friend}
            <li><svelte:element this={friend.url == null ? "span" : "a"} href={friend.url}>{friend.name}</svelte:element></li>
          {/each}
        </ul>
      </div>
      <div class="nav-quarter">
        <h2>Navigation</h2>
        <ul>
          {#each navigation as nav}
            <li><a href={nav.url}>{nav.name}</a></li>
          {/each}
        </ul>
      </div>
    </div>
  </nav>
</footer>

<style lang="postcss">
  footer {
    @apply pb-16 text-sm leading-6 pt-16;

    nav {
      @apply flex max-w-7xl mx-auto px-4 sm:px-6 md:px-8 gap-4;

      .nav-half {
        @apply flex flex-col w-1/2 space-y-10 sm:space-y-8 lg:flex-row lg:space-y-0 gap-8;

        .nav-quarter {
          @apply flex flex-col lg:w-1/2 gap-2;

          &.wide {
            @apply w-full lg:w-full;
          }
        }
      }

      h2 {
        @apply font-semibold text-slate-900 dark:text-slate-100;
      }

      ul {
        @apply mt-3 grid grid-cols-1 gap-2;

        &.wide {
          @apply lg:grid-cols-2;
        }

        li {
          @apply hover:text-slate-900 dark:hover:text-slate-300;
        }
      }
    }
  }
</style>
