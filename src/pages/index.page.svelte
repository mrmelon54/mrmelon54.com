<script lang="ts">
  import MetaTags from "~/components/MetaTags.svelte";
  import CurseforgeLogo from "~/icons/CurseforgeLogo.svelte";
  import DiscordLogo from "~/icons/DiscordLogo.svelte";
  import GithubLogo from "~/icons/GithubLogo.svelte";
  import GoLogo from "~/icons/GoLogo.svelte";
  import KoFiLogo from "~/icons/KoFiLogo.svelte";
  import MastodonLogo from "~/icons/MastodonLogo.svelte";
  import ModrinthLogo from "~/icons/ModrinthLogo.svelte";
  import PatreonLogo from "~/icons/PatreonLogo.svelte";
  import PaypalLogo from "~/icons/PaypalLogo.svelte";
  import StackOverflowLogo from "~/icons/StackOverflowLogo.svelte";
  import SteamLogo from "~/icons/SteamLogo.svelte";
  import SvelteLogo from "~/icons/SvelteLogo.svelte";
  import TwitchLogo from "~/icons/TwitchLogo.svelte";
  import TwitterLogo from "~/icons/TwitterLogo.svelte";
  import XonoticLogo from "~/icons/XonoticLogo.svelte";
  import YouTubeLogo from "~/icons/YouTubeLogo.svelte";
  import Layout from "~/pages/__layout.svelte";

  export let __;
  export let pageProps;

  const socials = [
    {id: "discord", url: "https://discord.gg/wKr9eBF", logo: DiscordLogo},
    {id: "github", url: "https://github.com/mrmelon54", logo: GithubLogo},
    {id: "patreon", url: "https://patreon.com/mrmelon54", logo: PatreonLogo},
    {id: "ko-fi", url: "https://ko-fi.com/mrmelon54", logo: KoFiLogo},
    {id: "paypal", url: "https://www.paypal.me/mrmelon54", logo: PaypalLogo},
    {id: "twitter", url: "https://twitter.com/@mrmelon54", logo: TwitterLogo},
    {id: "mastodon", url: "https://techhub.social/@melon", logo: MastodonLogo},
    {id: "modrinth", url: "https://modrinth.com/user/mrmelon54", logo: ModrinthLogo},
    {id: "curseforge", url: "https://curseforge.com/members/mrmelon54/projects", logo: CurseforgeLogo},
    {id: "twitch", url: "https://twitch.tv/mrmelon54", logo: TwitchLogo},
    {id: "youtube", url: "https://youtube.com/@mrmelon54", logo: YouTubeLogo},
    {id: "steam", url: "https://steamcommunity.com/id/melon54", logo: SteamLogo},
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

  const projects = [
    {name: "Go.dev", id: "godev", url: "https://go.dev", logo: GoLogo},
    {name: "Xonotic", id: "xonotic", url: "https://xonotic.org", logo: XonoticLogo},
    {name: "StackOverflow", id: "stackoverflow", url: "https://stackoverflow.com", logo: StackOverflowLogo},
    {name: "Svelte", id: "svelte", url: "https://svelte.dev", logo: SvelteLogo},
  ];
</script>

<MetaTags url={__.urlOriginal} title="MrMelon54" description="MrMelon54.com Home Page" keywords="" />

<svelte:head>
  <link href="https://techhub.social/@melon" rel="me" />
</svelte:head>

<Layout>
  <div class="title-logo">
    <a href="https://mrmelon54.com">
      <img src="/melon.svg" class="logo" alt="Melon Logo" />
    </a>
  </div>
  <h1 class="title-text">MrMelon54</h1>

  <p class="coming-soon">Coming soon to an internet server near you.</p>

  <div class="socials">
    <h2>Socials</h2>
    <div class="link-buttons">
      {#each socials as social}
        <a href={social.url} class="brand-button button-{social.id}" rel="noreferrer" target="_blank">
          <svelte:component this={social.logo} />
        </a>
      {/each}
    </div>
  </div>

  <div class="friends">
    <h2>Friends</h2>
    <div class="link-buttons">
      {#each friends as friend}
        <svelte:element
          this={friend.url != null ? "a" : "span"}
          href={friend.url}
          class="brand-button button-{friend.id}"
          rel="noreferrer"
          target="_blank"
          style={`background-image:url("${friend.logo}");`}
        >
          {#if friend.logo === null}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" version="1.1">
              <text x="50%" y="60%" dominant-baseline="middle" text-anchor="middle" font-size="0.8em">{friend.name[0]}</text>
            </svg>
          {/if}
        </svelte:element>
      {/each}
    </div>
  </div>

  <div class="socials">
    <h2>Projects I Like</h2>
    <div class="link-buttons">
      {#each projects as project}
        <a href={project.url} class="brand-button button-{project.id}" rel="noreferrer" target="_blank">
          <svelte:component this={project.logo} />
        </a>
      {/each}
    </div>
  </div>
</Layout>

<style lang="scss">
  @import "../styles/link-buttons-socials.scss";
  @import "../styles/link-buttons-friends.scss";

  .title-logo .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;

    &:hover {
      filter: drop-shadow(0 0 2em #469b4caa);
    }
  }

  .title-text {
    margin: 0 0 24px 0;
    font-size: 3.2em;
    line-height: 1.1;
  }
</style>
