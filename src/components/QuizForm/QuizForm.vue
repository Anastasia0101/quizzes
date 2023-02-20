<template>
  <form class="form">
    <div class="form__field field">
      <label for="title" class="field__label">Title</label>
      <TextInput id="title" />
    </div>
    
    <div class="form__field field">
      <label for="description" class="field__label">Description</label>
      <FormTextArea id="description" />
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
  
    <primary-button :button-type="'submit'">
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

const onClick = () => console.log('click');

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

