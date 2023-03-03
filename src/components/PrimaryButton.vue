<template>
  <base-button :type="buttonType" class="button">
    <slot />
  </base-button>
</template>

<script setup>
import BaseButton from './UI/BaseButton.vue';

defineProps({
  buttonType: String
})

</script>

<style lang="sass" scoped>
.button
  padding: 5px 10px
  background-color: #FFFFFF
  border-radius: 5px

</style>