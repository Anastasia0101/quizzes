import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { makeServer } from "./server";
import * as VeeValidate from 'vee-validate';

import './styles/__main.sass';

if (process.env.NODE_ENV === "development") {
  makeServer();
}

const app = createApp(App);

app
  .use(router)
  .use(VeeValidate);

app.mount('#app');
