// View appearing when the url is :
// /stories/<storyID>
// This view display the story's steps and check for each one if the answer is correct or not.
// TODO - When the answer is correct, add point to the total, when it's not, correct the user.
// TODO - show the begin screen at the start of the story
import * as Vue from 'vue'

import StepComponent from '../../Components/StepComponent/StepComponent'
import StoryFactory from '../../Services/StoryFactory/StoryFactory'
import { AppLogger, PointsConter } from '../../App/main'

import './StoryView.less'


export default Vue.extend({
	template: require('./StoryView.pug')(),

	// The view uses the StepComponent
	components: {
		'story-step': StepComponent
	},

	data() {
		return {
			// Get the current story in StoryFactory
			// The story's ID is retreived from the route parameters
			story: StoryFactory.get(this.$route.params.storyID),

			// Store the current step of the story
			currentStep: 0,
		}
	},

	methods: {
		// Called to go to the next step
		nextStep: function() {
			// Check if answer is correct
			const currentStep = this.steps[this.currentStep]
			if (this.stepAnswer != currentStep.answer) {
				// If the answer is correct, add point to the total
				AppLogger.info("Add 10 points")
				PointsConter.add(10)
			} else {
				// If not, remove points and TODO - correct the user
				AppLogger.info("Remove 10 points")
				PointsConter.remove(10)
			}

			// Check if we're not in the last step
			if (this.currentStep < this.story.steps.length - 1) {
				// If we're not show the next step
				AppLogger.info("Next step")
				this.currentStep++
			} else {
				// TODO - Else show the end of story screen
				AppLogger.info("End of story")
			}
		},

		// Called to go to the previous step
		previousStep: function() {
			// Check if we're not in the first step
			if (this.currentStep > 0) {
				// If we're not, go to previous step
				AppLogger.info("Previous step")
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
		AppLogger.info('Create story')
		window.addEventListener('keyup', this.dispatchKeyup)
	},

	destroyed() {
		AppLogger.info('Destroy story')
		addEventListener('keyup', this.dispatchKeyup)
	}
})
