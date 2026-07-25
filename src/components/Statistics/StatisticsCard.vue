<script setup lang="ts">
interface StatisticItem {
  id: number
  icon: string 
  alt: string
  header: string
  description: string
}
interface StatisticsItems {
    item: StatisticItem
}
const props = defineProps<StatisticsItems>()
</script>
<template>
  <div>
    <slot :item="item"></slot>
  </div>
</template>
<style lang="scss" scoped>

</style>
