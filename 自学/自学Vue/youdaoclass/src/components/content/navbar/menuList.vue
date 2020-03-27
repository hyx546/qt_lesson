<template>
    <div class="menu-list" >
      <router-link :to="'/tag/'+ id "><span class="title">{{name}}</span></router-link>
      <div class="menu-list-item">
        <router-link :to="'/tag/' + id" ><span class="mainpage" @click="currentClick1">精选</span></router-link>
        <div :class="{active: current === -1}"></div>
      </div>
      <div class="menu-list-item" v-for="(item,index) in subTag" :key="index">
        <router-link :to="'/tag/'+item.id"><span  @click="currentClick(index)">{{item.name}}</span></router-link>
        <div :class="{active: index === current}"></div>
      </div>
    </div>
</template>

<script scoped>
export default {
  data() {
    return {
      current: -1
    }
  },
  props: {
    subTag:{
      type: Array,
      default() {
        return []
      }
    },
    name: {
      type: String
    },
    id: {
      type: Number
    }
  },
  methods: {
    currentClick(index) {
      this.current = index
    },
    currentClick1() {
      this.current = -1
    }
  },
  
}
</script>

<style scoped>
.menu-list{
  width: 1180px;
  margin: 30px auto;
  margin-top: 100px;
  margin-bottom: 20px;
}
.title{
  font-size: 25px;
  font-weight: 450;
  margin-right: 4%;
}
.menu-list span{
  cursor: pointer;
}
.menu-list-item{
  display: inline-block;
  font-size: 16px;
  padding-right: 25px;
}
.menu-list-item span {
  font-weight: 200;
  color: #818a92 !important;
}
.active{
  margin: 3px auto 0;
  width: 20px;
  height: 3px;
  background-image: linear-gradient(-90deg,#00d87d,#00db9d);
  border-radius: 100px;
  -webkit-transition: opacity .3s;
  -o-transition: opacity .3s;
  transition: opacity .3s;
}
</style>
