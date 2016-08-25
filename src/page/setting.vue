<template>
  <nav-default-slot>
    <option-menu-setting></option-menu-setting>
  </nav-default-slot>
  <div class="container">
    <contact-contant></contact-contant>
    <contact-footer></contact-footer>
  </div>
</template>

<script>
import Vue from 'vue'
import navDefaultSlot from '../nav/nav_default_slot.vue'
import contactContant from '../component/contact_contant_justified.vue'
import contactFooter from '../component/contact_footer.vue'
import optionMenuSetting from '../menu/option_menu_setting.vue'

export default {
  components: { 
    navDefaultSlot,
    optionMenuSetting,
    contactContant,
    contactFooter
  }
}
</script>

<style>

</style>
