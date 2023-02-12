<template>
  <form class="form" @submit.prevent="onFormSubmit()">
    <div class="form__field field">
      <label for="title" class="field__label">Title</label>
      <input type="text" v-model.trim="form.title" id="title" class="field__input"/>
    </div>
    
    <div class="form__field field">
      <label for="Description" class="field__label">Description</label>
      <textarea 
        id="description" 
        v-model.trim="form.description" 
        class="field__input"
        rows="4" 
        cols="50"
      ></textarea>
    </div>
  
    <p class="form__text">Questions</p>

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

<style lang="sass" scoped>
@import "../assets/styles/__main.sass"
.form
  display: flex
  flex-direction: column
  padding: 20px

.form__field
  @include form-field-horizotal
  width: 80%

.field__input 
  @extend .form-input

.form__text
  text-align: center

</style>