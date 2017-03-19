import * as Vue from 'vue'

import './StepComponent.less'


export default Vue.component('story-step', {

  template: require('./StepComponent.pug')(),

  props: {
    text: String,
    image: String
  },

  computed: {
    imagePath: function() { return `/stories/arthur/${this.image}`}
  }
})
