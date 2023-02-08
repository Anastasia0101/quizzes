import { createRouter, createWebHistory } from 'vue-router';
import QuizForm from '../components/QuizForm.vue';
import QuizzesList from '../components/QuizzesList.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/add-quiz', name: 'QuizForm', component: () => import('../components/QuizForm.vue') },
    { path: '/quizzes', name: 'Quizzes', component: () => import('../components/QuizzesList.vue') }
  ]
});

export default router;
