// App's main style
import './main.less'

// Import libs
import * as Vue from 'vue'
var VueRouter = require('vue-router').default

Vue.use(VueRouter)

// Import our router
import router from './router'

import PointsConter from '../Services/PointsConter'

// Mount app with the router
new Vue({
  router,
  data() { return {
    counter: PointsConter
  }},
}).$mount('#app')
