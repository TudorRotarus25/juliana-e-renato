import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';

Vue.config.productionTip = false;
axios.defaults.baseURL = 'https://8ca6v8f77b.execute-api.eu-west-2.amazonaws.com/PROD';

const populateVh = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

populateVh();
window.addEventListener('resize', populateVh);

new Vue({
  render: h => h(App),
}).$mount('#app');
