import {debounce} from './util'
import BackTop from '@/components/content/backTop/BackTop'

export const imgLoadListener = {
  data() {
    return {
      imgLoadListener: null
    }
  },
  mounted() {
    const refresh = debounce(this.$refs.content.refresh, 50)
    this.imgLoadListener = () => {
    refresh()
  }
    this.$bus.$on('imgLoad', this.imgLoadListener)
    console.log(333);
}
}

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: 0
    }
  },
  methods: {
    backTop() {
      this.$refs.content.scrollTo(0, 0)
    },
    backTopPosition(position) {
      this.isShowBackTop = -position.y > 1000
    }
  },
}