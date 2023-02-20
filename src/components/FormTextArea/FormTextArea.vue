<template>
  <TextArea
    :placeholderValue="'Write description here...'"
    :rowsNumber="4" 
    :colsNumber="50"
    class="form-input"
  />
</template>

<script setup>
import TextArea from '../UI/TextArea/TextArea.vue';
</script>

<style lang="sass" scoped>
@import ../../styles/__main.sass
</style>