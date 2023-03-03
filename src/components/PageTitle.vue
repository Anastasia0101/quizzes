<template>
  <Text :level="level" class="title">{{ title }}</Text>
</template>

<script setup>
import Text from './UI/Text.vue';

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
.title
  text-align: center
  margin: 1em 0
</style>