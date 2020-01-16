// pages/category/category.js
import userApi from '../..//http/index/user.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sideBarList: [],
    cateGories: [],
    cateGoodsList: []
  },
  /**
   * 
   * 页面加载 时请求分类数据
   */
  onLoad () {
    this.getCateGoryData()
  },
  // 获取侧边栏数据
  getCateGoryData () {
    let opt = {}
    userApi._getCategoryData(opt).then((res) => {
      console.log(res)
      // 获取侧边导航数据数据
      const sideBarData = res.data.category.list
      // 获取默认的数据
      this.getCategory(res.data.category.list[0].maitKey)
      this.getCateList(res.data.category.list[0].miniWallkey, 'sell')
      // 设置数据
      this.setData({
        sideBarList: sideBarData
      })
    }).catch((err) => {
      console.log(err)
    })
  },
  // 选择侧边导航
  navClick (e) {
    console.log(e)
    // 获取分类页面数据
    this.getCategory(e.detail.maitkey)
    this.getCateList(e.detail.miniwallkey, 'sell')
  },
  // 获取分类页面数据
  getCategory(maitKey) {
    let opt = {
      maitKey,
      token: ''
    }
    userApi._getSubCategoryData(opt).then((res) => {
      // console.log(res)
      const categories = res.data.list
      this.setData({
        cateGories: categories
      })
    }).catch((err) => {
      console.log(err)
    })
  },
  // 获取分类页面商品数据
  getCateList(miniWallkey, type) {
    let opt = {
      miniWallkey: miniWallkey,
      type: type,
      token: ''
    }
    userApi._getCategoryDetailData(opt).then((res) => {
      // console.log(res)
      const cateLists = res
      this.setData({
        cateGoodsList: cateLists
      })
    }).catch((err) => {
      console.log(err)
    })
  }
})