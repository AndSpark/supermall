<template>
  <div class="detail-rate" v-if="Object.keys(rate).length !== 0">
    <div class="more">
      <span>用户评价</span>
      <div>
        <span>更多</span>
        <img src="~assets/img/common/arrow-left.svg" alt="">
      </div>
    </div>
    <div class="rate">
      <div class="user">
        <img :src="rate[0].user.avatar" alt="">
        <span>{{rate[0].user.uname}}</span>
      </div>
      <div class="comment">
        <p>{{rate[0].content}}</p>
        <p>{{getDate}}  {{rate[0].style}}</p>
        <img v-for="(item, index) in rate[0].images" :key="index" :src="item" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailRate',
  data(){
   return {

   }
  },
  props: {
    rate: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    getDate() {
      let date = new Date(this.rate[0].created * 1000)
      let year = date.getFullYear()
      let month = date.getMonth() + 1
      let day = date.getDate()
      if(day < 10){
        day = '0' + day
      }
      if(month < 10){
        month = '0' + month
      }
      return year + '-' + month + '-' + day
    }
  },
}
</script>

<style lang='scss' scoped>
  .detail-rate {
    padding-bottom: 15px;
    margin-bottom: 15px;
    border-bottom: 4px solid rgba($color: #4d4d4d, $alpha: .1);
    .more {
      padding: 20px 12px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid rgba($color: #000000, $alpha: .1);
      div {
        img {
          width: 16px;
        }
      }
    }
    .rate {
      .user {
        padding: 12px;
        img {
          width: 42px;
          height: 42px;
          border: 1px solid rgba($color: #000000, $alpha: .1);
          border-radius: 50%;
        }
        span {
          position: relative;
          bottom: 14px;
          left: 10px;
          color: #333;
        }
      }
      .comment {
        p {
          margin: 5px 0;
        }
        p:last-of-type {
          font-size: 15px;
          color: #aaa;
        }
        img {
          width: 70px;
          height: 70px;
          margin: 5px;
        }
      }
    }
  }
</style>