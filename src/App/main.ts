// Import external dependencies
// JS
import '@webcomponents/custom-elements'
import 'clarity-icons/clarity-icons.min.js'
// Style
import 'clarity-ui/clarity-ui.min.css'
import 'clarity-icons/clarity-icons.min.css'

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
