<template>
  <div class="btn" :class="{active: checked}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name:'CheckButton',
  data(){
   return {

   }
  },
  props: {
    checked: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang='scss' scoped>
      .btn {
        position: relative;
        left: -5px;
        background-color: #fff;
        border-radius: 50%;
        height: 17px;
        width: 17px;
        border: 1px solid #aaa;
        box-sizing: content-box;
      }
      .active {
        background-color: #ff8196;
        border-color: #ff8196;
      }
</style>