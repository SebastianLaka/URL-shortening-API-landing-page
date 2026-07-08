<script setup lang="ts">
import { ref } from 'vue'
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
    <Logo :src="logoData.src" :alt="logoData.alt" />
    <button class="nav-menu-icon" @click="toggleIcon">
      <NavIcon :isOpen="isToggle" />
    </button>
    <NavMenu :isOpen="isToggle" :navItems="navItems" :navButtons="navButtons"/>
  </nav>
</template>
<style lang="scss" scoped>
.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 2em 1em;
  .nav-menu-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
  }
}
</style>
