<template>
  <Input 
    :id="id"
    :type="type"
    :name="name"
    :placeholder="placeholder"
    :rows="rows"
    :cols="cols"
    class="input"
  >
    <slot />
  </Input>
</template>

<script setup>
import { h } from 'vue';

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'text'
  },
  name: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    default: 'Write here...'
  },
  rows: {
    type: Number,
    required: false
  },
  cols: {
    type: Number,
    required: false
  }
});

const Input = (props, context) => {
  const tag = props.rows ? 'textarea' : 'input';
  return h(tag, context.attrs, context.slots.default());
}
</script>

<style lang="sass" scoped>
@import ./input.sass
</style>