import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';

Vue.config.productionTip = false;
axios.defaults.baseURL = 'https://8ca6v8f77b.execute-api.eu-west-2.amazonaws.com/PROD';

new Vue({
  render: h => h(App),
}).$mount('#app');
