<template>
  <div>
    <div></div>
    <ul class="product">
      <li v-for="(item, index) in cartList">
        <check-buttom
          class="buttom"
          @click.native="btnClick(index)"
          :isCheck="cartList[index].checked"
        >
        </check-buttom>
        <img :src="cartList[index].topImage" alt="" />
        <p class="title">{{ cartList[index].title }}</p>
        <p class="desc">{{ cartList[index].desc }}</p>
        <p class="oldPrice">{{ cartList[index].oldPrice }}</p>
        <div class="count">×{{ cartList[index].count }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import CheckButtom from 'components/common/checkButtom/CheckButtom'

export default {
  name: 'CartListItem',
  components: {
    CheckButtom
  },
  props: {
    cartList: {
      type: Array,
      default() {
        return []
      }
    }


  },
  methods: {
    btnClick(index) {
      this.cartList[index].checked = !this.cartList[index].checked;
    },

  }
};
</script>

<style scoped>
.product li {
  list-style: none;
  height: 123px;
  font-size: 18px;
  padding: 12px;
  border-bottom: 2px solid #ccc;
}
.buttom {
  float: left;
  width: 20px;
  height: 20px;
  margin: 36px 8px 0 0;
}
.product img {
  float: left;
  width: 65px;
  border-radius: 5px;
  margin-right: 10px;
}
.product li span {
  display: inline-block;
}
.title,
.desc {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.title {
  color: #333;
  font-size: 15px;
  font-weight: 700;
}
.desc {
  font-size: 12px;
  padding: 10px 0;
}

.oldPrice {
  color: #ff4500;
  padding-top: 18px;
}
.count {
  float: right;
  width: 30px;
  height: 30px;
  margin-top: -20px;
}
</style>