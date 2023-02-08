<template>
  <ul v-if="quizzes">
    <li v-for="(quiz, index) in quizzes" :key="index">
      <p>{{ quiz.title }}</p>
      <p>{{ quiz.description }}</p>
      <ul>
        <li v-for="(question, questionid) in quiz.questions" :key="questionid">
          {{ question.text }}
          <ul>
            <li v-for="(option, optionInd) in question.options" :key="optionInd">
              {{ option.text }}
              {{ option.isCorrect }}
            </li>
          </ul>
        </li>
      </ul>
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

<style>

</style>