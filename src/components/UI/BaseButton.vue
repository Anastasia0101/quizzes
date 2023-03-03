<template>
  <button :type="buttonType" class="button">
    <slot />
  </button>
</template>

<script setup>

defineProps({
  type: String
})

const buttonType = () => type ?? 'button';

</script>

<style lang="sass" scoped>
.button
  background: none
  color: inherit
  border: none
  padding: 0
  font: inherit
  cursor: pointer
  outline: inherit
</style>