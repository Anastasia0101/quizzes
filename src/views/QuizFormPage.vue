<template>
  <PageTitle :title="'New Quiz'" :level="1" />
  <quiz-form></quiz-form>
</template>

<script setup>
import QuizForm from '../components/QuizForm/QuizForm.vue';
import PageTitle from '../components/PageTitle.vue';
</script>