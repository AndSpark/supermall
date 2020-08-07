<template>
  <div class="bottom-bar">
    <div class="check">
      <check-button @click.native="btnClick" :checked="allChecked"></check-button>
      <p>全选</p>
    </div>
    <div class="price">
      <p>合计:￥{{totalPrice}}</p>
    </div>
    <div class="calculate" @click="calc">
      <p>去结算({{totalCount}})</p>
    </div>
  </div>
</template>

<script>
import CheckButton from '@/components/content/checkButton/CheckButton'
import { mapGetters } from 'vuex'

export default {
  name:'CartbottomBar',
  data(){
   return {

   }
  },
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters(['totalPrice', 'totalCount', 'allChecked'])
  },
  methods: {
    btnClick() {
      this.$store.commit('all_checked')
    },
    calc() {
      
      if(this.totalCount == 0){
        this.$toast.show('商品不能为空')
      }
    }
  }
}
</script>

<style lang='scss' scoped>
  .bottom-bar {
    position: fixed;
    bottom: 49px;
    left: 0;
    right: 0;
    height: 40px;
    background-color: #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgba($color: #5a5858, $alpha: 0.15);
    box-sizing: content-box;
    .check {
      display: flex;
      flex: 1;
      padding-left: 10px;
    }
    .price {
      flex: 1;
      position: relative;
      left: -30px;
    }
    .calculate {
      height: 100%;
      background-color: #ff8196;
      line-height: 40px;
      text-align: center;
      flex: 1;
      color: #fff;
    }
  }
</style>