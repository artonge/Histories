// Import external dependencies
import './dependencies.ts'

// App's main style
import 'Styles/main.less'

// Import libs
import * as Vue from 'vue'
import * as VueRouter from 'vue-router'

// Import views
import { Home } from './home'
import { Stories } from './stories'


Vue.use(VueRouter)


// Build VueRouter
const router = new VueRouter(<vuejs.RouterOption>{
	mode: 'history',
	routes: [
		{ path: '/', redirect: '/home' },
		{ path: '/home', component: Home },
		{ path: '/stories/:story_id', component: Stories }
	]
})


// Mount app
new Vue({ router }).$mount('#app')
