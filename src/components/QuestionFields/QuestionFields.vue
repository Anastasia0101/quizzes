<template>
  <label for="`${name}.text`"></label>
  <TextInput :id="`${name}.text`" :name="`${name}.text`" />

  <ul v-if="optionsFields" :name="'options'">
    <li v-for="(field, index) in optionsFields" :key="index">
      <OptionFields 
        :name="`${name}.options[${index}]`"
      />
    </li>
  </ul>

  <button 
    type="button" 
    @click="addOptionFields"
  >Add Option</button>
</template>

<script setup>
import { useFieldArray } from 'vee-validate';
import TextInput from '../TextInput/TextInput.vue';
import OptionFields from '../OptionFields/OptionFields.vue';

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  questionIndex: {
    type: Number,
    required: true
  }
});

const { fields: optionsFields, push, remove } = useFieldArray(`${props.name}.options`);

const addOptionFields = () => push({ text: '', isCorrect: '' });
</script>

<style lang="sass" scoped>

</style>