<template>
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="(item, index) in title" :key="index" class="title-item" @click="itemClick(index)" :class="{active: currentIndex === index}">{{item}}</div>
      </div>
		</nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  name:'DetailNavBar',
  data(){
   return {
    title: ['商品', '参数', '评论', '推荐'],
    currentIndex: 0
   }
  },
  components: {
    NavBar
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('titleClick', index)
    },
    backClick() {
      this.$router.back()
    }
  }
}
</script>

<style lang='scss' scoped>
  .title {
    display: flex;
    font-size: 13px;
    line-height: 44px;
    .title-item {
      flex: 1;
    }
    .active {
      color: #ff8196;
    }
  }

  .back img{
    transform: translateY(3px);
  }
</style>