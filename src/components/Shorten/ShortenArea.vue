<script setup lang="ts">
import ShortenButton from '@/components/ReuseableComponents/Button.vue'
interface inputProps {
  id: string
  placeholder: string
  url: string
  name: string
}
const props = defineProps<inputProps>()
const modelValue = defineModel<string>({ default: '' })
const isError = defineModel<boolean>('error', { default: false })
</script>
<template>
  <form class="shorten-form" @submit.prevent>
    <div class="form-parts">
      <input
        v-model="modelValue"
        :type="url"
        :name="url"
        :id="name"
        :placeholder="placeholder"
        pattern="https://.*"
        class="form-parts__input"
        :class="{ 'field-error': modelValue }"
      />
      <p class="form-parts__error-message" :class="{ 'show-error-message': isError }">
        Please add a link
      </p>
    </div>
    <ShortenButton class="shorten-form__cta" type="submit">Shorten It!</ShortenButton>
  </form>
</template>
<style lang="scss" scoped>
@use 'sass:map';
@use '../../assets/scss/colors.scss' as *;
@use '../../assets/scss/fonts.scss' as *;
@use '../../assets/scss/mixins.scss' as *;
@use '../../assets/scss/breakpoints.scss' as *;
.shorten-form {
  @include flex-layout($flex-direction: column, $justify-content: space-between);
  @include set-gap(1em, 0);
  .form-parts {
    &__input {
      padding: 0.75em;
      font-size: $primary-size;
      border-radius: 0.4em;
      border: none;
      width: 100%;
      &.field-error {
        border: 0.2em solid $red-400;
      }
    }
    &__error-message {
      display: none;

      &.show-error-message {
        display: block;
        color: $red-400;
        font-style: italic;
        font-size: 0.875rem;
      }
    }
  }

  &__cta {
    @include button-styles(
      $padding: 0.5em 2em,
      $background-color: $blue-400,
      $color: $white-0,
      $border: none,
      $font-weight: map.get($font-weights, 'bold'),
      $border-radius: 0.4em
    );
  }
}
@media (min-width: $desktop-small) {
  .shorten-form {
    @include grid-child(1, 10);
    flex-direction: row;
    @include set-gap(0, 1em);
    width: 100%;
    .form-parts {
      flex: 1;
      &__input {
        font-size: 1.125rem;
        padding: 0.75em 1.5em;
        align-self: flex-start;
        &::placeholder {
          font-size: $basic-size;
        }
      }
    }
    &__cta {
      font-size: $basic-size;
      height: 3em;
    }
  }
}
@media (min-width: $desktop-wide) {
  .shorten-form {
    @include grid-child(2, 9);
  }
}
@media (min-width: $desktop-ultra-wide) {
  .shorten-form {
    @include grid-child(3, 8);
  }
}
</style>
