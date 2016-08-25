// vue
import Vue from 'vue'
import VueRouter from 'vue-router'

// root
import App from './app.vue'

// page
import Home from './page/home.vue'
import Setting from './page/setting.vue'
import Login from './page/login.vue'
import VuexPage from './page/vuex.vue'

Vue.use( VueRouter )

export var router = new VueRouter()

// 定義路由
router.map({
  '/home': {
    component: Home
  },
  '/setting': {
    component: Setting
  },
  '/login': {
    component: Login
  },
  '/vuex': {
    component: VuexPage
  }
})

// 預設路由
router.redirect({
  '*': '/vuex'
})

// 啟動路由並將 root component 掛載到 HTML 中 id="app" 的 DOM 上
router.start(App, '#app')