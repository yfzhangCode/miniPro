// pages/cart/childrenCpns/cartbottom/cartbottom.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isAllflag: {
      type: Boolean,
      value: false
    },
    totalMoney: {
      type: Number,
      value: 0,
      observe(newv){
        console.log(newv)
      }
    },
    cartListlength: {
      type: Number,
      value: 0
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
    // 全选点击
    allChecked (e) {
      this.triggerEvent('slectAll', {}, {})
    }
  }
})
