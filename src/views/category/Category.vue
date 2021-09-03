<template>
  <div class="category">
    <nav-bar class="nav-bar">
      <div slot="center1">商品分类</div>
    </nav-bar>
    <category-slide-bar
      :slideBarLists="slideBarLists"
      @subcategory="subcategoryClick"
    ></category-slide-bar>
    <b-scroll class="scroll-content">
      <subcategory :subLists="subLists"></subcategory>
      <tab-control :titles="titleList" @tabClick="tabClick"></tab-control>
      <goods-list :goods="categoryDetailList"></goods-list>
    </b-scroll>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import { getCategory, getSubcategory, getCategoryDetail } from 'network/category'
import CategorySlideBar from './categoryChild/CategorySlideBar.vue'
import Subcategory from './categoryChild/Subcategory.vue'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList.vue'

import BScroll from 'components/common/bscroll/BScroll'

export default {
  name: "Category",
  components: {
    NavBar,
    CategorySlideBar,
    Subcategory,
    TabControl,
    GoodsList,

    BScroll,



  },
  data() {
    return {
      slideBarLists: [],
      subLists: [],
      titleList: ['流行', '新款', '精选'],
      currentIndex: 0,
      categoryDetailList: [],

    }
  },
  methods: {
    subcategoryClick({ maitKey, index }) {
      this.currentIndex = index;
      this.getSubcategory(maitKey);


    },
    getSubcategory(key) {
      getSubcategory(key).then(res => {
        this.subLists = res.data.list;
      })
    },
    tabClick(index) {
      const typeList = ["pop", "new", "sell"];
      this.getCategoryDetail(this.slideBarLists[this.currentIndex].miniWallkey, typeList[index]);
    },
    getCategoryDetail(key) {
      getCategoryDetail(key).then(res => {
        this.categoryDetailList = res;
      })
    }
  },
  created() {
    getCategory().then(res => {
      const data = res.data.category.list;
      this.slideBarLists = data;

      this.$nextTick(() => {
        this.getSubcategory(this.slideBarLists[0].maitKey);
        this.getCategoryDetail(this.slideBarLists[0].miniWallkey, "pop");
      })
    });
  },

};
</script>

<style scoed>
.category {
  position: relative;

  height: 100vh;
}
.nav-bar {
  position: relative;
  color: #fff;
  font-weight: 700;
  background-color: #ff5777;
  box-shadow: 0 1px 1px 2px rgba(100, 100, 100, 0.1);
}
.scroll-content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 140px;
  right: 0px;
  /* overflow: hidden; */
}
</style>