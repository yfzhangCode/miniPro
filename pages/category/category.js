// pages/category/category.js
import userApi from '../..//http/index/user.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  /**
   * 
   * 页面加载 时请求分类数据
   */
  onLoad () {
    this.getCateGoryData()
  },
  getCateGoryData () {
    let opt = {}
    userApi._getCategoryData(opt).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  }
})