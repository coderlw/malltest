<template>
  <div>
    <detail-nav-bar />
    <detail-swiper :topImages="topImages"></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
    <detail-shop-info :shop="shop"></detail-shop-info>
  </div>
</template>

<script>
import DetailNavBar from "./detailChild/DetailNavBar.vue";
import { getDetailData, Goods, Shop } from "network/detail";
import DetailSwiper from "./detailChild/DetailSwiper.vue";
import DetailBaseInfo from "./detailChild/DetailBaseInfo.vue";
import DetailShopInfo from "./detailChild/DetailShopInfo.vue";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
    };
  },
  created() {
    this.iid = this.$route.params.iid;

    getDetailData(this.iid).then((res) => {
      const data = res.result;
      console.log(res);
      this.topImages = data.itemInfo.topImages;
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo);
      this.shop = new Shop(data.shopInfo);
      console.log(this.shop);
    });
  },
  methods: {},
};
</script>

<style scoed>
</style>