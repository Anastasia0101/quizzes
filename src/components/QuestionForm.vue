<template>
  <div>
    <label for="text">Question</label>
    <input type="text" v-model.trim="question.text" id="text"/>

    <div v-for="(option, index) in question.options" :key="index" class="options">
      <OptionForm :option="option"/>
      <button type="button" @click="deleteOption(index)" :disabled="isDeleteBtnDisable">Delete option</button>
    </div>

    <button type="button" @click="addOptionForm">Add option</button>
  </div>
</template>

<script setup>
import { computed, defineProps } from 'vue';
import OptionForm from './OptionForm.vue';

const { question } = defineProps(['question']);

const addOptionForm = () => question.options = question.options.concat([{}]);

const deleteOption = (optionIndex) => {
  question.options = question.options.filter((item, index) => index != optionIndex);
}

const isDeleteBtnDisable = computed(() => {
  return question.options.length == 1 ? true : false;
});
</script>

<style>

</style>