<template>
  <div class="chinese">
    <menu-list :subTag="subTag" :name="name" :id="id"></menu-list>
  </div>
</template>

<script>
import menuList from 'components/content/navbar/menuList.vue';

import {getGradeSixNewJuniorData} from 'network/primary/gradesix.js';
  export default {
    data() {
      return {
        subTag:[],
        name: '',
        id:0,
      }
    },
    components: {
      menuList,
    },
    created() {
      // 请求数据
      getGradeSixNewJuniorData().then(res => {
        this.id = res.data.pTag.id
        this.name = res.data.pTag.name;
        this.subTag = res.data.pTag.subTag
      })
     
    },
  }
</script>

<style scoped>
.chinese{
  margin-top: 66px;
}

</style>