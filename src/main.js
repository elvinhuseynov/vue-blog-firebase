import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Unicon from 'vue-unicons'
import { uniFacebookF,uniTwitter, uniInstagram, uniAt, uniArrowLeft, uniBars } from 'vue-unicons/src/icons'
import vueSmoothScroll from 'vue2-smooth-scroll'
Unicon.add([uniFacebookF,uniTwitter, uniInstagram, uniAt, uniArrowLeft, uniBars])
Vue.use(Unicon, {
  height: 15,
  width: 15
})
Vue.use(vueSmoothScroll)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
