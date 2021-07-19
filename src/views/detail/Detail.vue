<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" />
    <b-scroll class="content" ref="scorll">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-item-params :paramInfo="paramInfo"></detail-item-params>
      <detail-goods-info
        :detailInfo="detailInfo"
        @imgLoad="imgLoad"
      ></detail-goods-info>
      <detail-commer :commer="commer"></detail-commer>
      <goods-list :goods="recommend" />
    </b-scroll>
  </div>
</template>

<script>
import DetailNavBar from "./detailChild/DetailNavBar.vue";
import { getDetailData, Goods, Shop, ParamInfo, getRecommend } from "network/detail";
import DetailSwiper from "./detailChild/DetailSwiper.vue";
import DetailBaseInfo from "./detailChild/DetailBaseInfo.vue";
import DetailShopInfo from "./detailChild/DetailShopInfo.vue";
import DetailGoodsInfo from "./detailChild/DetailGoodsInfo.vue"
import DetailItemParams from "./detailChild/DetailItemParams.vue"
import DetailCommer from './detailChild/DetailCommer.vue';
import GoodsList from 'components/content/goods/GoodsList'
import { itemListenerMixin } from 'common/mixin'

import BScroll from "components/common/bscroll/BScroll"




export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailItemParams,
    DetailCommer,
    GoodsList,
    BScroll,
  },
  mixins: [itemListenerMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commer: {},
      recommend: [],
      itemImgListener: null
    };
  },
  created() {
    this.iid = this.$route.params.iid;

    getDetailData(this.iid).then((res) => {
      const data = res.result;
      this.topImages = data.itemInfo.topImages;
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo);
      this.shop = new Shop(data.shopInfo);
      this.detailInfo = data.detailInfo;
      // console.log(this.shop);
      this.paramInfo = new ParamInfo(data.itemParams.info, data.itemParams.rule);
      this.commer = data.rate;
    });
    getRecommend().then((res) => {
      this.recommend = res.data.list;
    })
  },
  mounted() {
    console.log('bbbbbb');
  },
  distroyed() {
    this.$bus.$off('itemImgLoad', this.itemImgListener);
  },
  methods: {
    imgLoad() {
      this.$refs.scorll.refresh();
    }
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 5;
  background-color: #fff;

  height: 100vh;
}
.content {
  height: calc(100% - 44px);
}
</style>