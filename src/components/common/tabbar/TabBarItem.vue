<template>
  <div class="tabbar-item" @click="itemClick">
    <div v-show="!isActive">
      <slot name="tabbar-icon"></slot>
    </div>
    <div v-show="isActive">
      <slot name="tabbar-active"></slot>
    </div>
    <div :style="isStyle">
      <slot name="tabbar-text"></slot>
    </div>
  </div>
</template>


<script>
export default {
  name: "TabBarItem",
  props: {
    link: {
      type: String,
      required: true,
    },
    /* path: {
      type: String,
    }, */
    isColor: {
      type: String,
      default: "red",
    },
  },
  /* data() {
    // return { isActive: false };
  }, */
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.link) !== -1;
    },
    isStyle() {
      return this.isActive ? { color: this.isColor } : {};
    },
  },
  methods: {
    itemClick() {
      this.$router.replace(this.link);
    },
  },
};
</script>

<style scoed>
.tabbar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tabbar-item img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin: 3px 0 2px 0;
}
/* .active {
  color: #f00;
} */
</style>