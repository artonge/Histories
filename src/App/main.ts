// App's main style
import './main.less'

// Import libs
import * as Vue from 'vue'
var VueRouter = require('vue-router').default

Vue.use(VueRouter)

// Import our router
import router from './router'

// Mount app with the router
new Vue({ router }).$mount('#app')
