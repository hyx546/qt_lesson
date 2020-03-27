<template>
  <div>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {

    }
    },
    created() {
      console.log('home created');
    },
    destroyed() {
      console.log('home destroyed');
    }
}
</script>

<style>

</style>
