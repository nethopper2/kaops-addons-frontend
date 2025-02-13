<script setup>
import { useData } from 'vitepress';
import { SunIcon, MoonIcon } from '@heroicons/vue/24/solid';

const { frontmatter, isDark } = useData();

const logo = frontmatter.value.logo;
const addonName = frontmatter.value.addonName;
const imgHeight = `height: ${logo?.height}`
const toggleDarkMode = () => {
  isDark.value = !isDark.value;
};

</script>

<template>

  <header :class="isDark ? 'bg-neutral-800': 'bg-neutral-200'" class="fixed top-0 left-0 w-full  shadow-md z-50">
    <div class="m-5 flex flex-nowrap items-center ">
      <div class=" flex flex-nowrap items-center ">
        <img v-if="!isDark" :style="imgHeight" :src="logo?.light" alt="Light Logo">
        <img v-else :style="imgHeight" :src="logo?.dark" alt="Dark Logo">
        <span class="font-bold ml-2">{{ addonName }}</span>
      </div>
      <button @click="toggleDarkMode" class="ml-auto text-sm p-2 bg-blue-500 dark:bg-blue-700 text-white rounded flex items-center">
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