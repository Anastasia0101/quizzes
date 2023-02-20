<template>
  <base-button>
    <slot />
  </base-button>
</template>

<script setup>
import DeleteIcon from '../../assets/buttons-svg/trash-box.svg';
import BaseButton from '../UI/BaseButton/BaseButton.vue';
</script>

<style lang="sass" scoped>
@import ./iconButton.sass
</style>