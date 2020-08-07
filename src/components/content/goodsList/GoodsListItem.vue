<template>
  <div class="goods-item" @click="itemClick">
      <img v-lazy="showImg" alt="" @load="imgLoad">
    <div>
      <p>{{item.title}}</p>
      <span>{{item.price}}</span>
      <span>{{item.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'GoodsListItem',
  data(){
   return {

   }
  },
  props: {
    item: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imgLoad() {
      // this.$store.commit('imgLoading')
      this.$bus.$emit('imgLoad')
    },
    itemClick() {
      this.$router.push('/detail/' + this.item.iid)
    }
  },
  computed: {
    showImg() {
      return  this.item.image || this.item.show.img
    }
  },
}
</script>

<style lang='scss'>
  .goods-item {
    width: 48%;
    padding-bottom: 42px;
    position: relative;
    img {
      width: 100%;
      border-radius: 2%;
    }
    div {
      width: 100%;
      position: absolute;
      bottom: 0;
      height: 42px;
      padding: 5px 0;
      font-size: 14px;
      text-align: center;
      color: #333;
      p {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      span:first-of-type{
        color: #ff8196;
        position: relative;
        &::after {
          content: '';
          position: absolute;
          right: -17px;
          
          width: 14px;
          height: 14px;
          background: url("~assets/img/common/collect.svg") 0 0/14px 14px;;
        }
      }
      span:last-of-type {
        padding-left: 16px;
      }
    }
  }
</style>