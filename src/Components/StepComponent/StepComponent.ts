import * as Vue from 'vue'

import Step from '../../Models/Step'
import StepType from '../../Models/StepType'

import StepText from '../StepTextComponent/StepTextComponent'

import './StepComponent.less'


export default Vue.component('story-step', {

  template: require('./StepComponent.pug')(),

  components: {
    'step-text': StepText
  },

  props: {
    config: Object
  },

  computed: {
    imagePath: function() { return `/stories/arthur/${this.config.image}`}
  }
})
