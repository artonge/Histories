import * as Vue from 'vue'

import Story from '../../Models/Story'
import Step from '../../Models/Step'
import StepType from '../../Models/StepType'

export default Vue.extend({
	template: require('./StoryCreationView.pug')(),

	methods: {
		addAStep(story: Story) {
			story.steps.push({
				image: "",
				text: "",
				type: 0,
				help: "",
				options: [""],
				answer: 0
			})
		},

		removeAStep(story: Story, step: Step) {
			var index = story.steps.indexOf(step)
			story.steps.splice(index, 1)
		},

		addOption(step: Step) {
			step.options.push("")
		},

		removeOption(step: Step, option: string) {
			var index = step.options.indexOf(option)
			step.options.splice(index, 1)
		},

		validateStory(story: Story) {
			this.showJSON = true
		},

		changeStory(story: Story) {
			this.showJSON = false
		}
	},

	data: () => ({
		showJSON: false,
		story: {
      ID: "",
    	name: "",
    	steps: [] as [Step]
    }
	})
})
