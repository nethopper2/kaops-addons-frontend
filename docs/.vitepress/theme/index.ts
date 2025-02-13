// https://vitepress.dev/guide/custom-theme
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import Addon from './Addon.vue';
import HeaderComponent from './HeaderComponent.vue';
import FooterComponent from './FooterComponent.vue';
import "./style.css";

export default {
  extends: DefaultTheme,
  Layout: Addon,
  enhanceApp({ app, router, siteData }) {
    app.component('HeaderComponent', HeaderComponent);
    app.component('FooterComponent', FooterComponent);
  },
} satisfies Theme;