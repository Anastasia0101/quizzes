<template>
  <OptionFields 
    :name="name"
  />
  <icon-button @click="onClickDeleteBtn()">
    <DeleteIcon />
  </icon-button>
</template>

<script setup>
import DeleteIcon from '../../../assets/icons-svg/trash-box.svg';
import IconButton from '../../IconButton.vue';
import OptionFields from './OptionFields.vue';

defineProps({
  name: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['clickDeleteBtn']);

const onClickDeleteBtn = () => emit('clickDeleteBtn'); 
</script>

<style>

</style>