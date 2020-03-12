<template>
  <div class="tab-bar-item" @click="itemClick">
    <!-- 插槽会被直接替换，所有最好在插槽外面包装一个div -->
    <div v-if="!isActive"> <slot name="item-icon"></slot></div>
    <div v-else> <slot  name="item-icon-active"></slot> </div>
    <div :style="activeStyle"> <slot name="item-text" ></slot> </div>
  </div>

</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return {
      // isActive: false,
    }
  },
  computed: {
    isActive() {
      // /home -> item1(/home) =true
      // 否则为false
      // indexOf ！== -1 就找到了
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      // 需要用户返回，用push，不需要就用replace
      this.$router.replace(this.path);
    }
  }
}
</script>

<style >
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img{
  width: 24px;
  height: 24px;
  margin-top: 3px;
  /* 去除图片自身带的空隙 */
  vertical-align: middle;
}
/* .active {
  color: rgb(255, 0, 149);
} */
</style>
