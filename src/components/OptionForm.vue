<template>
  <p>option</p>
  <input type="text" v-model="option.text" class="option__input" placeholder="option">
  <select v-model="option.isCorrect" class="option__select-box">
    <option value="true">True</option>
    <option value="false">False</option>
  </select>
</template>

<script setup>
import { defineProps } from 'vue';

const { option } = defineProps(['option']);
</script>

<style>

</style>