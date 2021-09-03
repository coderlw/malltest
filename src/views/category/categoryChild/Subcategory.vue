<template>
  <div class="subcategory">
    <div class="item-img">
      <img v-for="(item, index) in subLists" :src="item.image" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Subcategory',
  props: {
    subLists: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.subcategory {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-left: 20px;
}
.item-img {
  padding: 10px 0 10px;
}
.item-img img {
  width: 90px;
  margin: 0 10px 10px 0;
}
</style>