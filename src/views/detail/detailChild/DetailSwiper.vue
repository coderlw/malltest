<template>
  <div>
    <swiper class="toImages">
      <swiper-item v-for="item in topImages">
        <img :src="item" alt="" />
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swipers";

export default {
  name: "DetailSwiper",
  components: { Swiper, SwiperItem },
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoed>
.toImages {
  height: 300px;
  overflow: hidden;
  margin-top: 44px;
}
</style>