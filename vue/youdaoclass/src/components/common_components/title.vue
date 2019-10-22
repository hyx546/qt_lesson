<template>
  <div class="container Title1">
    <h2 class="msg">{{message}}</h2>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: ['message']
}
</script>

<style>
.container.Title1{
  margin-top: 75px;
}
.msg{
  float: left;
  margin-top: -50px;
  font-weight: bold;
}
</style>