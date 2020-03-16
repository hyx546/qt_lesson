<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control ref="tabControl1" :titles="['流行','新款','精选']" 
        @tabClick="tabClick" class="tab-control" v-show="isTabFixed"/>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll" 
      @pullingUp="loadMore" @pull-up-load="true">
        <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
        <recommend-view :recommends="recommends"></recommend-view>
        <feature-view/>
        <tab-control ref="tabControl2" :titles="['流行','新款','精选']" 
        @tabClick="tabClick" v-show="!isTabFixed"></tab-control>
        <good-list :goods="showGoods"/>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import TabControl from 'components/content/tabControl/TabControl';
import GoodList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'

import HomeSwiper from './childComps/HomeSwiper';
import RecommendView from './childComps/RecommendView';
import FeatureView from './childComps/FeatureView';


import {getHomeMultidata,getHomeGoods} from 'network/home';
import {debounce} from 'common/utils.js';


export default {
  name: 'Home',
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {page:0, list:[]},
        'new': {page:0, list:[]},
        'sell': {page:0, list:[]},
      },
      currentType: 'pop',
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0
    }
  },
  components:{
    NavBar,
    TabControl,
    GoodList,
    Scroll,
    BackTop,
    
    HomeSwiper,
    RecommendView,
    FeatureView
  },
  created() {
    // 1.请求多个数据
    this.getHomeMultidata(),
    // 请求商品数据
    
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')

    
  },
  mounted() {
    // 1.图片加载完成的事件监听
    const refresh = debounce(this.$refs.scroll.refresh,500)

    // 监听item中图片加载完成
    this.$bus.$on('itemImageLoad', () => {
      refresh()
    })

    
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  activated() {
    this.$refs.scroll.scrollTo(0,this.saveY,0)

    this.$refs.scroll.refresh()
  },
  deactivated() {
    this.saveY = this.$refs.scroll.scroll.y
  },
  methods: {
    /**
     * 事件监听相关的方法
     */
    
    tabClick(index) {
      switch (index) {
        case 0 :
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = 'sell';
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;

    },
    backClick() {
      this.$refs.scroll.scrollTo(0,0,500)//500ms回到顶部
    },
    contentScroll(position) {
      // 1.判断BackTop 是否显示
      this.isShowBackTop = (- position.y) > 1000 ? true : false;

      // 2.决定tabCtrol是否吸顶（positon: fixed)
      this.isTabFixed = (-position.y) > this.tabOffsetTop
    },
    loadMore() {
      // 1.监听图片加载完
      this.getHomeGoods(this.currentType)

      // 2.刷新
      this.$refs.scroll.scroll.refresh()
    },
    swiperImageLoad() {
      // 2.获取tabcontrol的offsetTop
      // 所有的组件都有一个属性$el：用于获取组件中的元素
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    },


    /**
     * 网络请求相关的方法
     */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
      // console.log(res.data);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page +1
      getHomeGoods(type,page).then(res => {
          // console.log(res.data);
          //... 可以对数组进行解析为 ->，，，而不是数组 
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1
          // 完成上拉加载更多
          this.$refs.scroll.finishPullUp()
        })
     },

    }
  }

</script>

<style scoped>
#home{
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
}
.home-nav{
  background-color: var(--color-tint);
  color: #fff;

  /* 在使用浏览器原生滚动时，为了让导航栏不跟随一起滚动 */
  /* position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10; */
}

.content{
  overflow: hidden;

  position: absolute;
  bottom: 49px;
  top: 44px;
  left: 0;
  right: 0;
}

/* .content{
  height: calc(100% - 93px);
  overflow: hidden;
  margin-top: 44px;
} */

.tab-control{
  position: relative;
  z-index: 9;
}

</style>
