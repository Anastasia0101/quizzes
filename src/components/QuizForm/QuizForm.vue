<template>
  <form @submit.prevent="onFormSubmit" class="form">
    <div class="form__field field">
      <QuizFormInputField id="title" name="title" labelText="Title" />
    </div>
    
    <div class="form__field field">
      <QuizFormInputField 
        id="description" 
        name="description" 
        :rows="4" 
        :cols="50"
        labelText="Description"
      />
    </div>
  
    <PageTitle :level="2" :title="'Questions'" />

    <QuestionsList name="questions" />

    <primary-button :button-type="'submit'" :disabled="!form.meta.valid">
      Create
    </primary-button>
  </form>
</template>

<script setup>
import router from "@/router";
import { reactive } from 'vue';
import { useForm } from 'vee-validate';
import * as yup from 'yup';

import PrimaryButton from '../PrimaryButton.vue';
import PageTitle from '../PageTitle.vue';
import QuizFormInputField from "./QuizFormInputField.vue";
import QuestionsList from './QuestionsList/QuestionsList.vue';

const schema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  questions: yup.array().of(
    yup.object().shape({
      text: yup.string().required(),
      options: yup.array().of(
        yup.object().shape({
          text: yup.string().required(),
          isCorrect: yup.string().required()
        })
      ).required()
    })
  )
});

const form = reactive(useForm({
  validationSchema: schema,
  initialValues: {
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
  }
}));

const onFormSubmit = () => {
  fetch('/api/quizzes', {
    method: 'POST',
    body: JSON.stringify({
      title: form.values.title,
      description: form.values.description,
      questions: form.values.questions
    })
   });
  router.push('quizzes');
}
</script>

<style lang="sass" scoped>
.form
  display: flex
  flex-direction: column
  padding: 20px
  background-color: #FFFFFF

.form__field
  display: flex
  justify-content: space-between
  margin: 1em auto
  max-width: 500px
  width: 80%
</style>
