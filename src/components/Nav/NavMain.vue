<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import LogoIcon from '../icons/logo.svg'
import Logo from '../ReuseableComponents/Logo.vue'
import NavIcon from './NavIcon.vue'
import NavMenu from './NavMenu.vue'

defineProps<{
  isScrolled?: boolean
}>()

const logoData = {
  src: LogoIcon,
  alt: 'Shortly logo icon in nav',
}
const isMenuOpen = ref(false)
const toggleIcon = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const isMobile = ref(true)
const changeNavDisplay = () => {
  const width = window.innerWidth
  if (width < 992) {
    isMobile.value = true
    isMenuOpen.value = true
  } else {
    isMobile.value = false
    isMenuOpen.value = false
  }
}

onMounted(() => {
  changeNavDisplay()
  window.addEventListener('resize', changeNavDisplay)
})
onUnmounted(() => {
  window.removeEventListener('resize', changeNavDisplay)
})
const navItems = ref([
  { id: 1, name: 'Features' },
  { id: 2, name: 'Pricing' },
  { id: 3, name: 'Resources' },
])
const navButtons = ref([
  { id: 4, name: 'Login', button: 'login' },
  { id: 5, name: 'Sign Up', button: 'sign-up' },
])
</script>

<template>
  <nav class="navigation" :class="{ 'navigation--scrolled': isScrolled }">
    <div class="site-logo">
      <router-link to="/">
        <Logo :src="logoData.src" :alt="logoData.alt" />
      </router-link>
    </div>

    <button class="nav-menu-icon" @click="toggleIcon">
      <NavIcon :isOpen="isMenuOpen" v-show="isMobile" />
    </button>
    <NavMenu
      :isOpen="!isMenuOpen"
      :isMobile="isMobile"
      :navItems="navItems"
      :navButtons="navButtons"
    />
  </nav>
</template>
<style lang="scss" scoped>
@use '../../assets/scss/breakpoints.scss' as *;
@use '../../assets/scss/mixins.scss' as *;
@use '../../assets//scss/colors.scss' as *;
.navigation {
  @include flex-layout($justify-content: space-between, $align-items: center);
  @include position-element($position: fixed, $z-index: 100);
  width: 100%;
  padding: 2em 1em;
  .nav-menu-icon {
    @include flex-layout($justify-content: center, $align-items: center);
    border: none;
    background-color: transparent;
  }
  &--scrolled {
    background-color: $white-0;
    transition: background-color 0.3s ease-in-out;
  }
}
@media (min-width: $desktop-small) {
  .navigation {
    @include grid-layout($columns: 12);
    padding: 2em 1em;
  }
}
@media (min-width: $desktop-wide) {
  .navigation {
    padding: 2em 0;
    .site-logo {
      @include grid-child(2, 2);
    }
  }
}
@media (min-width: $desktop-ultra-wide) {
  .navigation {
    .site-logo {
      @include grid-child(3, 4);
    }
  }
}
</style>
