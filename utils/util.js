// 格式化时间
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
//
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/**
 * 处理商品数据
 * @class GoodsDetailData 定义类
 * 商品及店铺信息
 */
export class GoodsStoreInfo {
  // constructor 容器
  constructor(itemInfo, columns, shopInfo) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.realPrice = itemInfo.lowNowPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = shopInfo.services
    this.shopInfo = shopInfo
  }
}

/**
 * 处理商品数据
 * @class GoodsDetailParams 定义类
 * 商品的参数信息
 */
export class GoodsDetailParams {
  constructor(itemParams) {
    this.paramsInfo = itemParams
  }
}

module.exports = {
  formatTime: formatTime,
  GoodsStoreInfo: GoodsStoreInfo,
  GoodsDetailParams: GoodsDetailParams
}
