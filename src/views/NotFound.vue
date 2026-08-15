<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import Loader from '@/components/Loader/Loader.vue'

const ErrorSite = defineAsyncComponent(async () => { 
  await new Promise((resolve) => setTimeout(resolve, 200))
  return import('@/components/ErrorSite/Error404.vue')
})
</script>

<template>
  <Suspense>
    <template #default>
      <ErrorSite />
    </template>
    <template #fallback>
      <Loader />
    </template>
  </Suspense>
</template>


