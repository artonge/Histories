import * as Vue from 'vue'

import StepType from '../../Models/StepType'

import TextChooseComponent from '../TextChooseComponent/TextChooseComponent'
import TextMistakeComponent from '../TextMistakeComponent/TextMistakeComponent'
import TextAnachroComponent from '../TextAnachroComponent/TextAnachroComponent'

import './StepTextComponent.less'

function render(createElement: any) {
  var texts: [String]

  switch (this.config.type) {
    case StepType.Choice:
      texts = this.config.text.split('<cut>')
      break
    case StepType.Anachro:
      texts = this.config.text.split('<cut>')
      break
    case StepType.Mistake:
      texts = this.config.text.split('<cut>')
      break
    default: texts = [this.config.text]
  }


  var elements: [any] = [
    createElement('span', texts[0]),
  ]

  switch (this.config.type) {
    case StepType.Choice:
      elements.push(createElement(TextChooseComponent, { props: { options: this.config.options } }))
      break
    case StepType.Anachro:
      elements.push(createElement(TextAnachroComponent, { props: { options: this.config.options } }))
      break
    case StepType.Mistake:
      elements.push(createElement(TextMistakeComponent, { props: { options: this.config.options } }))
      break
  }

  if (texts.length > 1) elements.push(createElement('span', texts[1]))

  return createElement('div', elements)
}

export default Vue.component('step-text',  {

  render: render,
  staticRenderFns: render,

  props: {
    config: Object
  }
})
