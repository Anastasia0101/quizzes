<template>
  <form @submit.prevent="onSubmit" class="form">
    <div class="form__field field">
      <label for="title" class="field__label">Title</label>
      <TextInput id="title" name="title" />
    </div>
    
    <div class="form__field field">
      <label for="description" class="field__label">Description</label>
      <TextInput 
        id="description" 
        name="description" 
        :rows="4" 
        :cols="50"
      />
    </div>
  
    <PageTitle :level="2" :title="'Questions'" />

    <ul v-if="questionsFields" name="questions">
      <li v-for="(field, index) in questionsFields" :key="index">
        <QuestionFields 
          :name="`questions[${index}]`"
          :questionIndex="index"
        />
        <div class="form__questions">
        <icon-button @click="deleteQuestion(index)">
          <DeleteIcon />
        </icon-button>
      </div>
      </li>
    </ul>

    <button 
      type="button" 
      @click="addQuestionForm"
    >Add Question</button>

    <primary-button :button-type="'submit'" :disabled="!form.meta.valid" @click="onSubmit">
      Create
    </primary-button>
  </form>
</template>

<script setup>
import TextInput from '../TextInput/TextInput.vue';
import IconButton from '../IconButton/IconButton.vue';
import PrimaryButton from '../PrimaryButton/PrimaryButton.vue';
import DeleteIcon from '../../assets/buttons-svg/trash-box.svg';
import PageTitle from '../PageTitle/PageTitle.vue';
import QuestionFields from '../QuestionFields/QuestionFields.vue';

import { reactive } from 'vue';

import { useForm, useFieldArray } from 'vee-validate';
import * as yup from 'yup';

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

const { fields: questionsFields, push, remove } = useFieldArray('questions');

const onSubmit = () => {
  console.log(form.meta)
  console.log(form.values)
};


// const onFormSubmit = () => {
//   fetch('/api/quizzes', {
//     method: 'POST',
//     body: JSON.stringify({
//       title: form.title,
//       description: form.description,
//       questions: form.questions
//     })
//   });
//   router.push('quizzes');
// }

const addQuestionForm = () => push({ text: '', options: [] });

const deleteQuestion = (questionIndex) => remove(questionIndex);

// const isDeleteBtnDisable = computed(() => {
//   return form.questions.length == 1 ? true : false;
// });
</script>

<style lang="sass" scoped>
@import ./quizForm.sass

</style>

