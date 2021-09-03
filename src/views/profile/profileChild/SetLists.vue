<template>
  <div class="set-lists">
    <ul class="my-set">
      <li>我的消息</li>
      <li>积分商城</li>
      <li>会员卡</li>
    </ul>
    <ul class="other-set">
      <li>我的购物车</li>
      <li>联系我们</li>
      <li>下载APP</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SetLists'
};
</script>

<style scoped>
.my-set {
  margin-top: 20px;
  background-color: #fff;
}
.other-set {
  margin-top: 20px;
  background-color: #fff;
}
li {
  height: 40px;
  color: #333;
  font-size: 16px;
  line-height: 40px;
  padding-left: 15px;
  border-bottom: 1px solid #aaa;
}
</style>