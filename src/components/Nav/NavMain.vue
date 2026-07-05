<script setup lang="ts">
import LogoIcon from '../icons/logo.svg'
import Logo from '../ReuseableComponents/logo.vue'
const logoData = {
  src: LogoIcon,
  alt: 'Shortly logo icon in nav',
}
</script>

<template>
  <Logo :src="logoData.src" :alt="logoData.alt" />
  <nav class="nav-mobile"></nav>
</template>