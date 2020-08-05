import {request} from './request'

export function detailData(iid) {
  return request({
    url:'/detail',
    params: {
      iid
    }
  })
}

export function recommend() {
  return request({
    url:'/recommend',
  })
}

export class Goods {
  constructor(columns, itemInfo, shopInfo) {
    this.columns = columns
    this.discountDesc = itemInfo.discountDesc
    this.discountBgColor = itemInfo.discountBgColor
    this.oldPrice = itemInfo.oldPrice
    this.price = itemInfo.price
    this.title = itemInfo.title
    this.services = shopInfo.services
  }
}

export class Shop {
  constructor(shopInfo) {
    this.cGoods = shopInfo.cGoods
    this.cSells = shopInfo.cSells
    this.name = shopInfo.name
    this.score = shopInfo.score
    this.shopLogo = shopInfo.shopLogo
    this.shopUrl = shopInfo.shopUrl
  }
}

export class Params {
  constructor(itemParams) {
    this.info = itemParams.info
    this.rule = itemParams.rule
  }
}