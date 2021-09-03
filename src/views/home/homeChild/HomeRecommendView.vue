<template>
  <div id="home-recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="" />
      </a>
      <div class="recommend-title">{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommends: {
      type: Array,
      dafeult() {
        return [];
      },
    },
  },
};
</script>

<style scoed>
#home-recommend {
  display: flex;
  text-align: center;
  padding: 10px 0 15px;
  border-bottom: 12px solid #eee;
}
.recommend-item {
  flex: 1;
}
.recommend-item img {
  width: 68px;
  height: 68px;
  margin-bottom: 6px;
}
.recommend-title {
  font-size: 12px;
}
</style>