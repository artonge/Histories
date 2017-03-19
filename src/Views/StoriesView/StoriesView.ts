import * as Vue from 'vue'

import StoryFactory from '../../Services/StoryFactory/StoryFactory'

export default Vue.extend({
	template: require('./StoriesView.pug')(),
	data: () => ({
		message: 'Stories',
		stories: StoryFactory.all
	})
})
