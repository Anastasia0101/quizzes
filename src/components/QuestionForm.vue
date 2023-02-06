<template>
  <div>
    <label for="text">Question</label>
    <input type="text" v-model.trim="question.text" id="text"/>

    <div v-for="(option, index) in question.options" :key="index" class="options">
      <OptionForm :option="option"/>
    </div>

    <button type="button" @click="addOptionForm" :disabled="isOptionsInvalid">Add option</button>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import OptionForm from './OptionForm.vue';

const { question, isOptionsInvalid } = defineProps(['question', 'isOptionsInvalid']);

const addOptionForm = () => question.options = question.options.concat([{}]);
</script>

<style>

</style>