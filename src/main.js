import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import 'swiper/dist/css/swiper.css'
import './register'
import './style/reset.css'

import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

import 'amfe-flexible'


Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
