<template>
  <div class="toast" v-show="isShow">
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  name:'Toast',
  data(){
   return {
     message: '',
     isShow: false
   }
  },
  methods: {
    show(message, duration=2000) {
      this.isShow = true
      this.message = message
      setTimeout(() => {
        this.isShow = false
      }, duration);
    }
  }
}
</script>

<style lang='scss' scoped>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 8px 10px;
    background-color: rgba($color: #000000, $alpha: .7);
    color: #fff;
    border-radius: 1px;
    z-index: 99;
  }
</style>