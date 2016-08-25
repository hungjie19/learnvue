<template>
  <div>
    <h3>自訂數值：</h3>
    <input type="text" v-model='userInput'>
    <button @click='incrementAmount'>OK</button>
  </div>
</template>

<script>
import { incrementAmountCounter } from '../vuex/actions'
import store from '../vuex/store' 
export default {
  data() {
  	return {
  		userInput: 0
  	}
  },
  vuex: {
  	actions: {
      incrementAmount: function (state) {
      	store.dispatch('IncrementAmount', parseInt(this.userInput))
      }
    }
  }
}
</script>