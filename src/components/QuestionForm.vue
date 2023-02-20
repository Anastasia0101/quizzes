<template>
  <div class="question">
    <div class="question__input">
      <label for="text" class="label">Question</label>
      <input 
        type="text" 
        v-model.trim="question.text" 
        id="text" 
        placeholder="Write your question here..."
        class="input"
      />
    </div>

    <p>Options</p>

    <div v-for="(option, index) in question.options" :key="index" class="options">
      <OptionForm 
        :option="option" 
        :isDeleteBtnDisabled="isOptionSingle"
        @clickedDeleteBtn="deleteOption(index)"
      />
    </div>

    <button type="button" @click="addOptionForm">Add option</button>
  </div>
</template>

<script setup>
import { computed, defineProps } from 'vue';
import OptionForm from './OptionForm.vue';

const { question } = defineProps(['question']);

const addOptionForm = () => question.options = question.options.concat([{}]);

const deleteOption = (optionIndex) => {
  question.options = question.options.filter((item, index) => index != optionIndex);
}

const isOptionSingle = computed(() => question.options.length == 1 ?? false);
</script>

<style lang="sass" scoped>
@import "../styles/__main.sass"

.question
  border: 1px solid #EEEEEE
  box-shadow: 1px 1px 1px #000000

.question__input
  @include form-field-horizotal

.input 
  @extend .form-input
</style>