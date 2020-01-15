// components/common/goodslist/goodslist.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goodsList: {
      type: Array,
      value: [],
      observer: (newV, oldV) => {
        // console.log(newV)
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
    // 点击商品详情数据
    itemClick (e) {
      // console.log(e)
      let pram = e.currentTarget.dataset
      // 子组件传递父组件事件， 数据
      this.triggerEvent('itemClick', pram, {})
    }
  }
})
