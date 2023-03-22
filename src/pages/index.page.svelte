<script lang="ts">
  import MetaTags from "~/components/MetaTags.svelte";
  import CurseforgeLogo from "~/icons/CurseforgeLogo.svelte";
  import DiscordLogo from "~/icons/DiscordLogo.svelte";
  import GithubLogo from "~/icons/GithubLogo.svelte";
  import KoFiLogo from "~/icons/KoFiLogo.svelte";
  import MastodonLogo from "~/icons/MastodonLogo.svelte";
  import ModrinthLogo from "~/icons/ModrinthLogo.svelte";
  import PatreonLogo from "~/icons/PatreonLogo.svelte";
  import PaypalLogo from "~/icons/PaypalLogo.svelte";
  import SteamLogo from "~/icons/SteamLogo.svelte";
  import TwitchLogo from "~/icons/TwitchLogo.svelte";
  import TwitterLogo from "~/icons/TwitterLogo.svelte";
  import YouTubeLogo from "~/icons/YouTubeLogo.svelte";
  import Layout from "~/pages/__layout.svelte";

  export let __;

  const socials = [
    {text: "🍉 Melon Planet", id: "discord", url: "https://discord.gg/wKr9eBF", logo: DiscordLogo},
    {text: "MrMelon54", id: "github", url: "https://github.com/MrMelon54", logo: GithubLogo},
    {text: "MrMelon54", id: "patreon", url: "https://patreon.com/MrMelon54", logo: PatreonLogo},
    {text: "MrMelon54", id: "ko-fi", url: "https://ko-fi.com/MrMelon54", logo: KoFiLogo},
    {text: "MrMelon54", id: "paypal", url: "https://www.paypal.me/MrMelon54", logo: PaypalLogo},
    {text: "@MrMelon54", id: "twitter", url: "https://twitter.com/@MrMelon54", logo: TwitterLogo},
    {text: "@melon@techhub.social", id: "mastodon", url: "https://techhub.social/@melon", logo: MastodonLogo},
    {text: "MrMelon54", id: "modrinth", url: "https://modrinth.com/user/MrMelon54", logo: ModrinthLogo},
    {text: "MrMelon54", id: "curseforge", url: "https://curseforge.com/members/MrMelon54/projects", logo: CurseforgeLogo},
    {text: "MrMelon54", id: "twitch", url: "https://twitch.tv/MrMelon54", logo: TwitchLogo},
    {text: "MrMelon54", id: "youtube", url: "https://youtube.com/@MrMelon54", logo: YouTubeLogo},
    {text: "Melon54", id: "steam", url: "https://steamcommunity.com/id/Melon54", logo: SteamLogo},
  ];
</script>

<MetaTags url={__.urlOriginal} title="MrMelon54.com" description="MrMelon54.com Home Page" keywords="" />

<svelte:head>
  <link href="https://techhub.social/@melon" rel="me" />
</svelte:head>

<Layout isHome={true}>
  <div class="title-logo">
    <a href="https://mrmelon54.com">
      <img src="/melon.svg" class="logo" alt="Melon Logo" />
    </a>
  </div>
  <h1 class="title-text">MrMelon54.com</h1>

  <p class="coming-soon">Coming soon to an internet server near you.</p>

  <div class="socials">
    <h2>Socials</h2>
    <div class="link-buttons">
      {#each socials as social}
        <a href={social.url} class="brand-button-wrapper" rel="noreferrer" target="_blank">
          <div class="brand-button button-{social.id}">
            <svelte:component this={social.logo} />
            <span>{social.text}</span>
          </div>
        </a>
      {/each}
    </div>
  </div>
</Layout>

<style lang="scss">
  @import "../styles/link-buttons.scss";

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
