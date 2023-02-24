<template>
  <form @submit.prevent="onSubmit" class="form">
    <div class="form__field field">
      <label for="title" class="field__label">Title</label>
      <TextInput id="title" name="title" v-model.trim="title" />
    </div>
    
    <div class="form__field field">
      <label for="description" class="field__label">Description</label>
      <FormTextArea id="description" name="description" v-model.trim="description" />
    </div>
  
    <PageTitle :level="2" :title="'Questions'" />

    <div class="form__questions">
      <icon-button>
        <DeleteIcon />
      </icon-button>
    </div>

    <button 
      type="button" 
    >Add Question</button>
  
    <primary-button :button-type="'submit'" :disabled="!form.meta.valid">
      Create
    </primary-button>
  </form>
</template>

<script setup>
import TextInput from '../TextInput/TextInput.vue';
import FormTextArea from '../FormTextArea/FormTextArea.vue';
import IconButton from '../IconButton/IconButton.vue';
import PrimaryButton from '../PrimaryButton/PrimaryButton.vue';
import DeleteIcon from '../../assets/buttons-svg/trash-box.svg';
import PageTitle from '../PageTitle/PageTitle.vue';

import { reactive } from 'vue';

import { useForm, useField } from 'vee-validate';
import * as yup from 'yup';

const form = reactive(useForm());

const { value: title } = useField('title', yup.string().required());
const { value: description  } = useField('description', yup.string().required());

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

// const addQuestionForm = () => {
//   form.questions = form.questions.concat([{options: [{}]}]);
// }

// const deleteQuestion = (questionIndex) => {
//   form.questions = form.questions.filter((item, index) => index != questionIndex);
// }

// const isDeleteBtnDisable = computed(() => {
//   return form.questions.length == 1 ? true : false;
// });
</script>

<style lang="sass" scoped>
@import ./quizForm.sass

</style>

