// pages/cart/childrenCpns/cartlist/cartlist.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    cartlists: {
      type: Array,
      value: [],
      observer(newV, oldV) {
        console.log(newV)
      }
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
    // 选择商品
    cartItemClick (e) {
      const objS = e.currentTarget.dataset
      this.triggerEvent('cartItemClick', objS, {})
    }
  }
})
