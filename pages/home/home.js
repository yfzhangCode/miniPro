import request from './../../http/index/api.js'
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "首页"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let option = {
      url: 'http://123.207.32.32:8000/api/w1/home/data',
      method: 'GET',
      data: {
        type: 'sell',
        page: 1
      }
    }
    request(option).then((res) => {
      console.log(res)
    }).catch((err) => {
      cosole.log(err)
    })
  },
  // 登录
  login () {
    app.login()
  },
  // 跳转页面
  nextPgae () {
    wx.navigateTo({
      url: '../category/category',
    })
  }
})