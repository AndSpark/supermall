<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name:'',
  data(){
   return {

   }
  }
}
</script>

<style lang="scss" scoped>
  .nav-bar{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    line-height: 44px;
    font-size: 20px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
    z-index: 9;
    .left, .right{
      width: 54px;
    }
    .center{
      flex: 1;
    }
  }
</style>
