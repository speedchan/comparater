import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
const fb = require('./firebaseConfig.js');
import './assets/scss/app.scss';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

let app;
fb.auth.onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      el: '#app',
      router,
      store,
      vuetify,
      render: h => h(App)
    })
  }
});