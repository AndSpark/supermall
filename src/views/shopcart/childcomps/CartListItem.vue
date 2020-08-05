<template>
  <div class="list-item">
    <div class="checkbutton">
      <check-button @click.native="btnClick" ref="btn" :checked="itemInfo.checked"></check-button>
    </div>
    <div class="image">
      <img :src="itemInfo.image" alt="">
    </div>
    <div class="info">
      <div class="title">{{itemInfo.title}}</div>
      <div class="desc">{{itemInfo.desc}}</div>
      <div class="price">
        <span>￥{{itemInfo.price}}</span>
        <span>X{{itemInfo.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from '@/components/content/checkButton/CheckButton'

export default {
  name:'CartListItem',
  data(){
   return {
     
   }
  },
  components: {
    CheckButton
  },
  props: {
    itemInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    btnClick() {
      this.$store.commit('checked', this.itemInfo.iid)
    }
  }
}
</script>

<style lang='scss' scoped>
  .list-item {
    padding: 10px;
    display: flex;
    border-bottom: 2px solid rgba($color: #6e6868, $alpha: 0.15);
    .checkbutton {
      flex: 1;
      display: flex;
      align-items: center;
    }
    .image {
      width: 80px;
        height: 100px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 5%;
      }
    }
    .info {
      padding: 5px 10px;
      flex: 10;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      overflow:hidden;
      .title {
        color: #333;      
        overflow:hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .desc {
        font-size: 15px;
        overflow:hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .price {
        display: flex;
        justify-content: space-between;
        :first-child {
          color: #f10;
        }
      }
    }
  }
</style>