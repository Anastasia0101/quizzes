<template>
  <ul v-if="optionsFields" :name="'options'">
    <li v-for="field in optionsFields" :key="field.key">
      <OptionListItem 
        :name="name" 
        :fieldKey="field.key" 
        @clickDeleteBtn="deleteOption(field.key)" 
      />
      {{ field.key }}
    </li>
  </ul>
  <button 
    type="button" 
    @click="addOptionFields"
  >Add Option</button>
</template>

<script setup>
import { useFieldArray } from 'vee-validate';
import OptionListItem from './OptionListItem.vue';

const props = defineProps({
  name: {
    type: String,
    required: true
  }
});

const { fields: optionsFields, push, remove } = useFieldArray(`${props.name}.options`);

const addOptionFields = () => push({ text: '', isCorrect: '' });
const deleteOption = (index) => remove(index);
</script>

<style>

</style>