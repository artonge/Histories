// App's main style
import './main.less'

// Import libs
import * as Vue from 'vue'
var VueRouter = require('vue-router').default

Vue.use(VueRouter)

// Import our router
import router from './router'

// Create AppLogger
import LogFactory from '../Services/LogFactory'
console.warn(LogFactory)
export const AppLogger = new LogFactory(true)

// Create points counter
import PointsFactory from '../Services/PointsFactory'
console.warn(PointsFactory)
export const PointsConter = new PointsFactory('user-id')


// Mount app with the router
new Vue({ router }).$mount('#app')
