<template>
    <p class="loader">Loading...</p>
</template>
<style lang="scss" scoped>
@use 'sass:map';
@use '../../assets/scss/colors.scss' as *;
@use '../../assets/scss/mixins.scss' as *;
.loader{
    @include flex-layout($justify-content: center);
    color: $gray-500;
}
</style>