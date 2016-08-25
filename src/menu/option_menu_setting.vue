<template>
  <div class="form-group" style="position: relative;">
    <button 
      class="btn btn-info dropdown-toggle" 
      type="button" id="dropdownMenu1" 
      data-toggle="dropdown" 
      aria-haspopup="true" 
      aria-expanded="true">
      Dropdown
      <span class="caret"></span>
    </button>
    <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
      <li><a v-link="{ path: 'vuex' }">vuex</a></li>
      <li><a v-link="{ path: 'home' }">Home</a></li>
      <li><a v-link="{ path: 'setting' }">Setting</a></li>
      <li><a v-link="{ path: 'login' }">Login</a></li>
      <li><a v-link="{ path: 'setting' }">help</a></li>
      <li><a v-link="{ path: 'setting' }">reset</a></li>
      <li><a v-link="{ path: 'setting' }">Login out</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>

<style>

</style>
