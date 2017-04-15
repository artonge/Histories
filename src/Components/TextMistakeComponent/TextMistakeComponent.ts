import * as Vue from 'vue'


import './TextMistakeComponent.less'

export default Vue.component('text-choose',  {

  template: require('./TextMistakeComponent.pug')(),

  props: {
    mistake: String
  },

  data: function() {
    return {
      answer: this.mistake,
    }
  },

  watch: {
    answer: function(value: string) {
      this.$emit('answer-update', value)
    }
  }
})
