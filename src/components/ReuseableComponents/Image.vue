<script setup lang="ts">
interface ImageProps {
  src: string
  alt?: string
}
const props = defineProps<ImageProps>()
</script>

<template>
  <img :src="src" :alt="alt"/>
</template>