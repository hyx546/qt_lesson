<template>
  <div class="Tab">
    <a :href="discoverList.url">
      <div class="tab">
        <img :src="discoverList.image" alt="">
        <h4 class="tab-title">{{discoverList.title}}</h4>
        <span>查看详情</span>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: [
    'discoverList'
  ]
}
</script>

<style scoped>
.tab{
  position: relative;
  top: 0;
  left: 0;
  width: 380px;
  height: 184px;
  border-radius: 4px;
}
.tab>img{
  width: 100%;
  height: 100%;
  border-radius: 4px;
}
.tab-title{
  font-size: 24px;
  position: relative;
  margin: 20px 0 0 20px;
  font-weight: 400;
  text-shadow: 0 0 3px rgba(0,0,0,.3);
  height: 61px;
  line-height: 1.3;
  overflow: hidden;
  padding: 0 20px 0 0;
  z-index: 100;
  color: #fff;
}
.tab>span{
  z-index: 100;
  color: #fff;
  position: absolute;
  left: 20px;
  bottom: 20px;
  display: inline-block;
  font-size: 14px;
  width: 90px;
  height: 32px;
  text-align: center;
  background: #ff773a;
  border-radius: 100px;
  line-height: 32px;
}
.Tab:hover{
  transform: translate(0, -10px);
  /* box-shadow: 10px 10px 5px #eaeaea; */
  cursor: pointer;
}
</style>