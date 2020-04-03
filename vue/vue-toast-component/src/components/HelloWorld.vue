<template>
  <div>
    <!-- v-show v-bind v-if 指令-->
    <button @click="handleToast">购买</button>
    <!-- <toast msg="测试弹窗1" :visiable="visiable"></toast> -->
  </div>
</template>

<script>
//alter

// import Toast from './Toast/index'
import showMessage from './Toast/index.js'
export default {
  name: 'HelloWorld',
  components: {
    // Toast,
  },
  data () {
    return {
      visiable: false
    }
  },
  methods: {
    handleToast() {
      // this.visiable = true
      // setTimeout(() => {
      //   this.visiable = false
      // }, 3000);
      showMessage('没到开售时间')
    }
  }
}
</script>

<style scoped>
</style>