<script setup lang="ts">
import BoostBannerMobile from '@/assets/images/bg-boost-mobile.svg'
import BoostBannerDesktop from '@/assets/images/bg-boost-desktop.svg'
import BannerCta from '@/components/ReuseableComponents/Button.vue'
import BannerImage from '@/components/ReuseableComponents/Image.vue'
import { useResponsiveImage } from '@/composables/useResponsiveImage'
const { currentImage: boostBgImg } = useResponsiveImage(BoostBannerMobile, BoostBannerDesktop)
</script>

<template>
  <section class="started-banner">
    <BannerImage :src="boostBgImg" class="started-banner__background" />
    <h1 class="started-banner__boost-header">Boost your links today</h1>
    <BannerCta class="started-banner__cta">Get Started</BannerCta>
  </section>
</template>
<style scoped lang="scss">
@use 'sass:map';
@use '../../assets/scss/colors.scss' as *;
@use '../../assets/scss/fonts.scss' as *;
@use '../../assets/scss/mixins.scss' as *;
@use '../../assets/scss/breakpoints.scss' as *;

.started-banner {
  @include flex-layout($flex-direction: column, $justify-content: center, $align-items: center);
  @include set-gap(0.5em, 0);
  @include position-element($position: relative, $z-index: 10);
  background-color: $purple-950;
  padding: 5em;
  overflow: hidden;

  &__background {
    @include position-element(
      $position: absolute,
      $top: 0,
      $right: 0,
      $bottom: 0,
      $left: 0,
      $z-index: -1
    );
    height: 100%;
    object-fit: cover;
    object-position: center center;
    width: 100%;
  }
  &__boost-header {
    color: $white-0;
    text-align: center;
  }
  &__cta {
    @include button-styles(
      $padding: 0.5em 1.75em,
      $background-color: $blue-400,
      $color: $white-0,
      $border: none,
      $font-weight: map.get($font-weights, 'bold'),
      $border-radius: 1.4em
    );
    transition: background-color 0.3s ease-in-out;
    font-size: $primary-size;
    margin-top: 0.75em;
    &:hover {
      background-color: $blue-hover;
    }
  }
}
@media (min-width: $desktop-small) {
  .started-banner {
    &__cta {
      font-size: $basic-size;
    }
  }
}
</style>
