<template>
  <form class="form" @submit.prevent="onFormSubmit()">
    <label for="title">Quiz Title</label>
    <input type="text" v-model.trim="form.title" id="title"/>

    <label for="Description">Quiz Description</label>
    <input type="text" id="description" v-model.trim="form.description"/>

    <p>Questions</p>

    <div v-for="(question, index) in form.questions" :key="index">
      <QuestionForm v-model:question="form.questions[index]"/>
      <button 
        type="button" 
        @click="deleteQuestion(index)" 
        :disabled="isDeleteBtnDisable"
      >Delete question</button>
    </div>

    <button 
      type="button" 
      @click="addQuestionForm" 
      :disabled="$v.questions.$invalid"
    >Add Question</button>

    <button type="submit" :disabled="$v.$invalid">Create</button>
  </form>
</template>

<script setup>
import { computed, reactive } from 'vue';
import router from "@/router";
import useValidate from '@vuelidate/core';
import {required} from 'vuelidate/lib/validators';
import QuestionForm from './QuestionForm.vue';

const form = reactive({
  title: '',
  description: '',
  questions: [
    {
      text: '',
      options: [
        {
          text: '',
          isCorrect: ''
        }
      ]
    }
  ]
});

const rules = {
  title: {
    required
  },
  description: {
    required
  },
  questions: [
    {
      text: {required},
      options: [
        {
          text: {required},
          isCorrect: {required}
        }
      ]
    }
  ]
}

const $v = useValidate(rules, form);

const onFormSubmit = () => {
  fetch('/api/quizzes', {
    method: 'POST',
    body: JSON.stringify({
      title: form.title,
      description: form.description,
      questions: form.questions
    })
  });
  router.push('quizzes');
}

const addQuestionForm = () => {
  form.questions = form.questions.concat([{options: [{}]}]);
}

const deleteQuestion = (questionIndex) => {
  form.questions = form.questions.filter((item, index) => index != questionIndex);
}

const isDeleteBtnDisable = computed(() => {
  return form.questions.length == 1 ? true : false;
});
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  padding: 20px;;
}
</style>