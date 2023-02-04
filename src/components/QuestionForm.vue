<template>
  <div>
    <label for="text">Question</label>
    <input type="text" v-model="question.text" id="text"/>

    <div v-for="(option, index) in question.options" :key="index" class="options">
      <OptionForm :option="question.options[index]"/>
      <button type="button" @click="addOptionForm">Add option</button>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import OptionForm from './OptionForm.vue';

const { question } = defineProps(['question']);

const addOptionForm = () => question.options = question.options.concat([{}]);
</script>

<style>

</style>