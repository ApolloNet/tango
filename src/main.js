import Vue from 'vue'
import VueMeta from 'vue-meta'
import App from './App.vue'

import 'milligram/dist/milligram.min.css'
import '@/assets/app.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
})