<template>
  <p>Quiz form</p>
  <form class="form" @submit.prevent="onFormSubmit()">
    <label for="title">Quiz Title</label>
    <input type="text" v-model.trim="form.title" id="title"/>

    <label for="Description">Quiz Description</label>
    <input type="text" id="description" v-model.trim="form.description"/>

    <p>Questions</p>

    <div v-for="(question, index) in form.questions" :key="index">
      <QuestionForm :question="question" :isOptionsInvalid="$v.questions.$invalid"/>
    </div>

    <button type="button" @click="addQuestionForm" :disabled="$v.questions.$invalid">Add Question</button>

    <button type="submit" :disabled="$v.$invalid">Create</button>
  </form>
</template>

<script setup>
import { reactive } from 'vue';
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

const onFormSubmit = () => console.log(form);

const addQuestionForm = () => {
  form.questions = form.questions.concat([{options: [{}]}]);
  console.log(form.questions)
}

</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 0 auto;
}
</style>