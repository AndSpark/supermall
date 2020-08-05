<template>
<div id="tab-bar">
  <slot></slot>
</div>
</template>

<script>
export default {
  name:'',
  data(){
   return {

   }
  }
}
</script>

<style scoped>
#tab-bar{
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  height: 49px;
  background-color: #f0f0f0;
  box-shadow: 0 -2px 2px rgba(109, 107, 107, 0.1);
  z-index: 10;
}

</style>
