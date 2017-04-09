import * as Vue from 'vue'

import './TextChooseComponent.less'

export default Vue.component('text-choose',  {

  template: require('./TextChooseComponent.pug')(),

  props: {
    options: Array,
  },

  data: () => {
    return {
      selectMode  : false,
      selectedOption: null as any
    }
  },

  methods: {
    // Display the options
    enterSelectMode: function(e: Event) {
      this.selectMode = true;
    },

    // Called when an option is selected during selectMode
    selectOption: function(index: number, e: Event) {
      this.selectMode = false
      this.selectedOption = this.options[index]
      this.$emit('answer-update', index) // Emit answer change to step component
      e.stopPropagation()
    }
  }
})
