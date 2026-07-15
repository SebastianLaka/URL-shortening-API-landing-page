<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import ShortenArea from './ShortenArea.vue'
import ShortenImage from '@/components/ReuseableComponents/Image.vue'
import BgShortenMobie from '../../assets/images/bg-shorten-mobile.svg'
import BgShortenDesktop from '../../assets/images/bg-shorten-desktop.svg'
const bgImage = ref(BgShortenMobie)
const changeBackgroundImage = () => {
  const currentWidth = window.innerWidth
  if (currentWidth < 992) {
    bgImage.value = BgShortenMobie
  } else {
    bgImage.value = BgShortenDesktop
  }
}
onMounted(() => {
  changeBackgroundImage()
  window.addEventListener('resize', changeBackgroundImage)
})
onUnmounted(() => {
  window.removeEventListener('resize', changeBackgroundImage)
})

const formData = reactive({
  id: 'form-input',
  placeholder: 'Shorten a link here...',
  url: 'url',
  name: 'url',
  
})

</script>
<template>
  <section class="shorten-container">
    <div class="shorten-main">
      <ShortenImage
        :src="bgImage"
        alt="Image in shprten validation background "
        class="shorten-main__background"
      />
      <ShortenArea :id="formData.id" :placeholder="formData.placeholder" :url="formData.url" :name="formData.name" />
    </div>
  </section>
</template>
<style lang="scss" scoped>
@use 'sass:map';
@use '../../assets/scss/colors.scss' as *;
@use '../../assets/scss/fonts.scss' as *;
@use '../../assets/scss/mixins.scss' as *;
@use '../../assets/scss/breakpoints.scss' as *;
.shorten-container {
  padding: 0 1em;
  .shorten-main {
    @include flex-layout($flex-direction: column);
    @include set-gap(1em, 0);
    padding: 2em 1em;
    @include position-element($position: relative, $z-index: 10);
    background-color: $purple-950;
    border-radius: 0.5em;
    overflow-x: hidden;
    &__background {
      @include position-element(
        $position: absolute,
        $top: 0,
        $right: 0,
        $bottom: 0,
        $left: 12.5em,
        $z-index: -1
      );
      height: 80%;
      border-top-right-radius: 0.4em;
    }
   
  }
}

@media (min-width: $desktop-small) {
  .shorten-container {
    @include grid-layout($columns: 12);
    .shorten-main {
      @include flex-layout($flex-direction: row, $justify-content: space-between);
      @include grid-child(1, -1);
      padding: 3em;
      &__background {
        left: 0;
        height: 100%;
        object-fit: cover;
        object-position: right top;
        width: 100%;
      }
    }
  }
}
@media (min-width: $desktop-wide) {
  .shorten-container {
    padding: 0;
    .shorten-main {
      padding: 3em;
      @include grid-child(2, 12);
    }
  }
}
@media (min-width: $desktop-ultra-wide) {
  .shorten-container {
    .shorten-main {
      @include grid-child(3, 11);
    }
  }
}
</style>
