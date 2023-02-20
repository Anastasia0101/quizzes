<template>
  <textarea 
    :placeholder="placeholderValue" 
    :rows="rowsNumber" 
    :cols="colsNumber"
    class="textarea"
  ></textarea>
</template>

<script setup>
defineProps({
  placeholderValue: String,
  rowsNumber: Number,
  colsNumber: Number
});
</script>

<style lang="sass" scoped>
@import ./textArea.sass
</style>