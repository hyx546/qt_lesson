<template>
  <div class="list">
    <div class="navigation_bar_list">
      <div class="list_items" v-for="(item,index) in fixedEntries" :key="index" >
         <div v-if="index < 13" @mouseover="overTag(index)" @mouseout="outTag">
          <router-link :to="'/tag/'+ item.id" class="list_item" >
           {{item.tag.name}}</router-link> 
            <span class="item_hover" :class="{active:currentIndex === index }"></span>
          <div class="item_items"  :class="{active:currentIndex === index}">
            <router-link :to="'/tag/'+ subject.id" class="item_item" v-for="(subject,i) in item.tag.subTag" :key="i" @mouseover.native="overTagItem(i)" @mouseout.native="outTagItem"
            :class="{active:currentIndexItem === i}">{{subject.name}}</router-link>
          </div>
         </div>
          <span class="list_item" v-show="index ===13">
            <span class="_30-7U"></span>
          </span>
          <div class="item_items" v-show="index ===13">
          <router-link :to="'/tag/'+ item.id" class="item_item ">{{item.tag.name}}</router-link>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentIndex: -1,
      currentIndexItem: -1,
    }
  },
  props: {
    fixedEntries: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    overTag(index) {
      this.currentIndex = index;
    },
    overTagItem(i) {
      this.currentIndexItem = i;
    },
    outTag() {
      this.currentIndex = -1;
    },
    outTagItem() {
      this.currentIndexItem = -1;
    },
  },
}
</script>

<style scoped>
.list{
  margin-top: 66px;
  background: #fff;
  height: 50px;
  text-align: justify;
  font-weight: 300;
  box-shadow: inset 0 2px 4px 0 rgba(0,0,0,.05);
  border-bottom: 1px solid #eee;
}
.navigation_bar_list{
  width: 1180px;
  margin: 0 auto;
}
.list_items{
  display: inline-block;
  position: relative;
  
}
.list_item{
  font-weight: 300;
  font-size: 14px;
  color: #818a92;
  letter-spacing: 0;
  line-height: 50px;
  margin-right: 40px;
  text-align: center;
  display: block;
  width: 100%;
  
}
.list_item .title{
  font-weight: 300;
  font-size: 14px;
  color: #818a92;
  letter-spacing: 0;
  line-height: 50px;
  margin-right: 40px;
  text-align: center;
  display: block;
  width: 100%;
}
.item_hover{
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  display: block;
  width: 14px;
  height: 3px;
  background-image: linear-gradient(-90deg,#00d87d,#00db9d);
  border-radius: 100px;
  top: 40px;
  transition: opacity .3s;
}
.active.item_hover{
  opacity: 1;
}
.item_items{
  display: none;
  top: 50px;
  padding: 0 20px;
  background: hsla(0,0%,100%,.96);
  min-width: 110px;
  text-align: center;
  border: 1px solid #ebebeb;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.05);
  transition: opacity .1s ease-in-out,margin-top .2s ease-in-out,visibility .2s ease-in-out;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
}
.item_items.active{
  /* opacity: 1;
   */
   display: inline-block;
}
.item_item{
  display: block;
  font-size: 14px;
  color: #818a92;
  letter-spacing: 0;
  height: 46px;
  line-height: 46px;
  border-bottom: 1px solid #ebebeb;
  overflow: hidden;
}
.item_item.active{
  cursor: pointer;
  color: #333;
  border-bottom: 1px solid #000;
}
._30-7U {
  display: inline-block;
  height: 3px;
  width: 15px;
  background: url(https://shared-https.ydstatic.com/ke/web/v1.1.5/69ddea54.png) 0 0 no-repeat;
}
</style>
