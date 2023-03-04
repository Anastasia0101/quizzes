<template>
  <TextInput :id="nameForText" :name="nameForText" />
  <TextInput :id="nameForIsCorrect" :name="nameForIsCorrect" />
</template>

<script setup>
import TextInput from '../../TextInput.vue';

const props = defineProps({
  name: {
    type: String,
    required: true
  }
});

const nameForText = `${props.name}.text`;
const nameForIsCorrect = `${props.name}.isCorrect`;
</script>

<style scoped></style>