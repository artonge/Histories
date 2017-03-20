import * as Vue from 'vue'




export default Vue.component('text-choose',  {

  template: require('./TextAnachroComponent.pug')(),

  props: {
    options: Object
  }

})
