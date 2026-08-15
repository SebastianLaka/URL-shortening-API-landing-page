<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import Navigation from '@/components/Nav/NavMain.vue'
import Header from '@/components/Header/HeaderMain.vue'
import Shorten from '@/components/Shorten/ShortenMain.vue'
import Statistics from '@/components/Statistics/StatisticsMain.vue'
import StartedBanner from '@/components/StartedBanner/BannerMain.vue'
import Footer from '../Footer/FooterMain.vue'
import { useIntersectionEntry } from '@/composables/useIntersectionObserver.ts'
const heroWrapper = ref<HTMLElement | null>(null)
const { isIntersecting } = useIntersectionEntry(heroWrapper)
</script>
<template>
  <Navigation :is-scrolled="!isIntersecting" />
  <main class="main">
    <div class="top-margin" ref="heroWrapper"></div>
    <div>
      <Header />
    </div>

    <Shorten />
    <Statistics />
    <StartedBanner />
    <div class="footer-group">
      <Footer />
    </div>
  </main>
</template>
<style lang="scss" scoped>
@use '../../assets/scss/breakpoints.scss' as *;
@use '../../assets/scss/mixins.scss' as *;
@use '../../assets//scss/colors.scss' as *;
.main {
  @include flex-layout($flex-direction: column);
  @include set-gap(4em, 0);
  @include position-element($position: relative);
}
.top-margin {
  height: 8svh;
}
@media (min-width: 992px) {
  .main {
    @include set-gap(6em, 0);
  }
}
</style>
