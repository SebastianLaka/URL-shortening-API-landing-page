<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navigation from '@/components/Nav/NavMain.vue'
import Shorten from '@/components/Shorten/ShortenMain.vue';
</script>
<template>
  <main class="main">
    <Navigation />
    <RouterView />
    <Shorten />
  </main>
</template>
