<template>
  <div class="container third">
    <div class="find_course">
      <Title message="发现好课"></Title>
      <div class="find_course_content">
        <Tab tab_img="https://oimagec3.ydstatic.com/image?id=-2237995508089830497&product=xue"
        tab_title="实战陪练口语，敢试吗" tab_detail="查看详情"></Tab>

        <Tab tab_img="https://oimagec2.ydstatic.com/image?id=7369061754901730224&product=xue"
        tab_title="【小学】什么学习方法才是最适合孩子的" tab_detail="查看详情"></Tab>

        <Tab tab_img="https://oimagea1.ydstatic.com/image?id=317440018738117804&product=xue"
        tab_title="高考语文: 古诗词大题怎么做能满分？" tab_detail="查看详情"></Tab>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '../common_components/title'
import Tab from '../common_components/tab'
export default {
  data () {
    return {

    }
  },
  components:{
    Title,Tab
    
  },
}
</script>

<style>
.container.third{
  display: inline-block;
  /* margin-top: 75px; */
  margin-left: -10px;
}
.find_course_content{
  display: flex;
}

</style>