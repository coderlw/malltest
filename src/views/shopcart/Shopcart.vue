<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="center1">购物车({{ cartLength }})</div>
    </nav-bar>
    <cart-list />
    <cart-bottom-bar>adgerg</cart-bottom-bar ignore>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

import CartList from './cartChild/CartList.vue';
import CartBottomBar from './cartChild/CartBottomBar.vue';

import { mapGetters } from 'vuex'

export default {
  name: "Shopcart",
  components: {
    NavBar,
    CartList,
    CartBottomBar

  },
  data() {
    return {
      message: "购物车",
    };
  },
  methods: {

  },
  computed: {
    ...mapGetters(['cartLength', 'cartList'])
    /*  ...mapGetters({
       length: 'cartLength',
       lists: 'cartList'
     }) */
    /* cartLength() { 
      // return this.$stu,ore.state.cartList.length;
      return this.$store.getters.cartLength;
  } */
  }
};
</script>

<style scoped>
.nav-bar {
  color: #fff;
  height: 44px;
  font-size: 20px;
  background-color: var(--color-tint);
}
</style>