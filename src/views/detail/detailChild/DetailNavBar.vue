<template>
  <div>
    <nav-bar class="dateil-nav">
      <div slot="left1" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="" />
      </div>
      <div slot="center1" class="title">
        <div
          v-for="(item, index) in titles"
          class="title-item"
          :class="{ active: currentIndex === index }"
          @click="itemClick(index)"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "DetailNavBar",
  data() {
    return {
      titles: ["商品", "参数", "评价", "推荐"],
      currentIndex: 0,
    };
  },
  components: {
    NavBar,
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('titleClick', index);
    },
    backClick() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.dateil-nav {
  background-color: #fff;
}
.title {
  display: flex;
}
.title-item {
  flex: 1;
}
.active {
  color: #ff5777;
}
.back {
  margin-top: 5px;
}
</style>