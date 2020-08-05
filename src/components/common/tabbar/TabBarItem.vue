<template>
  <div class="tabbar-item" @click="itemClick" >
    <div v-if="isCheck"><slot name="img-active"></slot></div>
    <div v-else><slot name="img"></slot></div>
    <div :style="activeStyle"><slot name="text"></slot></div>
  </div>
</template>

<script>
export default {
  name:'',
  data(){
   return {
     isTrue: false,
   }
  },
  props:{
    path:String,
    colorActive:{
      type:String,
      default:'#ff8198'
    }
  },
  computed: {
    isCheck(){
      return   this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isCheck ? {color:this.colorActive} : {}
    }
  },
  methods: {
    itemClick(){
      this.$router.push(this.path);
    }
  },
}
</script>

<style scoped>
  .tabbar-item{
    flex: 1;
    text-align: center;
    margin-top: 3px;
  }
  .tabbar-item img{
    width: 24px;
    height: 24px;
    vertical-align: middle;
  }

</style>
