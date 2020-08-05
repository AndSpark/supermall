<template>
  <div class="detail-shop" v-if="Object.keys(shop).length !== 0">
    <div class="top">
      <img :src="shop.shopLogo" alt="">
      <span>{{shop.name}}</span>
    </div>
    <div class="center">
      <div class="cells">
      <div>
        <p>{{totalSells}}</p>
        <p>总销量</p>
      </div>
      <div>
        <p>{{shop.cGoods}}</p>
        <p>全部宝贝</p>
      </div>
      </div>
      <div class="score">
        <p v-for="(item, index) in shop.score" :key="index">
          <span>{{item.name}}</span>
          <span v-if="item.isBetter" class="high">
            <span>{{item.score}}</span>
            <span>高</span>
          </span>
          <span v-else class="low">
            <span>{{item.score}}</span>
            <span>低</span>
          </span>
        </p>
      </div>
      
    </div>
    <div class="bottom">
        <a :href="shop.shopUrl">进店逛逛</a>
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailShop',
  data(){
   return {
     
   }
  },
  props: {
    shop: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    totalSells() {
      if(this.shop.cSells >= 10000){
        return Math.floor(this.shop.cSells / 10000) + '.' + Math.floor(this.shop.cSells % 10000 / 1000) + '万'
      }else{
        return this.shop.cSells
      }
    }
  },
}
</script>

<style lang='scss' scoped>
  .detail-shop {
    font-size: 15px;
    padding: 8px;
    .top {
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 1px solid rgba($color: #000000, $alpha: .3);
      }
      span {
        font-size: 18px;
        position: relative;
        left: 10px;
        top: -20px;
      }
    }
    .center {
      display: flex;
      padding-top: 15px;
      .cells {
        p {
          padding-bottom: 5px;
        }
        text-align: center;
        display: flex;
        width: 50%;
        justify-content: space-evenly;
        align-items: center;
        border-right: 1px solid rgba($color: #000000, $alpha: .1);
      }
      .score {
        font-size: 15px;
        width: 50%;
        p {
          display: flex;
          justify-content: space-between;
          padding: 3px 15px;
          .high {
          :first-child {
            color: red;
            padding: 5px;
          }
          :last-child {
            color: #fff;
            background-color: red;
          }
        }
        .low {
          :first-child {
            padding: 5px;
            color: green;
          }
          :last-child {
            color: #fff;
            background-color: green;
          }
        }
        }
      }
    }
    .bottom {
      display: flex;
      justify-content: center;
      margin-top: 20px;
      padding-bottom: 20px;
      border-bottom: 3px solid rgba($color: #000000, $alpha: .1);
      a {
        display: block;
        background-color: rgba(107, 172, 180, 0.185);
        width: 130px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border-radius: 5px;
      }
    }
  }
</style>