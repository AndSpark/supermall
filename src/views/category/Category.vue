<template>
  <div class="category">
    <nav-bar class="category-nav"><div slot="center">商品分类</div></nav-bar>
    <div class="box">
      <category-list :list="category" @itemClick="itemClick"></category-list>
      <scroll class="content" ref="content">
        <subcategory-list :data="subcategory"></subcategory-list>
        <tab-control :titles="['流行', '新款', '精选']" @tabClick="tabClick" ref="tabcontrol"></tab-control>
        <goods-list :goods="goods"/>
      </scroll>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import CategoryList from '@/views/category/childComps/CategoryList'
import SubcategoryList from '@/views/category/childComps/SubcategoryList'
import TabControl from '@/components/content/tabControl/TabControl'
import GoodsList from '@/components/content/goodsList/GoodsList'

import Scroll from '@/components/common/scroll/Scroll'
import {getCategory, getSubcategory, getCategoryDetail} from 'network/categoryData'
import {imgLoadListener} from 'common/mixin'

export default {
  name:'',
  data(){
   return {
     category: [],
     subcategory: [],
     subcategoryDetail: {},
     miniWallkey: 0,
     goods: [],
     currentIndex: 0,
     currentType: 'pop'
   }
  },
  components: {
    CategoryList,
    NavBar,
    SubcategoryList,
    TabControl,
    GoodsList,
    Scroll,
    TabControl,
    GoodsList
  },
  mixins: [imgLoadListener],
  created() {
    getCategory().then(res => {
      this.category = res.data.category.list
    }).then(() => {
      this.itemClick(this.currentIndex)
    })
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      const maitKey = this.category[index].maitKey
      getSubcategory(maitKey).then(res => {
        this.subcategory = res.data.list
        this.miniWallkey = this.category[index].miniWallkey
        getCategoryDetail(this.miniWallkey, this.currentType).then(res => {
          this.goods = []
          for(let item of res){
            this.goods.push({
            title: item.title,
            price: item.price,
            cfav: item.cfav,
            image: item.img,
            iid: item.iid
            } )
          }
        })
        this.$refs.content.scrollTo(0, 0, 0)
      })
      
    },tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break;
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      this.$refs.tabcontrol.currentIndex = index
      getCategoryDetail(this.miniWallkey, this.currentType).then(res => {
        this.goods = []
          for(let item of res){
            this.goods.push({
            title: item.title,
            price: item.price,
            cfav: item.cfav,
            image: item.img,
            iid: item.iid
            } )
          }
        })
    }
  }
}
</script>

<style lang="scss" scoped>
  .category {
    height: calc(100vh - 49px);
    background-color: #fff;
    .category-nav {
      position: relative;
      background-color: #ff8196;
      color: #fff;
    }
    .box {
      display: flex;
      height: calc(100% - 44px);
      .content {
        width: calc(100% - 100px);
        height: calc(100% - 50px)
      }
    }
  }
 
</style>
