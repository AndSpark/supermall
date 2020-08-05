<template>
  <div id="detail">
			<detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="detailNavBar"></detail-nav-bar>
			<scroll class="content" ref="content" @scrolling="nowPosition" :probeType="3">
				<detail-swiper :topImages='topImages'></detail-swiper>
				<detai-titlel-info :Goods="Goods"></detai-titlel-info>
				<detail-shop :shop="shop"></detail-shop>
				<detail-info :detail-info="detailInfo" @imgLoad="imgLoad"></detail-info>
				<detail-params :params="params" ref="params"></detail-params>
				<detail-rate :rate="rate" ref="rate"></detail-rate>
				<goods-list :goods="recommend" ref="recommend"></goods-list>
			</scroll>
			<detail-bottom-bar @cartClick="cartClick"></detail-bottom-bar>
			<back-top @click.native="backTop" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
	import DetailNavBar from './detailcomps/DetailNavBar'
	import DetailSwiper from '@/views/detail/detailcomps/DetailSwiper'
	import DetaiTitlelInfo from '@/views/detail/detailcomps/DetaiTitlelInfo'
	import DetailShop from '@/views/detail/detailcomps/DetailShop'
	import DetailInfo from '@/views/detail/detailcomps/DetailInfo'
	import DetailParams from '@/views/detail/detailcomps/DetailParams'
	import DetailRate from '@/views/detail/detailcomps/DetailRate'
	import DetailBottomBar from '@/views/detail/detailcomps/DetailBottomBar'

	import GoodsList from '@/components/content/goodsList/GoodsList'
	import Scroll from '@/components/common/scroll/Scroll'
	import {detailData, recommend, Goods, Shop, Params} from 'network/detailData'

	import {backTopMixin} from 'common/mixin'
	import {imgLoadListener} from 'common/mixin'
	import {debounce} from 'common/util'
	import { mapActions, mapGetters } from 'vuex'
	export default {
		name:'Detail',
		data(){
		 return {
			 iid: null,
			 topImages: [],
			 Goods: {},
			 shop: {},
			 detailInfo: {},
			 params: {},
			 rate: [],
			 recommend: [],
			 debounce: null,
			 themeTop: [],
			 lowPrice: 0

		 }
		},
		mixins: [imgLoadListener, backTopMixin],
		components: {
			Scroll,
			DetailNavBar,
			DetailSwiper,
			DetaiTitlelInfo,
			DetailShop,
			DetailInfo,
			DetailParams,
			DetailRate,
			GoodsList,
			DetailBottomBar
		},
		created() {
			this.iid = this.$route.params.iid
			
			detailData(this.iid).then(res => {
				console.log(res);
				const data = res.result
				this.topImages = res.result.itemInfo.topImages
				this.$bus.$emit('DSwiper')
				
				this.Goods = new Goods(data.columns, data.itemInfo, data.shopInfo)
				this.shop = new Shop(data.shopInfo)
				this.detailInfo = data.detailInfo
				this.params = new Params(data.itemParams)
				this.lowPrice = data.itemInfo.lowNowPrice
				if(data.rate.cRate){
					this.rate = data.rate.list
				}
			})
			recommend().then(res => {
				this.recommend = res.data.list
			})

			this.debounce = debounce(() => {
				this.themeTop[0] = 0
				this.themeTop[1] = this.$refs.params.$el.offsetTop * -1
				this.themeTop[2] = this.$refs.rate.$el.offsetTop * -1
				this.themeTop[3] = this.$refs.recommend.$el.offsetTop * -1
			}, 50)
		},
		methods: {
			...mapActions(['addCart']),
			imgLoad() {
				this.$refs.content.refresh()
				this.debounce()
			},
			titleClick(index) {
				this.$refs.content.scrollTo(0, this.themeTop[index], 200)
			},
			nowPosition(position) {	
				this.themeTop.forEach((value, index) => {
					if(this.currentIndex !== index && position.y - value < 10){
						this.$refs.detailNavBar.currentIndex = index
					}
				})
				this.backTopPosition(position)
			},
			cartClick() {
				const product = {}
				product.iid = this.iid
				product.image = this.topImages[0]
				product.title = this.Goods.title
				product.desc = this.detailInfo.desc
				product.price = this.lowPrice

				this.addCart(product).then(res => {
					this.$toast.show(res)
				})
			}
		},
	}
</script>

<style lang='scss' scoped>
	#detail {
		position: relative;
		z-index: 19;
		background-color: #fff;
		height: 100vh;
	}
	.content {
		height: calc(100% - 44px - 49px);
		margin-top: 44px;
	}
	.detail-nav {
		background-color: #fff;
	}
</style>