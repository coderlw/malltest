<template>
  <div>
    <div id="commer" v-if="Object.keys(commer).length !== 0">
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
        <span>{{ commer.list[0].created | showDate }}</span>
        <span>{{ commer.list[0].style }}</span>
      </div>
      <div class="img-info">
        <img v-for="item in commer.list[0].images" :src="item" alt="" />
      </div>
    </div>
    <div class="title" style="color: red" v-else>暂无用户评论</div>
  </div>
</template>

<script>
import { formatDate } from "common/utils.js"

export default {
  name: 'DetailCommer',
  props: {
    commer: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    showDate: function (value) {
      let date = new Date(value * 1000);
      return formatDate(date, "yyyy-MM-dd hh:mm");
    }
  }
};
</script>

<style scoped>
#commer {
  width: 100%;
  margin-top: 20px;
  border-top: 1px solid rgba(100, 100, 100, 0.1);
  padding: 10px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.title {
  height: 50px;
  padding: 10px 0;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.title .user-commer {
  font-size: 20px;
  font-weight: 700;
}
.more {
  float: right;
  font-size: 14px;
  padding-right: 15px;
}
.user-info {
  padding: 20px 0;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.user-info img {
  width: 50px;
  border-radius: 40px;
  vertical-align: middle;
}
.user-info span {
  font-size: 14px;
  padding-left: 10px;
}
.content {
  padding: 20px 10px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.time-info {
  font-size: 12px;
  color: #999;
  margin-top: 10px;
}
.time-info span {
  padding-right: 10px;
}
.img-info img {
  width: 30%;
  margin: 10px 5px 0 0;
}
</style>