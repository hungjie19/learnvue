// 這個 getter 函數會返回 count 的值
// 在 ES5 裡你可以寫成：
// export function getCount (state) {
//   return state.count
// }

// 在 ES6 裡你可以寫成：
export const getCount = state => state.count