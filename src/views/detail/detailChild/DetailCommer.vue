<template>
  <div id="commer">
    <div>easrtggg</div>
    <div class="title">
      <span class="user-commer">用户评价</span>
      <span class="more">更多</span>
    </div>
    <div class="user-info">
      <img :src="commer.list[0].user.avatar" alt="" />
      <span>{{ commer.list[0].user.uname }}</span>
    </div>
    <div class="content">{{ commer.list[0].content }}</div>
    <div class="time-info">
      <span>{{ commer.list[0].created }}</span>
      <span>{{ commer.list[0].style }}</span>
    </div>
    <div class="img" v-if="item in commer.list[0].images.length !== 0">
      <img v-for="item in commer.list[0].images" :src="item" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailCommer',
  props: {
    commer: {
      type: Object,
      default() {
        return {}
      }
    }
  }
};
</script>

<style scoped>
/* .commer {
  width: 100%;
  height: 1000px;
  margin-top: 10px;
} */
/* .title .user-commer {
  font-size: 20px;
  font-weight: 700;
} */
</style>