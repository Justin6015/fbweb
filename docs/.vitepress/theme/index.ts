import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import Layout from "./layout.vue";
import "./firebase";

export default {
  extends: DefaultTheme,
  Layout,
} satisfies Theme;
