<template>
  <div class="option">
    <input type="text" v-model.trim="option.text" class="option__input" placeholder="option">
    <select v-model="option.isCorrect" class="option__select-box">
      <option value="true" selected="selected">True</option>
      <option value="false">False</option>
    </select>
    <button 
      type="button" 
      @click="onClickDeleteBtn()" 
      :disabled="isDeleteBtnDisabled"
    >Delete option</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  option: {
    text: String,
    isCorrect: Boolean
  },
  isDeleteBtnDisabled: Boolean
});

const emit = defineEmits(['deleteOption']);

const onClickDeleteBtn = () => emit('clickedDeleteBtn');
</script>

<style lang="sass" scoped>
@import "../assets/styles/__main.sass"

.option
  @include form-field-horizotal

.option__input
  @extend .form-input
</style>