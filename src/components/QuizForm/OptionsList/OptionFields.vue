<template>
  <TextInput :id="nameText" :name="nameText" />
  <TextInput :id="nameIsCorrect" :name="nameIsCorrect" />
</template>

<script setup>
import TextInput from '../../TextInput.vue';

const props = defineProps({
  name: {
    type: String,
    required: true
  }
});

const nameText = `${props.name}.text`;
const nameIsCorrect = `${props.name}.isCorrect`;
</script>

<style scoped>

</style>