<template>
  <div class="subcategory-list" v-if="Object.keys(data).length !== 0">
    <gird-view class="gird-view" ref="girdView">
      <div v-for="(item, index) in data" :key="index" class="item">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imgLoad">
          <p>{{item.title}}</p>
        </a>
      </div>
    </gird-view>
  </div>
</template>

<script>
import GirdView from '@/components/content/girdView/GirdView'
export default {
  name:'SubcategoryList',
  data(){
   return {
     
   }
  },
  components: {
    GirdView
  },
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    imgLoad() {
      // this.$refs.girdView.autolayout()
    }
  }
}
</script>

<style lang='scss' scoped>
  .subcategory-list {
    display: flex;
    .gird-view {
      width: 100%;
      div {
        text-align: center;
        img {
          width: 80%;
        }
        p {
          padding-top: 5px;
          font-size: 14px;
        }
      }
    }
  }
</style>