<template>
  <div class="toast" v-show="isShow">
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  /*  props: {
     message: {
       type: String,
       default: ''
     },
     isShow: {
       type: Boolean,
       default: true
     }
   }, */
  data() {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    show(message = '默认文字', duration = 2000) {
      this.message = message;
      this.isShow = true;

      setTimeout(() => {
        this.isShow = false;
        this.message = '';
      }, duration);
    }
  }
};
</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  width: 210px;
  height: 60px;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  line-height: 60px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.8);
}
</style>