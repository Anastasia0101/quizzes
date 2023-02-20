<template>
  <base-button :type="buttonType" class="button">
    <slot />
  </base-button>
</template>

<script setup>
import BaseButton from '../UI/BaseButton/BaseButton.vue';

defineProps({
  buttonType: String
})

</script>

<style lang="sass" scoped>
@import ./primaryButton.sass
</style>