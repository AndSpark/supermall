<template>
  <div class="backtop">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name:'BackTop',
  data(){
   return {

   }
  },
}
</script>

<style lang='scss' scoped>
  .backtop {
    position: fixed;
    right: 8px;
    bottom: 54px;
    height: 43px;
    width: 43px;
    img {
      width: 100%;
    }
  }
</style>