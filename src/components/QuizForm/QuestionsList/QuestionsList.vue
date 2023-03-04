<template>
  <ul :name="name">
    <li v-for="field in fields" :key="field.key">
      <QuestionsListItem 
        :name="`${name}[${field.key}]`" 
        @deleteBtnClicked="deleteQuestion(field.key)"
      />
    </li>
  </ul>
  <button type="button" @click="addQuestionForm">
    Add Question
  </button>
</template>

<script setup>
import QuestionsListItem from './QuestionsListItem.vue';
import { useFieldArray } from 'vee-validate';

const props = defineProps({
  name: {
    type: String,
    required: true
  }
});

const { fields, push, remove } = useFieldArray(props.name);

const addQuestionForm = () => push({ text: '', options: [{ text: '', isCorrect: ''}] });

const deleteQuestion = (index) => remove(index);
</script>

<style></style>