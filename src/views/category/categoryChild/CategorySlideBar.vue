<template>
  <div class="good-lists">
    <b-scroll class="content">
      <ul class="lists">
        <li
          v-for="(item, index) in slideBarLists"
          @click="listClick(item, index)"
          :class="{ active: currentIndex == index }"
        >
          {{ item.title }}
        </li>
      </ul>
    </b-scroll>
  </div>
</template>

<script>
import BScroll from 'components/common/bscroll/BScroll'

export default {
  name: 'CategorySlideBarLists',
  components: {
    BScroll

  },
  props: {
    slideBarLists: {
      type: Array,
      default() {
        return [];
      }
    }

  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    listClick(item, index) {
      this.currentIndex = index;

      const subCategory = {
        maitKey: item.maitKey,
        index
      };
      this.$emit('subcategory', subCategory);
    }

  }

};
</script>

<style scoped>
.lists {
  position: relative;
  width: 140px;
  height: 100vh;
  background-color: #f6f6f6;
}
.lists li {
  width: 130px;
  font-size: 18px;
  padding: 10px 20px;
}
.active {
  color: #ff8198;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0px;
  right: 0px;
  width: 140px;
}
</style>