// View appearing when the url is :
// /stories/<storyID>
// This view display the story's steps and check for each one if the answer is correct or not.
// TODO - When the answer is correct, add point to the total, when it's not, correct the user.
// TODO - show the begin screen at the start of the story
// TODO - deceid how many points to give/remove
import * as Vue from 'vue'

import StepType from '../../Models/StepType'
import StepComponent from '../../Components/StepComponent/StepComponent'
import StoryFactory from '../../Services/StoryFactory/StoryFactory'
import AppLogger from '../../Services/AppLogger'
import PointsConter from '../../Services/PointsConter'

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

			// Store the current displayed step's index of the story
			currentStepIndex: 0,

			// Step's answer reveiver when needed
			// answers can have multiple value type
			// Choice  --> index of an element in an array
			// Mistake --> the submitted correction from the user
			answersList: {},
			
			needHelp: false
		}
	},

	methods: {

		// Listen for answer change in step
		onAnswerUpdate: function(answerIndex: number) {
			this.answersList[this.currentStepIndex] = answerIndex
		},


		// Called to go to the next step
		// - Check step's answer
		// - Reset stepAnswer
		// - Add points
		// - Change the current step
		nextStep: function() {
			// Check if answer is correct
			const currentStep = this.story.steps[this.currentStepIndex]
			if (currentStep.type != StepType.None) {
				if (this.answersList[this.currentStepIndex] == currentStep.answer) {
					// If the answer is correct, add point to the total
					PointsConter.add(10)
					this.stepAnswer = null
					this.needHelp = false
				} else {
					// If not, remove points, correct the user then return
					PointsConter.remove(5)
					this.needHelp = true
					// TODO - Correct user
					return
				}
			}

			// Check if we're not in the last step
			if (this.currentStepIndex < this.story.steps.length - 1) {
				// If we're not show the next step
				AppLogger.info("Next step")
				this.currentStepIndex++
			} else {
				// TODO - Else show the end of story screen
				AppLogger.info("End of story")
			}
		},

		// Called to go to the previous step
		// - Change current displayed step
		// - Reset stepAnswer
		previousStep: function() {
			// Check if we're not in the first step
			if (this.currentStepIndex > 0) {
				// If we're not, go to previous step
				AppLogger.info("Previous step")
				this.currentStepIndex--
				this.stepAnswer = null
			}
		},


		// Receive keyboard events and dispatch them to the correct handle
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

	// Add keyboard events listeners when the view is created
	created() {
		AppLogger.info('Create story')
		window.addEventListener('keyup', this.dispatchKeyup)
	},

	// Remove keyboard events linsteners when the view is destroyed
	destroyed() {
		AppLogger.info('Destroy story')
		addEventListener('keyup', this.dispatchKeyup)
	}
})
