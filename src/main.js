import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Vuelidate from 'vuelidate';
import { makeServer } from "./server";

import './styles/__main.sass';

if (process.env.NODE_ENV === "development") {
  makeServer();
}

const app = createApp(App);

app.use(router, Vuelidate);

app.mount('#app');
