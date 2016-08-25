<template>
  <div class="jumbotron">
    <div class="container">
      <h1>{{ msg.title }}</h1>
      <p>{{ msg.content }}</p>
      <p>
        <a class="btn btn-primary btn-lg" href="#" role="button">{{ msg.more }}</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: {
        title: 'Hello, contact!',
        content: 'This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.',
        more: 'Learn more &raquo;'
      }
    }
  }
}
</script>

<style>

</style>
