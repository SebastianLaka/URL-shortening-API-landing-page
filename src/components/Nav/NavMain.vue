<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

import LogoIcon from '../icons/logo.svg'
import Logo from '../ReuseableComponents/Logo.vue'
import NavIcon from './NavIcon.vue'
import NavMenu from './NavMenu.vue'
const logoData = {
  src: LogoIcon,
  alt: 'Shortly logo icon in nav',
}
const isToggle = ref(true)
const toggleIcon = () => {
  isToggle.value = !isToggle.value
}

const isMobile = ref(true)
console.log(isMobile)
const changeNavDisplay = () => {
  const width = window.innerWidth
  if (width < 992) {
    isMobile.value = true
  } else {
    isMobile.value = false
    isToggle.value = true
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
  <nav class="navigation">
    <div class="site-logo">
      <router-link to="/">
        <Logo :src="logoData.src" :alt="logoData.alt" />
      </router-link>
    </div>

    <button class="nav-menu-icon" @click="toggleIcon">
      <NavIcon :isOpen="isToggle" v-show="isMobile" />
    </button>
    <NavMenu
      :isOpen="isToggle"
      :isMobile="isMobile"
      :navItems="navItems"
      :navButtons="navButtons"
    />
  </nav>
</template>
<style lang="scss" scoped>
@use '../../assets/scss/breakpoints.scss' as *;
@use '../../assets/scss/mixins.scss' as *;
.navigation {
  @include flex-layout($justify-content: space-between, $align-items: center);
  @include position-element($position: relative);
  padding: 2em 1em;
  .nav-menu-icon {
    @include flex-layout($justify-content: center, $align-items: center);
    border: none;
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
      @include grid-child(2,2);
    }
  }
}
@media (min-width: $desktop-ultra-wide) {
  .navigation {
    .site-logo {
      @include grid-child(3,4);
    }
  }
}
</style>
