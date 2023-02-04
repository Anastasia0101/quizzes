<template>
  <p>Quiz form</p>
  <form class="form" @submit.prevent="onFormSubmit()">
    <label for="title">Quiz Title</label>
    <input type="text" v-model="form.title" id="title" />

    <label for="Description">Quiz Description</label>
    <input type="text" id="description" v-model="form.description" />

    <p>Questions</p>

    <div v-for="(question, index) in form.questions" :key="index">
      <QuestionForm :question="form.questions[index]"/>
    </div>

    <button type="button" @click="addQuestionForm">Add Question</button>
  
    <button type="submit">Create</button>
  </form>
</template>

<script setup>
import QuestionForm from './QuestionForm.vue';
import { reactive } from 'vue';

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

const onFormSubmit = () => console.log(form);

const addQuestionForm = () => form.questions = form.questions.concat([{options: []}]);
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 0 auto;
}

</style>