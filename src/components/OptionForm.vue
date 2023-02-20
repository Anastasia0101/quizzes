<template>
  <div class="option">
    <div class="select">
      <select v-model="option.isCorrect" class="option__select-box">
        <option value="true" selected="selected">True</option>
        <option value="false">False</option>
      </select>
    </div>
    <input type="text" v-model.trim="option.text" class="option__input" placeholder="option"/>
    <button 
      type="button" 
      @click="onClickDeleteBtn()" 
      :disabled="isDeleteBtnDisabled"
      class="option__button"
    >
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px">
      <path d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z"/>
    </svg>
    </button>
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
@import "../styles/__main.sass"

.option
  @include form-field-horizotal

.option__input
  @extend .form-input

.option__select-box
  -webkit-appearance: none
  -moz-appearance: none
  -ms-appearance: none
  appearance: none
  outline: 0
  box-shadow: none
  border: 1px solid #EEEEEE
  background-color: #FFFFFF
  flex: 1
  padding: 0 .5em
  color: grey
  cursor: pointer
  font-size: 1.1em
  line-height: 1.5em
  font-family: 'Open Sans', sans-serif

.option__select-box::-ms-expand
  display: none

.select
  position: relative
  display: flex
  width: 80px
  height: 2em
  // line-height:/ 1.5em
  overflow: hidden
  border-radius: 3px

.select::after
  content: '\25BC'
  position: absolute
  top: 0
  right: 0
  padding: 4px
  background: #FFFFFF
  cursor: pointer
  pointer-events: none
  line-height: 2.5em
  transition:.25s all ease
  font-size: 0.5em

.select:hover::after
  color: rgba(162, 47, 244, 1)

.option__button 
  border: none
  background-color: #FFFFFF
  
.option__button:disabled
  fill: #EEEEEE
  
.option__button:hover:enabled
  cursor: pointer
</style>