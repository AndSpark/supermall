<template>
  <div class="shop-cart">
    <nav-bar class="shopcar-nav">
      <div slot="center">购物车({{shopCartLength}})</div>
    </nav-bar>
    <cart-list></cart-list>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import CartList from '@/views/shopcart/childcomps/CartList'
import CartBottomBar from '@/views/shopcart/childcomps/CartBottomBar'

import { mapGetters } from 'vuex'

export default {
  name:'',
  data(){
   return {

   }
  },
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  computed: {
    ...mapGetters(['shopCartLength'])
  },
}
</script>

<style scoped>
  .shop-cart {
    height: 100vh;
  }
  .shopcar-nav {
    background-color: #ff8196;
    color: #fff;
  }
</style>
