<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navigation from '@/components/Nav/NavMain.vue'
</script>
<template>
  <main class="main">
    <Navigation />
    <RouterView />
  </main>
</template>
