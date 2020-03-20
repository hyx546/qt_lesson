<template>
  <div class="Title">
    <h2 class="msg">{{message}}</h2>
    <slot name="more"></slot>
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

<style scoped>
.Title{
  display: block;
  margin: 30px 0 ;
}
.msg{
  color: rgba(0, 0, 0, 0.863);
}
</style>