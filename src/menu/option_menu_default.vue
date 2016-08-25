<template>
  <div class="form-group" style="position: relative;">
    <button 
      class="btn btn-danger dropdown-toggle" 
      type="button" id="dropdownMenu" 
      data-toggle="dropdown" 
      aria-haspopup="true" 
      aria-expanded="true">
      Dropdown
      <span class="caret"></span>
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenu">
      <li><a v-link="{ path: 'vuex' }">vuex</a></li>
      <li><a v-link="{ path: 'home' }">Home</a></li>
      <li><a v-link="{ path: 'setting' }">Setting</a></li>
      <li><a v-link="{ path: 'login' }">Login</a></li>
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
