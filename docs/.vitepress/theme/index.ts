// https://vitepress.dev/guide/custom-theme
import { useData, type Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import Addon from './Addon.vue';
import HeaderComponent from './HeaderComponent.vue';
import FooterComponent from './FooterComponent.vue';
import "./style.css";
import { watch } from "vue";

export default {
  extends: DefaultTheme,
  Layout: Addon,
  enhanceApp({ app, router, siteData }) {
    app.component('HeaderComponent', HeaderComponent);
    app.component('FooterComponent', FooterComponent);
    // const { frontmatter } = useData();
    // watch(
    //   () => frontmatter.value,
    //   (newFrontmatter) => {
    //     const customClass = newFrontmatter.customClass;
    //     console.log('customClass:', customClass);
    //     if (customClass) {
    //       document.body.classList.add(customClass);
    //     } else {
    //       document.body.className = ''; // Reset to default class
    //     }
    //   },
    //   { immediate: true }
    // );    
    // router.onAfterRouteChange = () => {
    //   const customClass = frontmatter?.value?.customClass;
    //   console.log('customClass:', customClass);
    // //   if (customClass) {
    // //     document.body.classList.add(customClass)
    // //   } else {
    // //     document.body.classList.remove(customClass)
    // //   }
    // }    
  }
} satisfies Theme;