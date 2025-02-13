<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'

const { page, frontmatter } = useData()
const { Layout } = DefaultTheme

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