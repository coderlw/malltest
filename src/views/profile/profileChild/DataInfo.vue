<template>
  <div class="data-info">
    <div class="item">
      <p><i>666.00</i>元</p>
      <p>我的余额</p>
    </div>
    <div class="item">
      <p><i>8</i>个</p>
      <p>我的优惠券</p>
    </div>
    <div class="item">
      <p><i>20</i>分</p>
      <p>我的积分</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DataInfo'
};
</script>

<style scoped>
.data-info {
  display: flex;
  text-align: center;
  padding: 20px 10px;
  background-color: #fff;
}
.item {
  flex: 1;
}
.item i {
  color: var(--color-tint);
  font-size: 22px;
  font-weight: 700;
  padding-bottom: 5px;
  padding-right: 3px;
}
</style>