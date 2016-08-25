<template>
  <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" v-link="{ path: 'home' }">{{ msg.titleName }}</a>
      </div>
      <div id="navbar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav">
          <li>
            <a v-link="{ path: 'home' }">Home</a>
          </li>
          <li>
            <a v-link="{ path: 'vuex' }">vuex</a>
          </li>
          <li>
            <a v-link="{ path: 'setting' }">Setting</a>
          </li>
          <li>
            <a v-link="{ path: 'login' }">Login</a>
          </li>
        </ul>
        <form class="navbar-form navbar-right">
          <div class="form-group">
            <input type="text" placeholder="Email" class="form-control">
          </div>
          <div class="form-group">
            <input type="password" placeholder="Password" class="form-control">
          </div>
          <button type="submit" class="btn btn-success">{{ msg.signIn }}</button>
          <slot>沒有任何被插入的 el 所以你看到這段信息。</slot>
        </form>
      </div><!--/.navbar-collapse -->
    </div>
  </nav>
</template>

<script>
import Vue from 'vue'

export default {
  data () {
    return {
      msg: {
        titleName: 'my vue',
        signIn: 'Sign in'
      }
    }
  }
}
</script>

<style>

</style>
