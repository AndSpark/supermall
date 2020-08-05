<template>
  <div class="detail-titile-info" v-if="Object.keys(Goods).length !== 0">
    <div class="top">
      <div class="title">{{Goods.title}}</div>
      <div class="price">
        <span >{{Goods.price}}</span>
        <span v-if="Goods.oldPrice">{{Goods.oldPrice}}</span>
        <span v-if="Goods.discountDesc" :style="{backgroundColor: Goods.discountBgColor}">{{Goods.discountDesc}}</span>
      </div>
      <div class="sales">
        <span>{{Goods.columns[0]}}</span>
        <span>{{Goods.columns[1]}}</span>
        <span>{{Goods.services[0].name}}</span>
      </div>
    </div>
    <div class="bottom">
      <div v-for="(item, index) in Goods.services" :key="index" v-show="index == 2 || index == 3">
        <img :src="item.icon" alt="">
        <span>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailInfo',
  data(){
   return {

   }
  },
  props: {
    Goods: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style lang='scss' scoped>
  .detail-titile-info {
    padding: 12px 8px;
    .top {
      
      .title {
        font-size: 22px;
        color: #333;
        padding-bottom: 10px;
      }
      .price {
        span {
          &:first-of-type {
            color: #ff8196;
            font-size: 26px;
            padding-right: 5px;
          }
          &:nth-of-type(2) {
            text-decoration: line-through;
            color: #aaa;
          }
          &:nth-of-type(3) {
            position: relative;
            left: 5px;
            bottom: 10px;
            padding: 3px;
            border-radius: 5px;
            color: #fff;
          }
        }
      }
      .sales {
        display: flex;
        justify-content: space-between;
        color: #aaa;
        padding: 16px 0 8px 0;
        border-bottom: solid 1px rgba($color: #756868, $alpha: .2);
        font-size: 15px;
      }
    }
    .bottom {
      font-size: 15px;
      display: flex;
      justify-content: space-between;
      border-bottom: 4px solid rgba($color: #756868, $alpha: .15);
      padding: 16px 0;
      img {
        width: 14px;
      }
    }
  }
</style>