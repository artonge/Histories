import * as Vue from 'vue'

import StepType from '../../Models/StepType'

import TextChooseComponent from '../TextChooseComponent/TextChooseComponent'
import TextMistakeComponent from '../TextMistakeComponent/TextMistakeComponent'
import TextAnachroComponent from '../TextAnachroComponent/TextAnachroComponent'


function render(createElement: any) {
  var texts: [String]

  switch (this.type) {
    case StepType.Choice:
      texts = this.text.split('<cut>')
      break
    case StepType.Anachro:
      texts = this.text.split('<cut>')
      break
    case StepType.Mistake:
      texts = this.text.split('<cut>')
      break
    default: texts = [this.text]
  }


  var elements: [any] = [
    createElement('span', texts[0]),
  ]

  switch (this.type) {
    case StepType.Choice:
      elements.push(createElement(TextChooseComponent, "Hello !"))
      break
    case StepType.Anachro:
      elements.push(createElement(TextAnachroComponent, "Hello !"))
      break
    case StepType.Mistake:
      elements.push(createElement(TextMistakeComponent, "Hello !"))
      break
  }

  if (this.type > 0) elements.push(createElement('span', texts[1]))

  return createElement('div', elements)
}

export default Vue.component('step-text',  {

  render: render,
  staticRenderFns: render,

  props: {
    text: String,
    type: Number,
    options: Object
  }
})
