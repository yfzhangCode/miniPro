// pages/cart/cart.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartList: [],
    isAllflag: false,
    cartLength: 0,
    totalMoney: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {
    // 获取购物车数据
    const lists = app.golabData.cartList || []
    if (lists.length !== 0) {
      // 购物车为空
      this.setData({
        cartList: lists
      })
    }
    // 添加购物车的回调
    // app.addCartCallback = () => {
    //   this.setData({
    //     cartList: app.globalData.cartList
    //   })
    //   // 数据改变
    //   this.changeData()
    // }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow () {
    // 动态设置标题
    wx.setNavigationBarTitle({
      title: `购物车(${this.data.cartList.length})`,
    })
  },
  // 选取购物车数据
  cartItemClick (e) {
    console.log(e)
    const checkedData = this.data.cartList.map((item) => {
      if (item.id === e.detail.item.id) {
        item.isCheck = !item.isCheck
        return item
      } else {
        return item
      }
    })
    console.log(checkedData)
    const allLength = this.data.cartList.filter((item) => {return item.isCheck === true})
    console.log(allLength.length)
    
    if (allLength.length === this.data.cartList.length) {
      this.setData({
        isAllflag: true
      })
    } else {
      this.setData({
        isAllflag: false
      })
    }
    // 设置数据
    this.setData({
      cartList: checkedData,
      cartLength: allLength.length
    })
    // 计算价格
    const that = this
    this.cartDataChange(this.data.cartList).then((res) => {
      console.log(res)
      that.setData({
        totalMoney: res
      })
    })
  },
  // 全选
  slectAll () {
    console.log('全选')
    // 查找是否有未选中的
    const falseFlag = this.data.cartList.find((item) => { return item.isCheck === false })
    console.log(falseFlag)
    const checkedData = this.data.cartList.map((item) => {
      if (falseFlag) {
        item.isCheck = true
      } else {
        item.isCheck = !item.isCheck
      }
      return item
    })
    const allLength = this.data.cartList.filter((item) => { return item.isCheck === true })
    this.setData({
      cartList: checkedData,
      isAllflag: !this.data.isAllflag,
      cartLength: allLength.length
    })
    const that = this
    this.cartDataChange(this.data.cartList).then((res) => {
      that.setData({
        totalMoney: res
      })
    })
  },
  // 计算总价格
  cartDataChange (arr) {
    return new Promise((resolve, reject) => {
      let totalM = 0
      arr.map((item) => {
        if (item.isCheck) {
          totalM += parseInt(item.price) * item.count
        }
      })
      resolve(totalM)
    })
  }
})