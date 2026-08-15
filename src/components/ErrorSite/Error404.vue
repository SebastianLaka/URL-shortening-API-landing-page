<template>
  <div class="not-found-site">
    <h1>Error 404</h1>
    <p>Page could not be found</p>
  </div>
</template>

<style lang="scss" scoped>
@use 'sass:map';
@use '../../assets/scss/colors.scss' as *;
@use '../../assets/scss/fonts.scss' as *;
@use '../../assets/scss//mixins.scss' as *;
.not-found-site {
  @include flex-layout($flex-direction: column, $justify-content: center, $align-items: center);
  @include set-gap(1em, 0);
  margin-bottom: 6em;
}
</style>