<script setup lang="ts">
interface LogoProps {
  src: string
  alt?: string
}
const props = withDefaults(defineProps<LogoProps>(), {
  alt: 'Company Logo',
})
</script>

<template>
  <img :src="src" :alt="alt" />
</template>
<style scoped lang="scss"></style>
