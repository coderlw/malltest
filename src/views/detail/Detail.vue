<template>
  <div id="detail">
    <detail-nav-bar @titleClick="titleClick" class="detail-nav" ref="nav" />
    <b-scroll
      class="content"
      ref="scroll"
      probe-type="3"
      @scroll="contentScroll"
    >
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-item-params
        ref="params"
        :paramInfo="paramInfo"
      ></detail-item-params>
      <detail-goods-info
        :detailInfo="detailInfo"
        @imgLoad="imgLoad"
      ></detail-goods-info>
      <detail-commer ref="commer" :commer="commer"></detail-commer>
      <goods-list :goods="recommend" ref="recommend" />
    </b-scroll>
    <detail-buttom-bar @addCart="addToCart" />
    <back-top @click.native="backTop" v-show="isShow" />
    <!-- <toast :message="message" :isShow="isShow"></toast> -->
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
import { itemListenerMixin, backTopMixin } from 'common/mixin'
import DetailButtomBar from './detailChild/DetailButtomBar.vue'
// import Toast from 'components/common/toast/Toast.vue'

import { debounce } from 'common/utils'
import { mapActions } from 'vuex'

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
    DetailButtomBar,
    // Toast,

    BScroll,
  },
  mixins: [itemListenerMixin, backTopMixin],
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
      itemImgListener: null,
      themeTopYs: [],
      getThemeTopY: null,
      currentIndex: 0,
      /* message: '',
      isShow: false */

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
    });

    this.getThemeTopY = debounce(() => {
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      this.themeTopYs.push(this.$refs.commer.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      this.themeTopYs.push(Number.MAX_VALUE);
      // console.log(this.themeTopYs);
    }, 100)
  },
  mounted() {


  },
  distroyed() {
    this.$bus.$off('itemImgLoad', this.itemImgListener);
  },
  methods: {
    ...mapActions(['addCart']),

    imgLoad() {
      // console.log('--------');
      // this.$refs.scroll.refresh();

      //  let newRefresh = debounce(this.$refs.scroll.refresh, 100);
      this.newRefresh()
      this.getThemeTopY();
    },
    titleClick(index) {
      // console.log(index);
      // console.log(-this.themeTopYs[index]);
      this.$refs.scroll.scrollTo(0, - this.themeTopYs[index], 100);
    },

    contentScroll(position) {
      let positionY = -position.y;
      for (var i = 0; i < this.themeTopYs.length; i++) {
        // i !== this.currentIndex && (i < this.themeTopYs.length - 1 && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i + 1] || i == this.themeTopYs.length - 1 && positionY >= this.themeTopYs[i])
        if (i !== this.currentIndex && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i + 1]) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex
        }
      };
      this.positionListener(position);
    },
    addToCart() {
      const product = {};
      product.iid = this.iid;
      product.topImage = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.oldPrice = this.goods.oldPrice;
      product.lowPrice = this.goods.lowPrice;

      this.addCart(product).then((res) => {
        /*  this.isShow = true;
         this.message = res;
 
         setTimeout(() => {
           this.isShow = false;
           this.message = '';
         }, 1500); */

        this.$toast.show(res, 3000);

      })

      // this.$store.commit('addCart', product);
      /* this.$store.dispatch('addCart', product).then((res) => {
        console.log(res);
      }) */

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