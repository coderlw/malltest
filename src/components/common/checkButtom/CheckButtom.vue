<template>
  <div class="check-bottom" :class="{ check: isCheck }">
    <img src="~assets/img/cart/tick.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: 'CheckButtom',
  props: {
    isCheck: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.check-bottom {
  border-radius: 10px;
  width: 20px;
  height: 20px;
  border: 1px solid #666;
}
.check {
  border-color: #ff8198;
  background-color: #ff8198;
}
</style>