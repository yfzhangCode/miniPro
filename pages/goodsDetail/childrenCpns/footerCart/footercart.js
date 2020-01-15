// pages/goodsDetail/childrenCpns/footerCart/footercart.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goodsInfo: {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 加入购物车
    addCart () {
      // 加入购物车数据
      const goodsObj = {}
      goodsObj.id = this.data.goodsInfo.iid
      goodsObj.price = this.data.goodsInfo.realPrice
      goodsObj.count = 1
      goodsObj.img = this.data.goodsInfo.image
      goodsObj.title = this.data.goodsInfo.title
      goodsObj.desc = this.data.goodsInfo.title
      goodsObj.isCheck = false
      // 传递事件
      this.triggerEvent('addCart', goodsObj, {})
    },
    // 购买
    Buy (e) {
      console.log(this.data.goodsInfo)
      this.triggerEvent('Buy', this.data.goodsInfo, {})
    }
  }
})
