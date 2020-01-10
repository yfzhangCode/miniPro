// components/tabcontrol/TabControl.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    currentIndex: {
      type: Number,
      value: 0,
      observer (newv, oldV) {
        console.log(newv)
        console.log(oldV)
      }
    },
    tabs: {
      type: Array,
      value: []
    }
  },
  /**
   * 组件的数据监听 相比较属性observer 更强大
   */
  observers: {
    currentIndex (newV) {
      console.log(newV)
      this.data.currentIndex = newV
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    counter: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handlerItem (e) {
      console.log(e)
      this.triggerEvent('tabClick', e.currentTarget.dataset, {})
    }
  }
})
