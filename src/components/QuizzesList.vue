<template>
  <ul v-if="quizzes">
    <li v-for="quiz in quizzes" :key="quiz.id">
      <p>{{ quiz.title }}</p>
      <p>{{ quiz.description }}</p>
    </li>
  </ul>
  <router-link to="add-quiz">Add quiz</router-link>
</template>

<script setup>
import { ref } from '@vue/reactivity';

const quizzes = ref([]);

fetch("/api/quizzes")
  .then((data) => data.json())
  .then((data) => {
    quizzes.value = data
  });
</script>

<style></style>