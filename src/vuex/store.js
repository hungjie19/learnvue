import Vue from 'vue'
import Vuex from 'vuex'

// 告訴 vue “使用” vuex
Vue.use(Vuex)

// 創建一個對象來保存應用啟動時的初始狀態
const state = {
  // TODO: 放置初始狀態
  count: 0
}

// 創建一個對象存儲一系列我們接下來要寫的 mutation 函數
const mutations = {
  // TODO: 放置我們的狀態變更函數
  INCREMENT (state, amount) {
    state.count = state.count + amount
  },
  DECREMENT (state, amount) {
    state.count = state.count + amount
  },
  IncrementAmount (state, amount) {
  	console.log('IncrementAmount:', amount)
    state.count = state.count + amount
  }
}

// 整合初始狀態和變更函數，我們就得到了我們所需的 store
// 至此，這個 store 就可以連接到我們的應用中
export default new Vuex.Store({
  state,
  mutations
})