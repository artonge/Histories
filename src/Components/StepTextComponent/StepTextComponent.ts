import * as Vue from 'vue'

import StepType from '../../Models/StepType'

import TextChooseComponent from '../TextChooseComponent/TextChooseComponent'
import TextMistakeComponent from '../TextMistakeComponent/TextMistakeComponent'
import TextAnachroComponent from '../TextAnachroComponent/TextAnachroComponent'

import './StepTextComponent.less'

// Function that render the text and the elements within it like the select box
// It render the text and element depending on the type of the step set in the config file
// In the config file there must be a <cut> taf to know where the renderer will insert the elements
function render(createElement: any) {
  var texts: [String]

  // Split the text at the <cut> tag
  // If the type of the text is None, create an array containing the text
  //  ==> this is usefull for the following code
  switch (this.config.type) {
    case StepType.Choice:
    case StepType.Anachro:
    case StepType.Mistake:
      texts = this.config.text.split('<cut>')
      break
    default: texts = [this.config.text]
  }


  // Create an array of HTML elements
  // This array is initialized with the first item in the texts array
  var elements: [any] = [
    createElement('span', texts[0]),
  ]


  // Create the config object passed to the custom elements
  const elementConfig = {
    props: {
      options: this.config.options,
    },
    on: {
      'answer-update': (answerIndex: number)=> this.$emit('answer-update', answerIndex)
    },
  }

  // Depending on the type of the text, insert an other element in the elements array
  // This second custom element is one of the tree possible elements
  // ==> TextAnachroComponent, TextChooseComponent or TextMistakeComponent
  switch (this.config.type) {
    case StepType.Choice:
      elements.push(createElement(TextChooseComponent,  elementConfig))
      break
    case StepType.Anachro:
      elements.push(createElement(TextAnachroComponent, elementConfig))
      break
    case StepType.Mistake:
      elements.push(createElement(TextMistakeComponent, elementConfig))
      break
  }

  // If the texts array contains a second element, add it to the elements array
  if (texts.length > 1) {
    elements.push(createElement('span', texts[1]))
  }

  // Return a HTML element containing all the elements contained in the elements array
  // This is what is displayed on the screen.
  return createElement('div', elements)
}

export default Vue.component('step-text',  {

  // Set custom render function
  render: render,
  staticRenderFns: render,

  props: {
    config: Object,
  }
})
