<template>
  <div class="find_course">
    <Title message="发现好课"></Title>
    <div class="find_course_content">
      <tab class="tab" v-for="(item,i) in discover.slice(0,3)" :key="i"  :discoverList="item"></tab>
    </div>
  </div>
</template>

<script>
import Title from 'components/content/title/Title.vue'
import Tab from './tab/Tab.vue'

export default {
  data () {
    return {
    }
  },
  components:{
    Title,Tab
    
  },
  props: {
    discover: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.find_course{
  width: 1180px;
  margin: 0 auto;
}
.find_course_content{
  display: flex;
}
.tab {
  flex: 1;
  overflow: hidden;
}
</style>