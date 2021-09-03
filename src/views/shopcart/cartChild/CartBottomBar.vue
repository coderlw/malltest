<template>
  <div class="bottom-bar">
    <check-buttom
      class="buttom"
      :is-check="isSelectAll"
      @click.native="selectAllBtn"
    ></check-buttom>
    <p class="all-select">全选</p>
    <p class="total">合计:{{ totalPrice }}</p>
    <div class="shop" @click="goShop">去付款({{ count }})</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import CheckButtom from 'components/common/checkButtom/CheckButtom.vue';


export default {
  name: 'CartButtomBar',
  components: {
    CheckButtom
  },
  methods: {
    selectAllBtn() {
      if (this.isSelectAll) {
        this.cartList.forEach(item => item.checked = false);
      } else {
        this.cartList.forEach(item => item.checked = true);
      }
    },
    goShop() {
      if (!this.isSelectAll) {
        this.$toast.show('请选择商品~');
      }
    }
  },
  computed: {
    ...mapGetters(['cartList']),
    totalPrice() {
      return this.cartList.filter((item) => {
        return item.checked
      }).reduce((preValue, item) => {
        return preValue + item.lowPrice * item.count;
      }, 0).toFixed(2)
    },
    count() {
      return this.cartList.filter(item => {
        return item.checked;
      }).reduce((preValue, item) => {
        return preValue + item.count;
      }, 0)
    },
    isSelectAll() {
      if (this.cartList.length === 0) return false;
      //   return !(this.cartList.filter(item => !item.checked).length);
      return !this.cartList.find(item => {
        return !item.checked;
      })
      /*  for (let item of this.cartList) {
         if (!item.checked) {
           return false;
         }
       }
       return true; */
    }
  }
};
</script>

<style scoped>
.bottom-bar {
  position: fixed;
  bottom: 49px;
  left: 0;
  right: 0;
  height: 44px;
  background-color: #eee;
  padding-left: 8px;
}
.buttom {
  display: inline-block;
  margin-right: 6px;
}
.all-select {
  display: inline-block;
  line-height: 44px;
}
.total {
  display: inline-block;
  padding-left: 30px;
}
.shop {
  float: right;
  width: 100px;
  height: 44px;
  color: #fff;
  text-align: center;
  line-height: 44px;
  background-color: #ff8198;
}
</style>