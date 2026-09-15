import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import mediumZoom from "medium-zoom";
import Layout from "./layout.vue";
import "./firebase";

export default {
  extends: DefaultTheme,
  Layout,

  enhanceApp({ router }) {
    const zoom = mediumZoom(".main img", {
      background: "var(--vp-c-bg)",
    });

    router.onAfterRouteChange = () => {
      zoom.detach();
      zoom.attach(".main img");
    };
  },
} satisfies Theme;
