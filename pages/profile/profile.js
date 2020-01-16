const app = getApp()
// pages/profile/profile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName: '登录/注册'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const userName = wx.getStorageSync('userInfo').name
    // 设置用户名
    this.setData({
      userName
    })
  },
  // 登录
  login () {
    // 获取微信code
    app.login().then((res) => {
      console.log(res)
      app.showToast('登录成功')
      // 设置 用户名
      this.setData({
        userName: res.name
      })
    }).catch((err) => {
      console.log(err)
    })
  }
})