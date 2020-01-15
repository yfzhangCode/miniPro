import userApi from './http/index/user'
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
    token: '',
    cartList: []
  },
  // 验证登录是否过期
  authToken (token) {
    let option = {
      url: 'http://123.207.32.32:3000/auth',
      method: 'POST',
      data: {},
      token: token
    }
    userApi.request(option).then((res) => {
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
        userApi.request(option).then((resl) => {
          console.log(resl)
          wx.setStorageSync('token', resl.data.token)
        }).catch((err) => {
          console.log(err)
        })
      }
    })
  },
  // 全部弹窗
  showToast (msg, dur) {
    wx.showToast({
      title: msg,
      icon: 'none',
      duration: dur
    })
  },
  addCartData (obj) {
    // console.log(obj)
    const haveFlag = this.golabData.cartList.find(item => item.id === obj.id)
    // console.log(haveFlag)
    if (haveFlag) {
      haveFlag.count += 1
    } else {
      obj.count = 1
      obj.isCheck = false
      // 储存数据
      this.golabData.cartList.push(obj)
      wx.setStorageSync('cartList', this.golabData.cartList)
    }
    // 2.购物车回调
    if (this.addCartCallback) {
      this.addCartCallback()
    }
  }
})