<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
const Loader = defineAsyncComponent(async () => {
  await new Promise((resolve) => setTimeout(resolve, 200))
  return import('@/components/Loader/Loader.vue')
})
const Header = defineAsyncComponent({
  loader: async () => {
    await new Promise((resolve) => setTimeout(resolve, 200))
    return import('@/components/Header/HeaderMain.vue')
  },
  loadingComponent: Loader,
  delay: 100,
})

const Shorten = defineAsyncComponent({
  loader: async () => {
    await new Promise((resolve) => setTimeout(resolve, 200))
    return import('@/components/Shorten/ShortenMain.vue')
  },
  loadingComponent: Loader,
  delay: 100,
})

const Statistics = defineAsyncComponent({
  loader: async () => {
    await new Promise((resolve) => setTimeout(resolve, 200))
    return import('@/components/Statistics/StatisticsMain.vue')
  },
  loadingComponent: Loader,
  delay: 100,
})

const Banner = defineAsyncComponent({
  loader: async () => {
    await new Promise((resolve) => setTimeout(resolve, 200))
    return import('@/components/StartedBanner/BannerMain.vue')
  },
  loadingComponent: Loader,
  delay: 100,
})
</script>
<template>
  <Suspense>
    <template #default>
      <div class="site-body">
        <Header />
        <Shorten />
        <Statistics />
        <Banner />
      </div>
    </template>
    <template #fallback>
      <Loader />
    </template>
  </Suspense>
</template>
<style lang="scss" scoped>
@use '../assets/scss/colors.scss' as *;
@use '../assets/scss/mixins.scss' as *;
@use '../assets//scss/colors.scss' as *;
.site-body {
  @include flex-layout($flex-direction: column);
  @include set-gap(6em, 0);
}
</style>
