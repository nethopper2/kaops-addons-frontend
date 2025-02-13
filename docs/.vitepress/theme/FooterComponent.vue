
<script setup>
import { useData } from 'vitepress';

const { frontmatter } = useData();

const footer = frontmatter.value.footer;
</script>

<template>
  <footer class="py-8 px-6 text-center text-sm text-gray-500  dark:text-gray-400 z-10 border-t border-neutral-200 dark:border-neutral-700">
    <div class="container mx-auto">
      <p class="message">{{ footer.message }}</p>
      <p class="copyright">{{ footer.copyright }}</p>
    </div>
  </footer>
</template>


<style lang="scss"></style>

