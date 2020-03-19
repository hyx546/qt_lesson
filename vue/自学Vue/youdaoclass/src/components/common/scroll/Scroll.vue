<template>
  <div id="scroll">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        windowHeight: '', // 可视窗口
        contentOffSetHeight: '', // 距离顶部的距离
        downT: '' //downT是监听滚动防抖用的。
      }
    },
    //  up 父组件传递的到达底部是触发的方法
    // bottomDistance 是可以设置到达底部距离多少的时候触发加载更多的方法。
    props: ['up','bottomDistance'],
    mounted() {
      if (history.scrollRestoration) {
        history.scrollRestoration = 'manual';
      }
      this.windowHeight = document.documentElement.clientHeight || document.body.clientHeight;//可视窗口高度
      this.contentOffSetHeight = document.getElementById('scroll').offsetTop;//容器距离顶部高度
      window.addEventListener('scroll', this.onScroll);
    },
    methods: {
      onScroll()
        {
          if (this.downTime) {
              clearTimeout(this.downTime);
          }
          this.downTime = setTimeout(() => {
              let contentHeight = document.getElementById('scroll').clientHeight;//容器高度 
              let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;//窗口滚动条高度    
              if (contentHeight + this.contentOffSetHeight - this.windowHeight - scrollTop <= (this.bottomDistance || 0)) {      //加载更多操作     
                  this.$emit('up')
              }
          }, 200)
        }
    },
    beforeDestroy() {
      window.scrollTo(0, 0);window.removeEventListener('scroll', this.onScroll)
    },
  }
</script>

<style lang="scss" scoped>

</style>