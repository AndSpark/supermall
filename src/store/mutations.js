import {
  ADD_COUNT,
  ADD_CART,
  ALL_CHECKED,
  CHECKED
} from '@/store/mutations-types'



export default {
  
    imgLoading(state) {
      state.imgLoad++
      if(state.imgLoad == 30){
        state.imgLoad = 0
      }
    },
    DetailSwiper(state) {
      state.DSwiper++
    },
    [ADD_COUNT](state, payload){
      payload.count++
    },
    [ADD_CART](state, payload){
      payload.checked = true
      state.cartList.push(payload)
    },
    [ALL_CHECKED](state) {
      state.isAllChecked = !state.isAllChecked
      if(state.isAllChecked) {
        state.cartList.forEach(value => value.checked = true)
      }else {
        state.cartList.forEach(value => value.checked = false)
      }
    },

    [CHECKED](state, iid) {
      let item = state.cartList.find(value => value.iid == iid)
      item.checked = !item.checked
      let isCheckAll = true
      state.cartList.forEach(element => {
        if(element.checked === false) {
          isCheckAll = false
        }
      })

      isCheckAll ? state.isAllChecked = true : state.isAllChecked = false

    }
}