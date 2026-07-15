<script setup lang="ts">
import HeaderImage from '../ReuseableComponents/Image.vue'
import HeaderIllustration from '../../assets/images/illustration-working.svg'
import HeaderButton from '../ReuseableComponents/Button.vue'
</script>
<template>
  <section class="header-section">
    <HeaderImage
      :src="HeaderIllustration"
      alt="Image with worker sitting before computer"
      class="header-image"
    />
    <div class="header-content">
      <h1 class="header-content__header">More than just shorter links</h1>
      <p class="header-content__description">
        Build your brand’s recognition and get detailed insights on how your links are performing.
      </p>
      <HeaderButton class="header-content__cta">Get Started</HeaderButton>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@use 'sass:map';
@use '../../assets/scss/colors.scss' as *;
@use '../../assets/scss/fonts.scss' as *;
@use '../../assets/scss/mixins.scss' as *;
@use '../../assets/scss/breakpoints.scss' as *;
.header-section {
  @include flex-layout($flex-direction: column);
  @include set-gap(1em, 0);
  padding: 0 1em;
  overflow-x: hidden;
  .header-image {
    transform: translateX(15%);
  }
  .header-content {
    @include flex-layout($flex-direction: column, $justify-content: center, $align-items: center);
    @include set-gap(1em, 0);
    text-align: center;
    &__header {
      font-size: 2.5rem;
    }
    &__description {
      color: $gray-500;
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
      font-size: $primary-size;
      margin-top: 0.75em;
    }
  }
}

@media (min-width: $desktop-small) {
  .header-section {
    @include grid-layout($columns: 12);
    .header-image {
     @include grid-child(6, -1);
      grid-row: 1/1;
      transform: translateX(34%);
    }
    .header-content {
 
      @include grid-child(1, 6);
      text-align: left;
      @include flex-layout($justify-content: center, $align-items: flex-start);
      &__header {
        font-size: 3.5rem;
        width: 15ch;
      }
      &__description {
        font-size: $basic-size;
        width: 40ch;
      }
    }
  }
}
@media (min-width: $desktop-wide) {
  .header-section {
    padding: 0;
    .header-image {
      @include grid-child(6, -1);
      transform: translateX(20%);
    }
    .header-content {
      @include grid-child(2, 6);
    }
  }
}
@media (min-width: $desktop-ultra-wide) {
  .header-section {
    .header-image {
      @include grid-child(7, -1);
      transform: translateX(0);
    }
    .header-content {
      @include grid-child(3, 7);
    }
  }
}
</style>
