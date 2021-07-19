<template>
  <div id="home">
    <nav-bar class="nav-bar"><div slot="center1">购物商城</div></nav-bar>
    <tab-control
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabControl1"
      v-show="isTabControl"
      class="fixed"
    />

    <b-scroll
      ref="scroll"
      :probeType="3"
      @scroll="getBackTop"
      :pullingUp="true"
      @pullingUp="getloadMore"
    >
      <home-swiper :banners="banners" @imgLoad="swiperImgLoad"></home-swiper>
      <home-recommend :recommends="recommends" />
      <home-feature-view />
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl2"
      />
      <goods-list :goods="showGoods" />
    </b-scroll>
    <back-top @click.native="backClick" v-show="isShow"></back-top>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import HomeSwiper from "./homeChild/HomeSwiper.vue";
import TabControl from "../../components/content/tabControl/TabControl";

import HomeRecommend from "./homeChild/HomeRecommendView.vue";
import HomeFeatureView from "./homeChild/HomeFetaureView.vue";
import GoodsList from "../../components/content/goods/GoodsList";
import BScroll from "components/common/bscroll/BScroll.vue";
import BackTop from "../../components/content/backTop/BackTop.vue";

import { getHomeMultidata, getHomeGoods } from "network/home";
import { debounce } from 'common/utils'

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeatureView,
    TabControl,
    GoodsList,
    BScroll,
    BackTop,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShow: false,
      tabSetOffTop: 0,
      isTabControl: false,
      saveY: 0,
      itemImgListener: null
    };
  },

  mounted() {
    const newRefresh = debounce(this.$refs.scroll.refresh);

    this.itemImgListener = () => {
      newRefresh();
    }
    this.$bus.$on("itemImgLoad", this.itemImgListener);
  },
  /* destroyed() {
    console.log("destroyed");
  }, */
  activated() {
    this.$refs.scroll.refresh();
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getSaveY();
    // this.saveY = -1000;

    this.$bus.$off('itemImgLoad', this.itemImgListener);
  },
  created() {
    // 请求商品数据
    this.getHomeMultidata();

    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  methods: {
    /**
     * 监听事件方法
     */
    debounce(func, delay) {
      let timer = null;
      return function (...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(this, args);
        }, 50);
      };
    },
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;

        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    getBackTop(position) {
      // console.log(position);
      this.isShow = -position.y > 1000;
      this.isTabControl = -position.y > this.tabSetOffTop;
    },
    getloadMore() {
      this.getHomeGoods(this.currentType);
    },
    swiperImgLoad() {
      // 所有组件都有$el属性:用于获取组件中的元素
      // console.log(this.$refs.tabControl.$el.offsetTop);
      this.tabSetOffTop = this.$refs.tabControl2.$el.offsetTop;
    },

    /**
     * 网络请求方法
     */
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // console.log(res.data.recommend.list);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        // console.log(res.data.list);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        this.$refs.scroll.finishPullUp();
      });
    },
  },
};
</script>

<style scoped>
#home {
  margin-top: 44px;
  height: 100vh;
  position: relative;
}
.nav-bar {
  color: #fff;
  font-weight: 700;
  background-color: #ff5777;
  box-shadow: 0 1px 1px 2px rgba(100, 100, 100, 0.1);
}

.fixed {
  position: fixed;
  left: 0;
  right: 0;
  z-index: 5;
}

.wrapper {
  /* height: calc(100% -93px); */
  position: absolute;
  top: 0px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>