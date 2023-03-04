<template>
  <div class="page">
    <Header />
    <main class="page__main">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
</script>

<style scoped>
.page {
  width: 100%;
  height: 100vh;
  background-color: #ededed;
  color: black;
}

.page__header {
  height: 10%;
}

.page__main {
  width: 70%;
  max-width: 1100px;
  margin: 0 auto;
}
</style> 