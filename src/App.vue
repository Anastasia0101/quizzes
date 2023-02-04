<template>
  <button @click="saveQuiz()">Add</button>
  <QuizForm />
</template>

<script setup>
import QuizForm from './components/QuizForm.vue';

const url = 'https://quizzes-d3242-default-rtdb.firebaseio.com/quizzes.json?';

// const quizzes = await fetch(url)
//   .then(res => console.log(res.json()));

const saveQuiz = () => {
  fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      name: 'Math',
      numOfQuestions: 3
    })
  }).then(res => console.log(res.json()));
};

</script>

<style>

</style> 