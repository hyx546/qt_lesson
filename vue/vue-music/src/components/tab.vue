<template>
  <div class="tab">
    <router-link tag="div" to="/recommend" class="tab-item"> <!-- 使用router-link标签点击会自动生成两个类名的 -->
    <span class="tab-link">推荐</span>
    </router-link>
    <router-link tag="div" to="/singer" class="tab-item">
    <span class="tab-link">歌手</span>
    </router-link>
    <router-link tag="div" to="/rank" class="tab-item">
    <span class="tab-link">排行</span>
    </router-link>
    <router-link tag="div" to="/search" class="tab-item">
    <span class="tab-link">搜索</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'tab'
}
</script>

<style lang="stylus" scoped>
@import '../assets/css/function.styl'
.tab
  display flex
  height px2rem(88)
  line-height px2rem(88)
  font-size 14px
  .tab-item
    flex 1
    text-align center
    color hsla(0, 0%, 100%, 0.5)
    .tab-link
      padding-bottom 5px
    &.router-link-active
      .tab-link
        color #ea2448
        border-bottom 2px solid #ea2448
</style>