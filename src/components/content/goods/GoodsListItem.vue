<template>
  <div class="goods-item">
    <a href="JavaScript:;">
      <img v-lazy="showImg" alt="" @load="imgLoad" @click="itemClick" />
      <div class="item-info">
        <p class="title">{{ goodsItem.title }}</p>
        <span class="price">{{ goodsItem.price }}</span>
        <span class="collect">{{ goodsItem.cfav }}</span>
      </div>
    </a>
  </div>
</template>

<script>

export default {
  name: "GoodsListItem",
  data() {
    return {
      show: null,
    };
  },
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    showImg() {
      return this.goodsItem.image || this.goodsItem.img || this.goodsItem.show.img;
    }
  },
  methods: {
    imgLoad() {
      this.$bus.$emit("itemimgLoad");
    },
    itemClick() {
      this.$router.push("/detail/" + this.goodsItem.iid);
    },
  },
};
</script>

<style scoed>
.goods-item {
  font-size: 15px;
  width: 48%;
  padding-bottom: 5px;
  /* position: relative; */
}
.goods-item img {
  width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 5px;
}
/* .item-info {
  position: absolute;
  left: 0px;
  right: 0px;
} */
.item-info .title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.item-info .price {
  color: #ff8198;
  padding: 0 10px;
}

.item-info .collect::before {
  display: inline-block;
  content: "";
  background: url("~assets/img/common/collect.svg") no-repeat 0 0/14px 14px;
  width: 14px;
  height: 13px;
}
</style>