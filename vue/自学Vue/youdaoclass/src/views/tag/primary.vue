<template>
  <div class="primary">
    <menu-list :subTag="subTag" :name="name" :id="id"></menu-list>
  </div>
</template>

<script>
import menuList from 'components/content/navbar/menuList.vue';

import {getPrimaryData} from 'network/primary.js';
  export default {
    data() {
      return {
        id: 0,
        name: '',
        subTag: [],
      }
    },
    components: {
      menuList
    },
    created() {
      // 请求数据
      getPrimaryData().then(res => {
        console.log(res)
        this.data = res.data;
        this.id = res.data.id
        this.name = this.data.name;
        this.subTag = this.data.subTag
      })
    },
  }
</script>

<style scoped>
.primary{
  margin-top: 66px;
  height: 300px;
}
</style>