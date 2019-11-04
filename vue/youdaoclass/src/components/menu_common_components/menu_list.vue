<template>
  <div class="container">
    <div class="menu-list" >
      <a href="#/menu_pages/primary">{{subject}}</a>
      <div class="menu-list-item" >
        <a :href="'#/menu_pages/'+mainpage">精选</a>
        <div></div>
      </div>
      <div class="menu-list-item" v-for="(item,index) in menuList" :key="index">
        <a :href="'#/menu_pages/page_primary/'+item.id" >
        {{item.name}}</a>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'menuList',
    'subject',
    'mainpage'
  ]
}
</script>

<style>
.menu-list{
  float: left;
  margin-top: 30px;
  margin-left: -15px;
}
.menu-list a{
  cursor: pointer;
}
.menu-list>a{
  font-size: 26px;
  color: #36404a;
  display: inline-block;
  margin: 0 40px 0 0;
  font-weight: 700;
}
.menu-list-item{
  font-size: 16px;
  padding-right: 30px;
  text-decoration: none;
  display: inline-block;
}
.menu-list-item>a{
  display: block;
  color: #818a92;
}
.menu-list-item:hover>div{
  opacity: 1;
}
.menu-list-item>div{

  opacity: 0;
  margin: 3px auto 0;
  width: 14px;
  height: 3px;
  background-image: linear-gradient(-90deg,#00d87d,#00db9d);
  border-radius: 100px;
  transition: opacity .3s;
}
</style>
