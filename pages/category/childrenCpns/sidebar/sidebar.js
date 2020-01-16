// pages/category/childrenCpns/sidebar/sidebar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    sidebarData: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 点击侧边导航
    navClick (e) {
      const prams = e.currentTarget.dataset
      this.setData({
        currentIndex: e.currentTarget.dataset.index
      })
      // 设置 
      this.triggerEvent('navClick', prams, {})
    }
  }
})
