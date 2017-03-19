import * as Vue from 'vue'

import StepComponent from '../../Components/StepComponent/StepComponent'
import StoryFactory from '../../Services/StoryFactory/StoryFactory'

import './StoryView.less'


export default Vue.extend({
	template: require('./StoryView.pug')(),

	components: {
		'story-step': StepComponent
	},

	data() {
		return {
			story: StoryFactory.get(this.$route.params.storyID),
			currentStep: 0
		}
	},

	methods: {
		nextStep: function() {
			if (this.currentStep < this.story.steps.length - 1) {
				console.info("Next step")
				this.currentStep++
			}
		},

		previousStep: function() {
			if (this.currentStep > 0) {
				console.info("Previous step")
				this.currentStep--
			}
		},

		dispatchKeyup: function(e: KeyboardEvent) {
			switch (e.key) {
				case 'ArrowRight':
				case 'ArrowUp':
					this.nextStep()
					break
				case 'ArrowLeft':
				case 'ArrowDown':
					this.previousStep()
					break
			}
		}
	},

	created() {
		console.info('Create Story')
		window.addEventListener('keyup', this.dispatchKeyup)
	},

	destroyed() {
		console.info('Destroy Story')
		addEventListener('keyup', this.dispatchKeyup)
	}
})
