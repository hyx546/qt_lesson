<template>
  <div class="container third">
    <div class="find_course">
      <Title message="发现好课"></Title>
      <div class="find_course_content">
        <Tab v-for="(item,i) in discoverList" :key="i"  :discoverList="item"></Tab>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api/index'
import Title from '../common_components/title'
import Tab from '../common_components/tab'
export default {
  data () {
    return {
      discoverList: []
    }
  },
  components:{
    Title,Tab
    
  },
  created () {
    api.getDiscoverInfo().then(res => {
      console.log(res)
      this.discoverList= res.discover
    })
  }
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