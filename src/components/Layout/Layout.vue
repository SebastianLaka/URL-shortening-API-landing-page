<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navigation from '@/components/Nav/NavMain.vue'
import Shorten from '@/components/Shorten/ShortenMain.vue'
import Statistics from '@/components/Statistics/StatisticsMain.vue'
</script>
<template>
  <main class="main">
    <Navigation />
    <RouterView />
    <Shorten />
    <Statistics />
  </main>
</template>
<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  gap: 4em 0;
}
@media (min-width: 992px) {
  .main {
    gap: 6em 0;
  }
}
</style>
