import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Vuelidate from 'vuelidate';

import './assets/main.css';

const app = createApp(App);

app.use(router, Vuelidate);

app.mount('#app');
