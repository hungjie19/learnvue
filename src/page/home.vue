<template>
  <nav-default-slot>
    <option-menu-default></option-menu-default>
  </nav-default-slot>
  <contact-header></contact-header>
  <div class="container">
    <contact-contant></contact-contant>
    <try-slot>
      <ul>
        <li>tee</li>
        <li>milk</li>
        <li>ice</li>
      </ul>
    </try-slot>
    <try-slot>
      
    </try-slot>
    <contact-footer></contact-footer>
  </div>
</template>

<script>
import Vue from 'vue'
import navDefaultSlot from '../nav/nav_default_slot.vue'
import optionMenuDefault from '../menu/option_menu_default.vue'
import contactHeader from '../component/contact_header.vue'
import contactContant from '../component/contact_contant.vue'
import contactFooter from '../component/contact_footer.vue'
import trySlot from '../component/try_slot.vue'

export default {
  components: { 
    navDefaultSlot,
    optionMenuDefault,
    contactHeader, 
    contactContant,
    contactFooter,
    trySlot
  }
}
</script>




<style>

</style>