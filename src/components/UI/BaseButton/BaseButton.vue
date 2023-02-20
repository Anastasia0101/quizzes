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
@import ./baseButton.sass

</style>