import * as Vue from 'vue'


export default Vue.extend({
	template: require('./HomeView.pug')(),
	data: () => ({ message: 'Home' })
})
