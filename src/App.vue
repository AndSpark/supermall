<template>
  <div id="app">
    <keep-alive exclude="Detail">
    <router-view></router-view>
    </keep-alive>
    <main-tab-bar class="main-bar"></main-tab-bar>
  </div>
</template>
<script>
import MainTabBar from 'components/content/mainTabbar/MainTabBar'
export default {
  components: {
    MainTabBar
  }
}
</script>
<style lang="scss">
 @import 'assets/css/base.css';
  .main-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
