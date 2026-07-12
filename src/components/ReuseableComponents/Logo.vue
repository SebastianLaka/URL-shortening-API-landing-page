<script setup lang="ts">
interface LogoProps {
  src: string
  alt: string
}
const props = defineProps<LogoProps>()
</script>

<template>
  <img :src="src" :alt="alt" class="logo"/>
</template>
<style scoped lang="scss">
.logo{
  width: 7.5625em;
  height: 2.0625em;
  cursor: pointer;
}
</style>