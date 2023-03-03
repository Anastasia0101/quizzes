<template>
  <label for="`${name}.text`"></label>
  <TextInput :id="`${name}.text`" :name="`${name}.text`" />

  <OptionsList :name="`${name}.options`" />

  <icon-button @click="onDeleteBtnClick()">
    <DeleteIcon />
  </icon-button>
</template>

<script setup>
import DeleteIcon from '../../../assets/icons-svg/trash-box.svg';
import IconButton from '../../IconButton.vue';
import TextInput from '../../TextInput.vue';
import OptionsList from '../OptionsList/OptionsList.vue';

const props = defineProps({
  name: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['deleteBtnClicked']);

const onDeleteBtnClick = () => emit('deleteBtnClicked');
</script>

<style>

</style>