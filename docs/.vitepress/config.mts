import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Friedrich Beckmann",
  description: "A Site about Friedrich Beckmann",
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
      { text: "Projekte", link: "/projects" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
          {
            text: "Projekte",
            items: [
              { text: "Übersicht Projekte", link: "/projects" },
              { text: "Snake", link: "/projects/snake" },
              { text: "FB Web V1", link: "/projects/fbwebv1" },
            ],
          },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/Justin6015" }],
  },
});
