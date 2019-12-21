import Vue from 'vue';
import VueHighlightJS from 'vue-highlightjs';
import 'highlight.js/styles/atom-one-dark.css';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(VueHighlightJS);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
