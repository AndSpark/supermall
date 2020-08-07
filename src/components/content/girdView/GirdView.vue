<template>
  <div class="gird-view" ref="girdView">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'GirdView',
  data(){
   return {
     autolayout: {}
   }
  },
  props: {
    column: {
      type: Number,
      default: 3
    },
    girdPadding: {
      type: Array,
      default() {
        return [5, 5]
      }
    },
    itemPadding: {
      type: Array,
      default() {
        return [5, 5]
      }
    }
  },
  mounted(){
    this.gird()
  },
  updated() {
    this.gird()
  },
  methods: {
    gird() {
      console.log(12312);
      const girdEl = this.$refs.girdView
      const childs = girdEl.children
      
      girdEl.style.padding = `${this.girdPadding[0]}px ${this.girdPadding[1]}px`

      const childWidth = (girdEl.offsetWidth - this.girdPadding[1] * 2) / this.column 

      for(let item of childs){
        item.style.width = childWidth + 'px'
        item.style.padding = `${this.itemPadding[0]}px ${this.itemPadding[1]}px`
      }
    }
  }
}
</script>

<style lang='scss' scoped>
  .gird-view {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
</style>