import request from './http/index/api.js'
//app.js
App({
  onLaunch () {
    // 验证登录状态
    const token = wx.getStorageSync('token')
    if (token && token.length !== 0) {
      // 有token 验证是否过期
      this.authToken(token)
    }
  },
  golabData: {
    token: ''
  },
  // 验证登录是否过期
  authToken (token) {
    let option = {
      url: 'http://123.207.32.32:3000/auth',
      method: 'POST',
      data: {},
      token: token
    }
    request(option).then((res) => {
      console.log(res)
      console.log('已登录')
    }).catch((err) => {
      console.log(err)
    })
  },
  // 登录方法
  login () {
    wx.login({
      success(res) {
        console.log(res)
        let option = {
          url: 'http://123.207.32.32:3000/login',
          method: 'POST',
          data: {
            code: res.code
          }
        }
        request(option).then((resl) => {
          console.log(resl)
          wx.setStorageSync('token', resl.data.token)
        }).catch((err) => {
          console.log(err)
        })
      }
    })
  }
})