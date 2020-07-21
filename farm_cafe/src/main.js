import 'babel-polyfill';
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VModal from 'vue-js-modal'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/styles/custom.scss';
import VueCarousel from 'vue-carousel';
import lineClamp from 'vue-line-clamp'
 
Vue.use(lineClamp, {
  textOverflow:'ellipsis'
})
 
Vue.use(VueCarousel);
Vue.use(VModal)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
