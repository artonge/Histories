import * as Vue from 'vue'




export default Vue.component('text-choose',  {

  template: require('./TextMistakeComponent.pug')(),

  props: {
    options: Object
  }

})
