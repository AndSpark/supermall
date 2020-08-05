<template>
  <div class="bottom-bar">
    <div class="left">
      <div>
        <div class="icon service"></div>
        <p>客服</p>
      </div>
      <div>
        <div class="icon shop"></div>
        <p>店铺</p>
      </div>
      <div>
        <div class="icon collect"></div>
        <p>收藏</p>
      </div>
    </div>
    <div class="center" @click="cartClick">
      <p>加入购物车</p>
    </div>
    <div class="right">
      <p>购买</p>
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailBottomBar',
  data(){
   return {

   }
  },
  methods: {
    cartClick() {
      this.$emit('cartClick')
    }
  },
}
</script>

<style lang='scss' scoped>
  .bottom-bar {
    box-shadow: 0 2px 2px 2px rgba($color: #000000, $alpha: 0.2);
    display: flex;
    height: 49px;
    position: relative;
    text-align: center;
    background-color: #fff;
    .left {
      font-size: 15px;
      flex: 5;
      display: flex;
      &>div {
        flex: 1
      }
      .icon {
        margin: 5px auto 2px;
        width: 22px;
        height: 22px;
        background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
      }
      .service {
        background-position: 0 -54px;
      }
      .shop {
        background-position: 0 -98px;
      }
    }
    .center {
      background-color: #ffe817;
      flex: 3;
      line-height: 49px;
    }
    .right {
      color: #fff;
      flex: 3;
      background-color: #f69;
      line-height: 49px;
    }
  }
</style>