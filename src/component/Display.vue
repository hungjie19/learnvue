<template>
  <div>
    <h3>Count is {{ counterValue }}</h3>
  </div>
</template>

<script>
import { getCount } from '../vuex/getters'
export default {
  vuex: {
    getters: {
      // 注意在這裡你需要 `getCount` 函數本身而不是它的執行結果 'getCount()'
      counterValue: getCount
    }
  }
}
</script>