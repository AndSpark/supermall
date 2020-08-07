<template>
  <div class="category-list">
    <scroll class="content">
      <div class="item" v-for="(item, index) in list" 
    :key="index" @click="itemClick(index)" :class="{active: currentIndex === index}">
      {{item.title}}
    </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from '@/components/common/scroll/Scroll'
export default {
  name:'CategoryList',
  data(){
   return {
     currentIndex: 0
   }
  },
  components: {
    Scroll
  },
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('itemClick', index)
    }
  }
}
</script>

<style lang='scss' scoped>
  .category-list {
    width: 100px;
    height: 100%;
    background-color: #f6f6f6;
    .content {
      height: 100%;
      .item {
        height: 45px;
        text-align: center;
        line-height: 45px;
        touch-action: none;
      }
      .active {
        color: #ff8199;
        background-color: #fff;
        position: relative;
        &::before {
          content: "";
          display: block;
          position: absolute;
          left: 0;
          top: 0;
          height: 45px;
          width: 3px;
          background-color: #ff4366;
          
        }
      }
    }

  }
</style>