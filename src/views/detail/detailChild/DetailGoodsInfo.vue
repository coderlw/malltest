<template>
  <div id="detail-goods-info">
    <div class="goods-desc">{{ detailInfo.desc }}</div>
    <div class="img-list" v-for="(item, index) in detailInfo.detailImage">
      <div class="key">{{ item.key }}</div>
      <img
        v-for="(item, index) in detailInfo.detailImage[index].list"
        :src="item"
        alt=""
        @load="imgLoad"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailGoodsInfo.vue',
  data() {
    return {
      counter: 0,
      imagesLength: 0,
    }
  },
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imgLoad() {

      // if (++this.counter === this.imagesLength) {
      this.$emit('imgLoad');
      // }
    }
  },
  watch: {
    imagesInfo() {
      this.imagesLength = this.imagesInfo.detailImage[0].list.length;
    }
  }
};
</script>

<style scoped>
.goods-desc {
  color: #999;
  padding: 10px;
}
.key {
  font-weight: 700;
  padding: 10px;
}
.img-list img {
  width: 100%;
}
.a {
  height: 20px;
  background-color: #999;
}
</style>