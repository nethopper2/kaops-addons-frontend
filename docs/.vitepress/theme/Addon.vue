<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData, useRouter } from 'vitepress'
import {  watch, onMounted } from 'vue'

const { frontmatter } = useData()
const { Layout } = DefaultTheme

const router = useRouter()

onMounted(() => {
  watch(
    () => router.route.path,
    (newPath) => {
      const homeHeroNameColor = frontmatter.value.homeHeroNameColor
      if (homeHeroNameColor) {
        document.body.style.setProperty('--vp-home-hero-name-color', homeHeroNameColor);
      }      
    },
    { immediate: true }
  )
})

</script>

<template>
  <Layout>
    <template #layout-top>
      <header-component />
    </template>
    <template #layout-bottom>
      <footer-component />
    </template>
  </Layout>
</template>

