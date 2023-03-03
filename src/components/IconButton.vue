<template>
  <base-button>
    <slot />
  </base-button>
</template>

<script setup>
import BaseButton from './UI/BaseButton.vue';
</script>

<style lang="sass" scoped>
.button-svg
  fill: #FFFFFF
  &*:hover::active
    cursor: pointer

</style>