import Vue from 'vue'
import Vuex from 'vuex'
import actions from '@/store/actions'
import mutations from '@/store/mutations'
import getters from '@/store/getters'

Vue.use(Vuex)

const state = {
  imgLoad: 0,
  DSwiper: 0,
  cartList: [],
  isAllChecked: true
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
