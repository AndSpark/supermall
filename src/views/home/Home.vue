<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control :titles="['流行', '新款', '精选']" @tabClick="tabClick" class="tab-control2" v-show="isShowTabControl" ref="tabcontrol2"></tab-control>
    <scroll class="content" ref="content" @pullingUp="pullingUp" :probe-type="3" @scrolling="nowPosition" :pull-up-load="true">
      <home-swiper :banner="banner" ref="hswiper" @imgLoad="SwiperImgLoad"></home-swiper>
      <recommend-view :recommend="recommend"></recommend-view>
      <feature-view></feature-view>
      <tab-control :titles="['流行', '新款', '精选']" @tabClick="tabClick" ref="tabcontrol"></tab-control>
      <goods-list :goods="currentGoods"/>
    </scroll>
    <back-top @click.native="backTop" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import HomeSwiper from '@/views/home/homecomps/HomeSwiper'
import RecommendView from '@/views/home/homecomps/RecommendView'
import FeatureView from '@/views/home/homecomps/FeatureView'

import NavBar from '@/components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goodsList/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import {backTopMixin} from 'common/mixin'

import {getHomeMultidata, getHomeGoods} from 'network/gethomemultidata'
import {imgLoadListener} from 'common/mixin'
export default {
  name:'',
  data(){
   return {
     banner: [],
     recommend: [],
     goods: {
       pop: {page: 0, list: []},
       new: {page: 0, list: []},
       sell: {page: 0, list: []}
     },
     currentType: 'pop',
     isShowTabControl: false,
     offsetY: 0,
     positionY: 0,
     
   }
  },
  mixins: [imgLoadListener, backTopMixin],
  components:{
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll
  },
  created() {
    this.getHMdata(),
    this.getHGoods('new')
    this.getHGoods('pop')
    this.getHGoods('sell')
  },
  
  activated() {
    this.$refs.content.refresh()
    this.$refs.content.scrollTo(0, this.positionY, 0)
  },
  deactivated() {
    this.positionY = this.$refs.content.scroll.y
  },
  computed: {
    currentGoods() {
      return this.goods[this.currentType].list
    },
    // imgLoaded() {
    //   return this.$store.state.imgLoad
    // }
  },
  watch: {
    // imgLoaded() {
    //   this.$refs.content.scroll.refresh()
    // }
  },
  methods: {

    // debounce(func, delay) {
    //   let timer = null;
    //   return (...args) => {
    //     if(timer) clearTimeout(timer)
    //     timer = setTimeout(() => {
    //       func.apply(this, args)
    //     }, delay);
    //   }
    // },
    //事件监听相关方法

    pullingUp() {
      this.getHGoods(this.currentType)
    },

    nowPosition(position) {
      this.isShowTabControl = -position.y > this.offsetY
      this.backTopPosition(position)
    },
    tabClick(index) {
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
      this.$refs.tabcontrol2.currentIndex = index
    },
    SwiperImgLoad() {
      this.offsetY = this.$refs.tabcontrol.$el.offsetTop - 44
    },

    //网络请求相关方法
    getHMdata() {
      getHomeMultidata().then(res => {
      this.banner = res.data.banner.list
      this.recommend = res.data.recommend.list
      this.$refs.hswiper.init()
    })
    },
    getHGoods(item) {
      const page = this.goods[item].page + 1
      getHomeGoods(page, item).then(res => {
        this.goods[item].list.push(...res.data.list)
        this.goods[item].page++
        this.$refs.content.finishPullUp()
      });

    }
  },
}
</script>

<style lang="scss" scoped>
  #home {
    padding-bottom:46px;
    padding-top: 44px;;
    height: 100vh;
  }
  .home-nav{
    background-color: #ff8196;
    color: #fff;
  }
  .tab-control2 {
    position: fixed;
    top: 44px;
    left: 0;
    right: 0;
  }


  .content {
    height: 100%;
  }
</style>
