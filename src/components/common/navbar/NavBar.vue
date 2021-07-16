<template>
  <div class="nav-bar">
    <div class="left"><slot name="left1"></slot></div>
    <div class="center"><slot name="center1"></slot></div>
    <div class="right"><slot name="right1"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoed>
.nav-bar {
  position: relative;
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;

  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 5;
}
.left,
.right {
  width: 60px;
}
.center {
  flex: 1;
}
</style>