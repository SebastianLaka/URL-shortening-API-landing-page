<script setup lang="ts">
interface LogoProps {
  src: string
  alt: string
}
const props = defineProps<LogoProps>()
</script>

<template>
  <img :src="src" :alt="alt" />
</template>