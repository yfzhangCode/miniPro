// components/tabnav/tabnav.js
Component({
  options: {
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表 组件生命周的函数 on函数
   */
  methods: {

  },
  // 监听页面的相关生命周期函数
  pageLifetimes: {
    show: function (){
      console.log('组件页面的的显示')
    },
    hide: function () {
      console.log('组件页面的隐藏')
    }
  },
  // 组件本身的生命周期
  lifetimes: {
    created () {
      console.log('组件的创建开始')
    },
    attached () {
      console.log('组件的创建')
    },
    ready () {
      console.log('组件的准备')
    },
    detached () {
      console.log('组件页面的销毁')
    }
  }
})
