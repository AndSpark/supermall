<template>
  <div class="detail-info" v-if="Object.keys(detailInfo).length !== 0">
    <div class="info-desc">
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="detail-image" v-for="(item, index) in detailInfo.detailImage" :key="index">
      <p>{{item.key}}</p>
      <img v-for="(img, index) in item.list" :key="index" :src="img" alt="" @load="imgLoad">
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailInfo',
  data(){
   return {
     timer: null
   }
  },
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imgLoad() {
      if(this.timer) clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.$emit('imgLoad')
      }, 100);
    }
  },
}
</script>

<style lang='scss' scoped>
  .detail-info {
    .info-desc {
      padding: 12px;
      position: relative;

      .start {
        width: 5px;
        height: 5px;
        background-color: black;
        position: relative;
        &::after {
          content: '';
          position: absolute;
          width: 90px;
          height: 1px;
          background-color: rgba(0, 0, 0, 0.411);
          bottom: 0;
        }
      }
      .end {
        position: absolute;
        right: 12px;
        bottom: 12px;
        width: 5px;
        height: 5px;
        background-color: black;
        &::before {
          content: '';
          position: absolute;
          width: 90px;
          height: 1px;
          background-color: rgba(0, 0, 0, 0.432);
          bottom: 0;
          left: -90px;
        }
      }
      .desc {
        font-size: 14px;
        padding: 8px;
      }
    }
    .detail-image {
      img {
        width: 100%;
      }
      padding-bottom: 10px;
      border-bottom: 4px solid rgba($color: #000000, $alpha: .1);
    }
  }
</style>