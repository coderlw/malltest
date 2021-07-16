<template>
  <div>
    <nav-bar>
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
    },
    backClick() {
      this.$router.back();
    },
  },
};
</script>

<style scoed>
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