<template>
  <button 
    class="btn btn-danger dropdown-toggle" 
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
  </ul>
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
