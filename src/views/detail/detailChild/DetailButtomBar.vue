<template>
  <div id="buttom-bar">
    <div>
      <div class="item">
        <i class="icon bg-1"></i>
        <span class="text">客服</span>
      </div>
      <div class="item">
        <i class="icon bg-2"></i>
        <span class="text">店铺</span>
      </div>
      <div class="item">
        <i class="icon bg-3"></i>
        <span class="text">收藏</span>
      </div>
      <div class="cart" @click="addCart">
        <span>加入购物车</span>
      </div>
      <div class="shop">
        <span>购买</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailButtomBar',
  methods: {
    addCart() {
      this.$emit('addCart');
    }
  }
};

</script>

<style scoped>
#buttom-bar {
  height: 60px;
  background-color: #fff;

  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
.item {
  float: left;
  width: 63px;

  text-align: center;

  padding-top: 5px;
}
.icon {
  display: inline-block;
  width: 35px;
  height: 35px;
  background: url("~assets/img/detail/detail_bottom.png") no-repeat center 0/100%;
}
.bg-1 {
  background-position: 0 -85px;
}
.bg-2 {
  background-position: 0 -155px;
}
.bg-3 {
  background-position: 0 2px;
}
.text {
  display: block;
  font-size: 13px;
}
.cart,
.shop {
  float: left;
  width: 93px;
  height: 60px;
  font-size: 18px;
  text-align: center;
  line-height: 60px;
  background-color: #fbe417;
}
.cart {
  color: #333;
}
.shop {
  color: #fff;
  background-color: #fa6698;
}
</style>
