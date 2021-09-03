<template>
  <div class="profile">
    <nav-bar class="nav-bar">
      <div slot="center1">个人中心</div>
    </nav-bar>
    <LoginInfo />
    <data-info />
    <set-lists />
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import LoginInfo from './profileChild/LoginInfo.vue'
import DataInfo from './profileChild/DataInfo.vue'
import SetLists from './profileChild/SetLists.vue'

export default {
  name: 'Profile',
  components: {
    NavBar,
    LoginInfo,
    DataInfo,
    SetLists
  },
};
NavBar
</script>

<style scoped>
.profile {
  background: #f2f2f2;
}
.nav-bar {
  position: relative;
  color: #fff;
  height: 44px;
  font-size: 20px;
  background-color: var(--color-tint);
}
</style>