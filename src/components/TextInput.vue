<template>
  <Input 
    @input="handleChange" 
    :id="id" 
    :name="name" 
    :value="inputValue"
    :rows="rows"
    :cols="cols"
    class="input"
  />
</template>

<script setup>
import { toRef } from 'vue';
import { useField } from 'vee-validate';
import Input from './UI/Input.vue';

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
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

const name = toRef(props, 'name');

const { value: inputValue, handleChange } = useField(name, undefined);
</script>

<style lang="sass" scoped>
.input
  width: 60%
  border: 1px solid rgb(222, 222, 222)
  border-radius: 3px
  padding: 0.6em

  &:focus
    outline: 2px solid rgba(162, 47, 244, 1)
</style>