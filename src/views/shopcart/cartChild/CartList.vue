<template>
  <div class="cart-list">
    <b-scroll class="content" ref="scroll">
      <cart-list-item :cartList="cartList">
        <div>{item}</div>
      </cart-list-item>
    </b-scroll>
  </div>
</template>

<script>
import BScroll from 'components/common/bscroll/BScroll';
import { mapGetters } from 'vuex';

import CartListItem from './CartListIetm.vue'


export default {
  name: 'CartList',
  components: {
    BScroll,
    CartListItem,

  },
  computed: {
    ...mapGetters(['cartList'])
  },
  activated() {
    this.$refs.scroll.refresh();
  }
};

</script>

<style scoped>
.cart-list {
  height: 100%;
}
.content {
  position: absolute;
  top: 44px;
  right: 0;
  bottom: 49px;
  left: 0;
}
</style>