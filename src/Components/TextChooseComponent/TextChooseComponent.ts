import * as Vue from 'vue'

import './TextChooseComponent.less'

export default Vue.component('text-choose',  {

  template: require('./TextChooseComponent.pug')(),

  props: {
    options: Array
  },

  data: () => {
    return {
      selectMode  : false,
      selectedOption: null as any
    }
  },

  methods: {
    enterSelectedMode: function(e: Event) {
      this.selectMode = true;
    },

    selectOption: function(option: String, e: Event) {
      this.selectMode = false
      this.selectedOption = option
      e.stopPropagation()
    }
  }
})
