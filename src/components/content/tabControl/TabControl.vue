<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" :key="index" class="tab-control-item" :class="{active: currentIndex === index}" @click="tab(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'TabControl',
  data(){
   return {
     currentIndex: 0
   }
  },
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    tab(index) {
      this.currentIndex = index
      this.$emit('tabClick', index)
    }
  }
}
</script>

<style lang='scss'>
  .tab-control {
    display: flex;
    text-align: center;
    font-size: 18px;
    line-height: 38px;
    background-color: #fff;
    z-index: 9;
    .tab-control-item {
      flex: 1;
      span {
        padding: 0 5px 5px;
      }
    }
    .active span {
      color: #ff8196;
      border-bottom: 3px solid #ff8196;
    }
  }
</style>