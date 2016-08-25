<template>
  <nav-default-slot>
    <option-menu-default></option-menu-default>
  </nav-default-slot>
  <div class="jumbotron">
    <Display></Display>
    <Increment></Increment>
    <Decrement></Decrement>
    <Increment-amount></Increment-amount>
  </div>
</template>

<script>
import navDefaultSlot from '../nav/nav_default_slot.vue'
import optionMenuDefault from '../menu/option_menu_default.vue'

import Display from '../component/Display.vue'
import Increment from '../component/Increment.vue'
import Decrement from '../component/Decrement.vue'
import IncrementAmount from '../component/IncrementAmount.vue'

import store from '../vuex/store'

export default {
  components: {
    navDefaultSlot,
    optionMenuDefault,
    Display,
    Increment,
    Decrement,
    IncrementAmount
  },
  store
}
</script>

<style>

</style>
