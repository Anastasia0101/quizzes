import { createRouter, createWebHistory } from 'vue-router';
import QuizFormPage from '../views/QuizFormPage.vue';
import QuizzesList from '../components/QuizzesList.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/add-quiz', name: 'QuizFormPage', component: () => import('../views/QuizFormPage.vue') },
    { path: '/quizzes', name: 'Quizzes', component: () => import('../components/QuizzesList.vue') }
  ]
});

export default router;
