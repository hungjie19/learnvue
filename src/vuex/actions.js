// action 會收到 store 作為它的第一個參數
// 既然我們只對事件的分發（dispatch 對象）感興趣。（state 也可以作為可選項放入）
// 我們可以利用 ES6 的解構（destructuring）功能來簡化對參數的導入
export const incrementCounter = function ({ dispatch, state }) {
  dispatch('INCREMENT', 1)
}

export const decrementCounter = function ({ dispatch, state }) {
  dispatch('DECREMENT', -1)
}

export const incrementAmountCounter = function ({ dispatch, state }, test) {
  console.log('incrementAmountCounter', test)
  dispatch('IncrementAmount', -1)
}
