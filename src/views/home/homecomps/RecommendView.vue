<template>
  <div class="recommend">
    <div v-for="(item, index) in recommend" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name:'RecommendView',
  data(){
   return {

   }
  },
  props: {
    recommend: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang='scss'>
  .recommend {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    padding: 8px 0 20px;
    border-bottom: 10px solid #eee;
    .recommend-item {
      img {
        width: 70px;
        height: 70px;
        margin-bottom: 10px;
      }
      
    }
  }
</style>