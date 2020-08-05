<template>
  <div class="cart-list">
    <scroll class="content">
      <cart-list-item v-for="(item, index) in cartList" :key="index" :item-info="item"></cart-list-item>
    </scroll>
  </div>
</template>

<script>
import Scroll from '@/components/common/scroll/Scroll'
import CartListItem from '@/views/shopcart/childcomps/CartListItem'

import { mapGetters } from 'vuex'

export default {
  name:'CartList',
  data(){
   return {

   }
  },
  components: {
    Scroll,
    CartListItem
  },
  computed: {
    ...mapGetters(['cartList'])
  }
}
</script>

<style lang='scss' scoped>
  .cart-list {
    padding-top: 44px;
    height: calc(100% - 40px - 49px);
  }
  .content {
    height: 100%;
    overflow: hidden;
  }
</style>