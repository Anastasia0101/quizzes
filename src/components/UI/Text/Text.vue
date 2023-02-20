<template>
  <Text :level="level" class="text">
    <slot />
  </Text>
</template>

<script setup>
import { h } from 'vue';

defineProps({
  level: {
    type: Number,
    required: false
  }
})

const Text = (props, context) => {
  const tag = props.level ? 'h' + props.level : 'p';
  return h(tag, context.attrs, context.slots.default());
}
</script>

<style lang="sass" scoped>
@import ./text.sass
</style>