<script setup lang="ts">
interface FooterNavItem {
  id: number
  header: string
  items: string[]
}

interface FooterNavProps {
  navItem: FooterNavItem
}

defineProps<FooterNavProps>()
</script>

<template>
  <div>
    <slot :nav-item="navItem" />
  </div>
</template>
