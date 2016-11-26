import * as Vue from 'vue'


export const Home = Vue.extend({
	template: require('Templates/home.pug')(),
	data: () => ({ message: 'Home' })
})
