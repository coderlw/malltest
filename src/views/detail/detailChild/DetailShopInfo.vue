<template>
  <div class="shopInfo">
    <div class="shop">
      <img :src="shop.logo" alt="" />
      <span>{{ shop.name }}</span>
    </div>
    <div class="shopSells">
      <span>{{ shop.sells }}</span>
      <span class="padding-top">总销量</span>
    </div>
    <div class="shopGoods">
      <span>{{ shop.goods }}</span>
      <span class="padding-top">全部宝贝</span>
    </div>
    <div class="shopDesc">
      <table>
        <tr v-for="(item, index) in shop.score">
          <td>{{ item.name }}</td>
          <td class="gActive" :class="{ redActive: item.isBetter }">
            {{ item.score }}
          </td>
          <td class="wgActive" :class="{ wredActive: item.isBetter }">
            <span> {{ item.isBetter ? "高" : "低" }}</span>
          </td>
        </tr>
      </table>
    </div>
    <div class="bottom-shop">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.shopInfo {
  padding: 10px;
}
.shop {
  height: 30px;
}
.shopInfo img {
  width: 40px;
  vertical-align: middle;
  margin-right: 20px;
}
.shopSells,
.shopGoods {
  float: left;
  width: 68px;
  height: 40px;
  text-align: center;
  margin-top: 40px;
}
.padding-top {
  display: block;
  padding-top: 3px;
}

.gActive {
  color: green;
}
.redActive {
  color: red;
}
.wgActive span {
  background-color: green;
  color: #fff;
}
.wredActive span {
  background-color: red;
}
table {
  float: right;
  margin-top: 30px;
}
table td {
  padding-right: 12px;
}
.bottom-shop {
  width: 120px;
  padding-top: 100px;
  margin: 20px auto;
}
.enter-shop {
  color: #333;
  height: 32px;
  font-size: 14px;
  text-align: center;
  line-height: 30px;
  background-color: #f2f5f8;
  border-radius: 15px;
}
</style>
