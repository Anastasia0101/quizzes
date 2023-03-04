<template>
  <label for="id">{{ labelText }}</label>
  <TextInput id="id" name="name" />
</template>

<script setup>
import TextInput from '../TextInput.vue';

defineProps({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  labelText: {
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
  },
  placeholder: {
    type: String,
    required: false
  }
});
</script>

<style></style>