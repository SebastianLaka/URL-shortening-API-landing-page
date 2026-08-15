<script setup lang="ts">
import Layout from './components/Layout/Layout.vue';
import { useURLStore } from './stores/urlGenerator.ts';
const store = useURLStore();

</script>

<template>

  <Layout />
</template>

<style lang="scss">
@use './assets/scss/reset.scss' as *;
</style>
