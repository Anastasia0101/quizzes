<template>
  <QuizFormInputField  :id="`${name}.text`" :name="`${name}.text`"/>

  <OptionsList :name="`${name}.options`" />

  <icon-button @click="onDeleteBtnClick()">
    <DeleteIcon />
  </icon-button>
</template>

<script setup>
import DeleteIcon from '../../../assets/icons-svg/trash-box.svg';
import IconButton from '../../IconButton.vue';
import OptionsList from '../OptionsList/OptionsList.vue';
import QuizFormInputField from '../QuizFormInputField.vue';

const props = defineProps({
  name: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['deleteBtnClicked']);

const onDeleteBtnClick = () => emit('deleteBtnClicked');
</script>

<style></style>