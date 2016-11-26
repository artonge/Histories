import * as Vue from 'vue'
import * as impress from './impress'


// List of the stories
const config = require('../config.json')


export const Stories = Vue.extend({
	template: require('Templates/stories.pug')(),
	data: () => ({ message: 'Stories' })
})

