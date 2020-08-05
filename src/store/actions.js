import {
  ADD_COUNT,
  ADD_CART
} from '@/store/mutations-types'

export default {

  addCart(context, payload) {
    
    return new Promise(resolve => {
      let oldProduct = context.state.cartList.find(value => value.iid === payload.iid)

      if(oldProduct){
        context.commit(ADD_COUNT, oldProduct)
        resolve('数量+1')
      }
      else{
        payload.count = 1
        context.commit(ADD_CART, payload)
        resolve('添加成功')
      }
    })
  }


}