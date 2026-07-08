<script setup lang="ts">
interface NavMenuItems {
  id: number
  name: string
  button?: string
}

interface Navigation {
  isOpen: boolean
  navItems: NavMenuItems[]
  navButtons: NavMenuItems[]
}

const props = defineProps<Navigation>()
</script>
<template>
  <div class="mobile-nav-menu" v-if="isOpen">
    <ul class="nav-items-container">
      <li v-for="navItem in navItems" :key="navItem.id" class="nav-items-container__item">
        {{ navItem.name }}
      </li>
    </ul>
    <div class="nav-line"></div>
    <ul class="nav-buttons-container">
      <li v-for="navButton in navButtons" :key="navButton.id" class="nav-buttons-container__item">
        <button
          class="nav-buttons-container__item--button"
          :class="`nav-buttons-container__item--button-${navButton.button}`"
        >
          {{ navButton.name }}
        </button>
      </li>
    </ul>
  </div>

</template>
<style scoped lang="scss">
@use 'sass:map';
@use '../../assets/colors.scss' as *;
@use '../../assets/fonts.scss' as *;
.mobile-nav-menu {
  position: absolute;
  top: 5.75em;
  left: 0.5em;
  right: 0.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 2em 1.5em;
  background-color: $purple-950;
  border-radius: 0.8em;
  .nav-items-container,
  .nav-buttons-container {
    display: flex;
    flex-direction: column;
    gap: 1.5em 0;
    width: 100%;
    &__item {
      font-weight: map.get($font-weights, 'bold');
      color: $white-0;
      font-size: $primary-size;
      &--button-login,
      &--button-sign-up {
        width: 100%;
        padding: 0.5em 0;
        color: $white-0;
        font-weight: map.get($font-weights, 'bold');
        border: none;
        background-color: $blue-400;
        border-radius: 1em;
      }
      &--button-login {
        background-color: transparent;
      }
    }
  }
  .nav-line {
    width: 100%;
    height: 0.1em;
    margin: 2em 0;
    background-color: $gray-400;
  }
}
</style>
