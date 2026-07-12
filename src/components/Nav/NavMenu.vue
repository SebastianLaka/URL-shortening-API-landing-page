<script setup lang="ts">
import { RouterLink } from 'vue-router'
import NavButton from '@/components/ReuseableComponents/Button.vue'
interface NavMenuItems {
  id: number
  name: string
  button?: string
}

interface Navigation {
  isOpen: boolean
  isMobile: boolean
  navItems: NavMenuItems[]
  navButtons: NavMenuItems[]
}

const props = defineProps<Navigation>()
</script>
<template>
  <Transition mode="in-out">
    <div class="mobile-nav-menu" v-if="!isOpen && isMobile">
      <ul class="items-container">
        <li v-for="navItem in navItems" :key="navItem.id" class="items-container__item">
          <router-link to="/notfound" class="items-container__item--link">
            {{ navItem.name }}
          </router-link>
        </li>
      </ul>
      <div class="nav-line"></div>
      <ul class="buttons-container">
        <li v-for="navButton in navButtons" :key="navButton.id" class="buttons-container__item">
          <NavButton
            class="buttons-container__item--button"
            :class="`buttons-container__item--button-${navButton.button}`"
          >
            {{ navButton.name }}
          </NavButton>
        </li>
      </ul>
    </div>
  </Transition>
  <div class="desktop-nav-menu" v-if="!isMobile && isOpen">
    <ul class="items-container">
      <li v-for="navItem in navItems" :key="navItem.id" class="items-container__item">
        <router-link to="/notfound" class="items-container__item--link">
          {{ navItem.name }}
        </router-link>
      </li>
    </ul>
    <ul class="buttons-container">
      <li v-for="navButton in navButtons" :key="navButton.id" class="buttons-container__item">
        <NavButton
          class="buttons-container__item--button"
          :class="`buttons-container__item--button-${navButton.button}`"
        >
          {{ navButton.name }}
        </NavButton>
      </li>
    </ul>
  </div>
</template>
<style scoped lang="scss">
@use 'sass:map';
@use '../../assets/scss/colors.scss' as *;
@use '../../assets/scss/fonts.scss' as *;
@use '../../assets/scss/mixins.scss' as *;
@use '../../assets/scss/breakpoints.scss' as *;
.mobile-nav-menu {
  @include position-element($position: absolute, $top: 5.75em, $right: 0.5em, $left: 0.5em);
  @include flex-layout(
    $justify-content: space-between,
    $align-items: center,
    $flex-direction: column
  );
  text-align: center;
  padding: 2em 1.5em;
  background-color: $purple-950;
  border-radius: 0.8em;
  .items-container,
  .buttons-container {
    @include flex-layout($flex-direction: column);
    @include set-gap(1.5em, 0);
    width: 100%;
    &__item {
      font-weight: map.get($font-weights, 'bold');
      color: $white-0;
      font-size: $primary-size;
      &--link {
        color: $white-0;
        text-decoration: none;
      }
      &--button-login,
      &--button-sign-up {
        width: 100%;
        @include button-styles(
          $padding: 0.5em 0,
          $background-color: $blue-400,
          $color: $white-0,
          $border: none,
          $font-weight: map.get($font-weights, 'bold'),
          $border-radius: 1em
        );
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
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.desktop-nav-menu {
  @include grid-child(3, -1);
  @include flex-layout($justify-content: space-between, $align-items: center);
  width: 100%;
  padding-left: 1.75em;
  .items-container,
  .buttons-container {
    @include flex-layout($justify-content: center, $align-items: center);
    @include set-gap(0, 2em);
    &__item {
      color: $gray-900;
      font-size: $basic-size;
      padding: 0 .5em;
      &--link {
        color: $gray-500;
        font-weight: map.get($font-weights, 'bold');
        text-decoration: none;
        transition: color 0.3s ease-in;
        &:hover {
          color: $gray-900;
        }
      }
      &--button-login,
      &--button-sign-up {
        width: 100%;
        @include button-styles(
          $border: none,
          $border-radius: 1.5em,
          $background-color: $blue-400,
          $color: $white-0,
          $padding: 0.75em 2em,
          $font-weight: map.get($font-weights, 'bold'),
          $font-size: $basic-size
        );
      }
      &--button-login {
        background-color: $white-0;
        color: $gray-500;
        transition: color 0.3s ease-in;
        &:hover {
          color: $gray-900;
        }
      }
      &--button-sign-up {
        transition: background-color 0.3s ease-in;
        &:hover {
          background-color: $blue-hover;
        }
      }
    }
  }
}
@media (min-width: $desktop-small) {
  .desktop-nav-menu {
    @include grid-child(2, -1);
    grid-row: 1/1;
  }
}
@media (min-width: $desktop-wide) {
  .desktop-nav-menu {
    @include grid-child(3, 12);
  }
}
@media (min-width: $desktop-ultra-wide) {
  .desktop-nav-menu {
    @include grid-child(4, 11);
  }
}
</style>
