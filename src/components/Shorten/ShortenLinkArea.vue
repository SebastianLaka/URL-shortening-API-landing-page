<script setup lang="ts">
import { ref } from 'vue'
import CopyButton from '@/components/ReuseableComponents/Button.vue'
import { useURLStore } from '@/stores/urlGenerator'
const urlStore = useURLStore()
const copiedId = ref<string | null>(null)
const copyToClipboard = async (link: string, id: string) => {
  try {
    await navigator.clipboard.writeText(link)
    copiedId.value = id

    setTimeout(() => {
      copiedId.value = null
    }, 2000)
  } catch (err) {
    console.error('Failed to copy', err)
  }
}
</script>
<template>
  <div v-if="urlStore.hasLinks" class="shorten-results">
    <div v-for="item in urlStore.links" :key="item.id" class="links-container">
      <p class="links-container__url">{{ item.originalUrl }}</p>

      <div class="copy-section">
        <p class="copy-section__link">{{ item.shortUrl }}</p>
        <CopyButton
          class="copy-section__cta"
          :class="{ 'copied-btn': copiedId === item.id }"
          @click="copyToClipboard(item.shortUrl, item.id)"
        >
          {{ copiedId === item.id ? 'Copied!' : 'Copy' }}
        </CopyButton>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use 'sass:map';
@use '../../assets/scss/colors.scss' as *;
@use '../../assets/scss/fonts.scss' as *;
@use '../../assets/scss/mixins.scss' as *;
@use '../../assets/scss/breakpoints.scss' as *;

.shorten-results {
  @include flex-layout($flex-direction: column);
  @include set-gap(3em, 0);
  margin-top: 3em;
  .links-container {
    @include flex-layout($flex-direction: column);
    @include set-gap(1.75em, 0);
    &__url {
      color: $gray-950;
      font-size: $basic-size;
    }
    .copy-section {
      @include flex-layout($flex-direction: column);
      @include set-gap(1em, 0);
      &__link {
        color: $blue-400;
        font-size: $basic-size;
      }
      &__cta {
        background-color: $blue-400;
        border: none;
        border-radius: 0.4em;
        padding: 0.5em 1em;
        color: $white-0;
        font-size: $basic-size;
        font-weight: map.get($font-weights, 'bold');
        transition: background-color .3s ease-in-out;
        &:hover {
          background-color: $blue-hover;
        }
      }
      .copied-btn {
        background-color: $purple-950;
      }
    }
  }
}

@media (min-width: $desktop-small) {
  .shorten-results {
    @include grid-child(1, 13);
    .links-container {
      flex-direction: row;
      justify-content: space-between;
      .copy-section {
        flex-direction: row;
        align-items: center;
        text-align: left;
        @include set-gap(0, 1.5em);
        &__cta {
          padding: 0.5em 2em;
          width: 9.0625em;
        }
      }
    }
  }
}

@media (min-width: $desktop-wide) {
  .shorten-results {
    padding: 0;
    @include grid-child(2, 12);
  }
}
@media (min-width: $desktop-ultra-wide) {
  .shorten-results {
    @include grid-child(3, 11);
  }
}
</style>
