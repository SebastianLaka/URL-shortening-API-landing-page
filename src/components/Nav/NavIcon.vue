<script setup lang="ts">
interface Icon {
    isOpen: boolean,
}
const props = defineProps<Icon>();

</script>
<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21" v-if="isOpen">
    <g fill="hsl(255, 11%, 22%)" fill-rule="evenodd">
      <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
    </g>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="hsl(255, 11%, 22%)"
    stroke-width="3"
    stroke-linecap="round"
    stroke-linejoin="round"
    v-else
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
</template>
<style scoped lang="scss"></style>
