<template>
  <div class="good-info">
    <h3>{{ goods.title }}</h3>
    <div class="price">
      <span class="n-price">{{ goods.price }}</span>
      <span class="o-price">{{ goods.oldPrice }}</span>
      <span class="discount">{{ goods.discount }}</span>
    </div>
    <div class="info-other">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="info-service">
      <span v-for="(item, index) in goods.services">
        <img :src="goods.services[index].icon" alt="" />
        <span>{{ goods.services[index].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoed >
.good-info {
  padding: 10px;
}

.price {
  position: relative;
  padding: 20px 0;
}
.n-price {
  color: #ff8198;
  font-size: 30px;
  font-weight: 700;
}
.o-price {
  color: #999;
  font-size: 14px;
  text-decoration: line-through;
  padding-left: 8px;
}
.discount {
  position: absolute;
  top: 19px;
  left: 158px;
  display: inline-block;
  width: 66px;
  height: 23px;
  font-size: 15px;
  font-weight: 700;
  text-align: center;
  line-height: 23px;
  color: #fff;
  border-radius: 11px;
  background-color: #ff8198;
}
.info-other {
  font-size: 14px;
  color: #999;
  padding: 20px 0;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.info-other span {
  display: inline-block;
  width: 117px;
}
.info-other span:nth-child(2) {
  text-align: center;
}
.info-other span:last-child {
  text-align: right;
}
.info-service {
  padding: 12px;
  font-size: 14px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.info-service img {
  width: 20px;
  vertical-align: bottom;
  padding-right: 5px;
}
.info-service span {
  width: 50px;
  padding-right: 17px;
}
.info-service span:last-child {
  padding-right: 5px;
}
</style>