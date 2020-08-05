<template>
  <div id="hy-swiper">
    <div class="swiper" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
      <slot></slot>
    </div>
    <div class="indicator">
      <slot name="indicator">
        <div class="indicator-item" v-for="(item, index) in slideCount" :key="index" :class="{active: index === currentIndex - 1}"></div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name:'',
  data(){
   return {
     currentIndex: 1,
     totalWidth: 0,
     slideCount: 0,
     swiperStyle: {},
     isScrolling: false,
     isInit: null
   }
  },
  props: {
    Interval: {
      type: Number,
      default: 3000
    },
    animDuration: {
      type: Number,
      default: 300
    },
    moveratio: {
      type: Number,
      default: 0.25
    }
  },
  created() {
    this.$bus.$off('DSwiper')
  },
  mounted() {
    this.$bus.$on('DSwiper', () => {
      this.init()
    })
  },
  destroyed() {
    this.$bus.$off('DSwiper')
  },
  methods: {
    init(){setTimeout(() => {
        
      this.handledom()

      this.startMove()
      }, 100);
    },
    startMove(){
      this.timer = setInterval(() => {
        this.currentIndex++;
        this.move();
        
      }, this.Interval)
    },

    move() {
      this.isScrolling = true

      this.swiperStyle.transition = `transform ${this.animDuration}ms`
      this.setTransform(-this.totalWidth * this.currentIndex)
      //判断位置
      if(this.currentIndex > this.slideCount){
        setTimeout(() => {
          this.currentIndex = 1
          this.swiperStyle.transition = `transform 0ms`
          this.setTransform(-this.totalWidth)
        }, this.animDuration);
      }else if(this.currentIndex < 1){
        setTimeout(() => {
          this.currentIndex = this.slideCount
          this.swiperStyle.transition = `transform 0ms`
          this.setTransform(-this.totalWidth * this.currentIndex)
        }, this.animDuration);
      }

      this.isScrolling = false
    },

    touchStart(e) {
      if(this.isScrolling === true) return;
      clearInterval(this.timer)
      this.startPosition = e.touches[0].pageX
    },

    touchMove(e) {
      this.movePosition = e.touches[0].pageX
      this.distance = this.movePosition - this.startPosition
      let moveDistance = -this.totalWidth * this.currentIndex + this.distance
      this.setTransform(moveDistance)
    },

    touchEnd(e) {
      if(this.distance > 0 && this.distance > this.totalWidth * this.moveratio){
        this.currentIndex--
      }else if(this.distance < 0 && -this.distance > this.totalWidth * this.moveratio){
        this.currentIndex++
      }
      
      this.move()
      
      this.startMove()
    },

    handledom() {
      let swiperEl = document.querySelector('.swiper')
      let slideEls = swiperEl.getElementsByClassName('slide')
      this.slideCount = slideEls.length
      if(this.slideCount > 1){
        let cloneFirst = slideEls[0].cloneNode(true)
        let cloneLast = slideEls[this.slideCount - 1].cloneNode(true)
        swiperEl.appendChild(cloneFirst)
        swiperEl.insertBefore(cloneLast, slideEls[0])
        this.totalWidth = swiperEl.offsetWidth
        this.swiperStyle = swiperEl.style
      }
      this.setTransform(-this.totalWidth)
    },

    setTransform(position) {
        this.swiperStyle.transform = `translate3d(${position}px, 0, 0)`,
        this.swiperStyle['-webkit-transform'] = `translate3d(${position}px, 0, 0)`,
        this.swiperStyle['-ms-transform'] = `translate3d(${position}px, 0, 0)`
    }
  },
}
</script>

<style lang='scss'>
  #hy-swiper{
    overflow: hidden;
    position: relative;
    .swiper{
      display: flex;
    }
    .indicator{
      position: absolute;
      display: flex;
      justify-content: center;
      bottom: 8px;
      width: 100%;
      .indicator-item{
        width: 8px;
        height: 8px;
        margin-left: 8px;
        border-radius: 50%;
        background: #fff;
      }
      .active{
        background-color: #ff8196;
      }
    }
  }
</style>
