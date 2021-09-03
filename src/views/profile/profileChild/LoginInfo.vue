<template>
  <div class="login-info">
    <div class="img-info">
      <img src="~assets/img/profile/avar.jpg" alt="" />
    </div>
    <div class="text-info">
      <p class="name">那时年少</p>
      <p>暂无绑定手机号</p>
    </div>
    <p class="into">&gt;</p>
  </div>
</template>

<script>
export default {
  name: 'LoginInfo'
};
</script>

<style scoped>
.login-info {
  display: flex;
  color: #fff;
  height: 100px;
  background-color: var(--color-tint);
}
.login-info img {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-left: 20px;
  margin-top: 30px;
}
.text-info {
  margin: 40px 0 0 20px;
}
.text-info .name {
  font-size: 18px;
  font-weight: 700;
  padding-bottom: 5px;
}
.into {
  font-size: 20px;
  margin-left: 130px;
  margin-top: 40px;
}
</style>