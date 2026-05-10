import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Friedrich Beckmann",
  description: "A Site about Friedrich Beckmann",
  lang: "de-DE",
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    outline: {
      level: [2, 3],
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Projekte", link: "/projects" },
    ],

    sidebar: [
      // {
      //   text: "Examples",
      //   items: [
      //     { text: "Runtime API Examples", link: "/api-examples" },
      //   ],
      // },
      {
        text: "Informatik Projekte",
        items: [
          { text: "Übersicht", link: "/projects/" },
          { text: "Snake", link: "/projects/snake/" },
          { text: "Forex bots", link: "/projects/forexBots/" },
          { text: "1. Webseite", link: "/projects/fbwebv1/" },
          {
            text: "Financial Statment Desktop",
            link: "/projects/financialStatmentDesktop/",
          },
          {
            text: "Financial Statment Web",
            link: "/projects/financialStatmentWeb/",
          },
          {
            text: "Dungeon Crawler",
            link: "/projects/dungeonCrawler/",
          },
          {
            text: "WalletX App",
            link: "/projects/walletX/",
          },
          {
            text: "Pizza Service Web",
            link: "/projects/pizzaServiceWeb/",
          },
          {
            text: "Smart Exam",
            link: "/projects/smartExam/",
          },
          {
            text: "Movie Match",
            link: "/projects/movieMatch/",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/Justin6015" },
      {
        icon: "linkedin",
        link: "https://www.linkedin.com/in/friedrich-beckmann-72a600208/",
      },
      { icon: "x", link: "https://x.com/Friedri23557644/" },
      { icon: "instagram", link: "https://www.instagram.com/friedrich_jb/" },
      { icon: "youtube", link: "https://www.youtube.com/@justin_6015" },
      { icon: "discord", link: "https://discord.com/users/friedrichx" },
    ],
  },
});
