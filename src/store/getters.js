export default {
  shopCartLength(state) {
    let length = 0
    state.cartList.forEach(element => {
      length += element.count
    });
    return length
  },

  cartList(state) {
    return state.cartList
  },
  allChecked(state) {
    return state.isAllChecked
  },
  totalPrice(state) {
    return state.cartList.filter(value => value.checked).reduce((pre, cur) => pre + cur.price * cur.count, 0).toFixed(2)
  },

  totalCount(state) {
    return state.cartList.filter(value => value.checked).reduce((pre, cur) => pre + cur.count, 0)
  }
}