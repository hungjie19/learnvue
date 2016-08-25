<template>
  <div>
    <h1>{{ msg.title }}</h1>
    <slot>沒有任何被插入的 el 所以你看到這段信息。</slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: {
        title: 'slot'
      }
    }
  }
}
</script>

<style>

</style>
