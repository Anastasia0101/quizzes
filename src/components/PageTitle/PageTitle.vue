<template>
  <Text :level="level" class="title">{{ title }}</Text>
</template>

<script setup>
import Text from '../UI/Text/Text.vue';

defineProps({
  title: {
    type: String,
    required: true
  },
  level: {
    type: Number,
    required: false
  }
});
</script>

<style lang="sass" scoped>
@import ./pageTitle.sass
</style>