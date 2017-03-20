import * as Vue from 'vue'




export default Vue.component('text-choose',  {

  template: require('./TextChooseComponent.pug')(),

  props: {
    options: Object
  }

})
