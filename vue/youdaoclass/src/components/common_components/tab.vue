<template>
  <div class="container forth">
    <div class="tab">
      <img :src="tab_img" alt="">
      <h4>{{tab_title}}</h4>
      <span>{{tab_detail}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: [
    'tab_img',
    'tab_title',
    'tab_detail',
  ]
}
</script>

<style>
.container.forth{
  display: inline-block;
  position: relative;
}
.tab{
  /* position: absolute; */
  width: 360px;
  height: 184px;
  border-radius: 4px;
}
.tab>img{
  width: 100%;
  height: 100%;
  border-radius: 4px;
}
.tab>h4{
  font-size: 24px;
  top: 0;
  position: absolute;
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
.container.forth:hover{
  transform: translate(0, -10px);
  /* box-shadow: 10px 10px 5px #eaeaea; */
  cursor: pointer;
}
</style>