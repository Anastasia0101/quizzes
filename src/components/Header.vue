<template>
  <header>
    <nav class="nav">
      <router-link to="quizzes" class="nav__link">All Quizzes</router-link>
      <router-link to="add-quiz" class="nav__link">New Quizzes</router-link>
    </nav>
  </header> 
</template>

<script></script>

<style scoped>
.nav {
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav__link {
  padding: 20px 30px;
}

.router-link-active {
  border-bottom: 2px solid rgb(162, 47, 244);
}
</style>