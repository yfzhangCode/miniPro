// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const pages = getCurrentPages()
    console.log(pages)
  },
  /**
   * 
   * 监听页面卸载
   */
  onUnload () {
    console.log('页面销毁')
    const pages = getCurrentPages()
    console.log(pages)
    pages[pages.length - 2].setData({
      title: '返回首页'
    })
  }
})