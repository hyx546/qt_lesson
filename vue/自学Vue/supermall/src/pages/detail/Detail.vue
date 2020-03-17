<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"/>
      <detail-swiper :top-images="topImages" />
      <detail-base-info  :goods="goods"/>
      <detail-shop-info :shop="shop"></detail-shop-info>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar';
import DetailSwiper from './childComps/DetailSwiper';
import DetailBaseInfo from './childComps/DetailBaseInfo';
import DetailShopInfo from './childComps/DetailShopInfo';

import Scroll from 'components/common/scroll/Scroll';

import {getDetail,Goods,Shop} from 'network/detail';

export default {
  name: "Detail",
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,

    Scroll
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {}
    }
  },
  created() {
    //  1.保存传入的iid
    this.iid = this.$route.params.iid

    // 2.根据iid请求详情数据
    getDetail(this.iid).then(res => {
      // 1.获取顶部的图片轮播信息
      const data = res.result;
      this.topImages = data.itemInfo.topImages

      // 2.获取商品
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

      // 3.创建店铺信息
      this.shop = new Shop(data.shopInfo)
    })
  }

}
</script>

<style scpoed>
#detail{
  /* height: 100vh; */
  position: relative;
  z-index:9 ;
  background-color: #fff;
}
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content{
  height: calc(100vh - 44px);
}
</style>