<script setup>
import { useData } from 'vitepress';
import { SunIcon, MoonIcon } from '@heroicons/vue/24/solid';
import {  onBeforeMount } from 'vue'
// import { nextTick } from 'vue'

const { frontmatter, isDark } = useData();

const logo = frontmatter.value.logo;
const addonName = frontmatter.value.addonName;
const imgHeight = `height: ${logo?.height}`
const toggleDarkMode = () => {
  isDark.value = !isDark.value;
};

onBeforeMount(async () => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (prefersDark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
})

</script>

<template>

  <header :class="isDark ? 'bg-neutral-800': 'bg-neutral-200'" class="fixed top-0 left-0 w-full  shadow-md z-50">
    <div class="m-5 flex flex-nowrap items-center ">
      <div class=" flex flex-nowrap items-center ">
        <img v-if="!isDark" :style="imgHeight" :src="logo?.light" alt="Light Logo">
        <img v-else :style="imgHeight" :src="logo?.dark" alt="Dark Logo">
        <span class="font-bold ml-2">{{ addonName }}</span>
      </div>
      <button @click="toggleDarkMode" class="ml-auto rounded flex items-center">
        <span v-if="isDark">
          <SunIcon class="h-5 w-5 mr-2" />
        </span>
        <span v-else>
          <MoonIcon class="h-5 w-5 mr-2" />
        </span>
      </button>      
    </div>
  </header>

</template>


<style lang="scss">

</style>